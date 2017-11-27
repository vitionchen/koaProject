/**
 * Created by vson on 17-3-6.
 */
const sequelize = require('sequelize');
const my_db=new sequelize('koa-app','root','',{
    host:'127.0.0.1',
    port:'3306',
    dialect:'mysql'
});

const initTimeStr=()=>{
    const date=new Date();
    const year=date.getFullYear();
    const month=date.getMonth()+1;
    const day=date.getDate();
    return year+''+month+''+day;
};


const userList=my_db.define('customers',{
    userName:sequelize.STRING(10),
    id:{
        type:sequelize.STRING(10),
        primaryKey: true
    },
    password:sequelize.STRING(20)
},{
    timestamps: false
});

const register=async(jsonVal)=>{
    let status;
    if(!jsonVal.userName||!jsonVal.password){
        return false;
    }
    await userList.create({
        userName: jsonVal.userName,
        id: initTimeStr() + parseInt(Math.random() * 100),
        password: jsonVal.password
    }).then(()=>{
        status=true;
    }).catch(e => {
        status=false;
        console.log(e);
    });
    return status;
};

const routerPost=async(ctx,next)=>{
    console.log(ctx);
    const status=await register(ctx.request.body);
    console.log(status);
    ctx.response.body = {code:status?'200':'400',status:status?'success':'fail'};
};


module.exports={
    // get:routerGet,
    post:routerPost
};
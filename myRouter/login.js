/**
 * Created by vson on 17-3-2.
 */
const sequelize = require('sequelize');
const my_db=new sequelize('koa-app','root','',{
    host:'127.0.0.1',
    port:'3306',
    dialect:'mysql'
});


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


const routerGet=async(ctx,next)=>{
    // this.query获取参数;
    console.log('enterGet');
    const list=await userList.findAll({
    }).catch(e=>{
        console.log("error"+e);
    });
    let myList=[];
    for(let p of list){
        myList.push(p);
        console.log(typeof p);
    }
    ctx.response.body=myList;
};

const routerPost=async(ctx,next)=>{
    const aa=ctx.request.body.aa;
    let bc=31;
    await new Promise(resolve=>{
        if(aa==22){
            bc+=aa;
            console.log("~~~"+bc);
        }
        resolve(bc);
    });

    ctx.response.body = {abc:bc};
};


module.exports={
    get:routerGet,
    post:routerPost
};
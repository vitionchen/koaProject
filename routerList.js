/**
 * Created by vson on 17-3-2.
 */

const koaRouter=require('koa-router')();
// 载入路由
const login = require('./myRouter/login');
const register = require('./myRouter/register');


//getInfo接口
koaRouter.get('/login', login.get);
koaRouter.post('/login', login.post);

//register接口
koaRouter.post('/register', register.post);

module.exports=koaRouter;
/**
 * Created by vson on 17-2-27.
 */
// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
// 注意require('koa-router')返回的是函数:
// 创建一个Koa对象表示web app本身:
const app = new Koa();
const cors=require('koa-cors');
app.use(cors());
const bodyParser = require('koa-body');

app.use(bodyParser());

const routerList=require('./routerList');

app.use(async (ctx, next) => {
    await next();
});

app.use(routerList.routes());

app.listen(8696);
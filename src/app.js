const Koa = require('koa');
const KoaLogger = require('koa-logger');
const { koaBody } = require('koa-body');
const cors = require('@koa/cors');
const router = require('./routes.js');
const orm = require('./models');

const app = new Koa();

// Exponer el orm a la app
app.context.orm = orm;
app.use(cors());
app.use(KoaLogger());
app.use(koaBody());
app.use(router.routes());
app.use(async (ctx, next) => { ctx.body = 'Entro'; });

// app.listen(3000, () => {console.log("Escuchando puerto 3000")});

module.exports = app;

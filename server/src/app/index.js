import path from 'path';
import Koa from 'koa';
import serve from 'koa-static';
import router from '../router';
import logger from '../logger';

const app = new Koa();

// Error logging
app.on('error', (err, ctx) => {    
  logger.error(`${err} - ${ctx.method} ${ctx.url}`);
});

// Centralized error handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});

// Static files
app.use(serve(path.resolve('./public')));

// Logging
app.use(async (ctx, next) => {
  await next();
  logger.info(`${ctx.method} ${ctx.url} - ${ctx.response.status} ${ctx.response.message} - ${ctx.response.get('X-Response-Time')}`);
});

// X-Response-Time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const end = Date.now();
  ctx.set('X-Response-Time', `${end - start}ms`);
});

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS, HEAD');
  await next();
});

// Routing
app.use(router.routes());

export default app;
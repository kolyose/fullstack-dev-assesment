import path from 'path';
import Koa from 'koa';
import serve from 'koa-static';
import router from './router';

const app = new Koa();

// Error logging
app.on('error', err => {
  global.console.error(err);
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

// Routing
app.use(router.routes());

export default app;
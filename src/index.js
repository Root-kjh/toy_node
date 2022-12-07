const Koa = require('koa');
const app = new Koa();

// response
app.use(async (ctx, next) => {
    console.log(1);
    const started = new Date();
    await next();
    console.log(new Date() - started + 'ms');
    ctx.body = "test"
});

app.listen(3000);
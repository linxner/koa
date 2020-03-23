const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const cors = require('koa2-cors')

app.use(cors())
app.use(async (ctx, next) => {
    // ctx.set('Access-Control-Allow-Origin', '*')
    // ctx.body = ctx.url.split('=')[1]
    await next()
})

let a = { a: 'aa' }
router.get('/login/', async (ctx, next) => {
    ctx.status = 200
    
    await next()
})
app.use(router.routes());
app.listen(8080)
console.log('app listen in port 8080');

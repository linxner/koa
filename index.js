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



let promise = new Promise((resolve, reject) => {
    let a = 'bb';
    let b;
    if (a) {
        resolve(a);
    } else {
        reject('cc');
    }
})
// promise.then(res => { 
//     console.log(res);
// }).catch(res => {
//     console.log(res);
// })
async function aa() {
    setTimeout(() => {
        console.log('aa');
    }, 100)
    let b = await promise
    console.log(b);
    return b
}
aa().then(res => {
    console.log(res);
})
let a = { a: 'aa' };
router.get('/login/', async (ctx, next) => {
    ctx.status = 200;
    // console.log(a)
    console.log('aa');
    await next()
    ctx.body = 'cc';
    console.log('bb');

})
app.use(router.routes());
app.listen(8080)
console.log('app listen in port 8080');

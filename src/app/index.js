const Koa = require("koa")
const KoaBody = require("koa-body")

const app = new Koa()
app.use(KoaBody())
// const indexRouter = new Router()
const userRouter = require("../router/user.route")


app.use(userRouter.routes())

module.exports = app
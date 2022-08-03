const Koa = require("koa")
const KoaBody = require("koa-body")


const app = new Koa()
app.use(KoaBody())
// const indexRouter = new Router()
const userRouter = require("../router/user.route")
app.use(userRouter.routes())

// 统一错误处理
const errHandle = require("./errHandle")
app.on("error", errHandle)

module.exports = app
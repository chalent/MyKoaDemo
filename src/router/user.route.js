const Router = require("koa-router")

const { register, login } = require("../controller/user.controller")

const router = new Router({prefix: "/users"})  // 路由前缀名，会自动拼接

// 注册接口
router.post("/register", register)
router.post("/login", login)

module.exports = router
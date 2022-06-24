const { createUser } = require("../service/user.service")

class UserController {
  
  async register(ctx, next) {
    // 1. 获取参数
    console.log("register params", ctx.request.body);
    const {userName, password} = ctx.request.body
    // 2. 操作数据库
    const res = await createUser(userName, password);
    // 3. 返回结果
    ctx.body = res + "result: 用户注册成功"
  }

  async login(ctx, next) {
    ctx.body = "用户登录成功"
  }
  

}

module.exports = new UserController()
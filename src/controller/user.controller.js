const { createUser } = require("../service/user.service")
const { userRegisterError } = require("../constant/err.type")

class UserController {

  async register(ctx, next) {
    // 1. 获取参数
    console.log("register params1", ctx.request.body);
    const { userName, password } = ctx.request.body;
    // 为了防止意外错误，讲请求放在try...catch 中执行(理论上执行service层的方法，最好应包在try...catch中执行，便于后期排错)
    try {
      // 2. 操作数据库
      const res = await createUser(userName, password);
      // 3. 返回结果
      ctx.body = {
        code: 0,
        message: "用户注册成功",
        result: res
      }
    } catch (err) {
      console.log(err);
      ctx.app.emit("error", userRegisterError, ctx)
    }

  }

  async login(ctx, next) {
    ctx.body = "用户登录成功"
  }


}

module.exports = new UserController()
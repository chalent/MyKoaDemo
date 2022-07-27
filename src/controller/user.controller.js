const { createUser } = require("../service/user.service")

class UserController {
  
  async register(ctx, next) {
    // 1. 获取参数
    console.log("register params1", ctx.request.body);
    const {userName, password} = {"userName": "孙艺", "password": 1}  // 临时测试
    console.log("register params2", userName, password);
    // 2. 操作数据库
    const res = await createUser(userName, password);
    // 3. 返回结果
    ctx.body = {
      code: 0,
      message: "用户注册成功",
      result: res
    }
  }

  async login(ctx, next) {
    ctx.body = "用户登录成功"
  }
  

}

module.exports = new UserController()
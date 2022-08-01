const { createUser, getUserInfo } = require("../service/user.service")

class UserController {
  
  async register(ctx, next) {
    // 1. 获取参数
    console.log("register params1", ctx.request.body);
    const {userName, password} = ctx.request.body;
    // 合法性 和 合理性验证
    if(!userName || !password) {
      // 参数空校验
      console.error("用户名或密码为空");
      ctx.status = 400;  
      ctx.body = {
        code: "10001",
        message: "用户名或密码为空",
        result: null
      }
      return ;
    }
    if(getUserInfo({userName})) {
      // 查询用户是否已存在
      ctx.status = 409
      ctx.body = {
        code: "10002",
        message: "用户已存在",
        result: null
      }
      return;
    }

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
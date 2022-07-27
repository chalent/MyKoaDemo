const User = require("../model/user.model")


class UserService {
  async createUser(user_name, password) {
    console.log("获取用户参数", user_name, password);
    // 插入数据
    // User.create({
    //   // 表的字段：传递的值
    //   user_name: user_name,
    //   password: password
    // })


    // es新特性，kv键值对相同时可以直接简写
    let res = await User.create({ user_name: user_name, password: password })
    // console.log("service_user返回结果", res);
    return res.dataValues;
  }



}

module.exports = new UserService()
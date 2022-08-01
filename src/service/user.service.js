const User = require("../model/user.model")


class UserService {
  // 添加用户
  async createUser(userName, password) {
    console.log("获取用户参数", userName, password);
    // 插入数据
    // es新特性，kv键值对相同时可以直接简写
    let res = await User.create({ userName: userName, password: password })
    // console.log("service_user返回结果", res);
    return res.dataValues;
  }

  // 查询用户信息
  async getUserInfo({id, userName, isAdmin}) {
    const whereOpt = {}

    id && Object.assign(whereOpt, {id})
    userName && Object.assign(whereOpt, {userName})
    isAdmin && Object.assign(whereOpt, {isAdmin})

    const res = await User.findOne({
      attributes: ["id", "userName", "password", "isAdmin"],
      where: whereOpt
    })

    return res ? res.dataValues : null
  }



}

module.exports = new UserService()
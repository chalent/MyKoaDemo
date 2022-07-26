const {Sequelize} = require("sequelize")

const { MYSQL_HOST } = require("../config/config.default")
// demo代码，这里的数据库名等相关信息，应从.env或其他配置中读取
const sequelize = new Sequelize("zdsc", "root", "123456", {
    host: MYSQL_HOST,
    dialect: "mysql"
})

// 测试数据库连接结果
sequelize.authenticate().then(() => {
    console.log("数据库连接成功");
}).catch(() => {
    console.log("数据库连接失败");
})


module.exports = sequelize;
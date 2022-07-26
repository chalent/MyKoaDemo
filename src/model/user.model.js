// 导入Sequelize对象和DataTypes数据类型
const { DataTypes } = require("sequelize")

const seq = require("../db/seq")

// 创建模型(Model zd_user -> zd_users)
const User = seq.define("zd_User", {
    // 模型字段，与表的字段一致
    // id 会被sequelize自动创建和管理
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: "用户名，唯一"
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    }
}, {
    timestamps: false
})

// 强制同步：force:true表示当数据库有这个表，会强制删除并创建新的表
User.sync({ froce: true }) 

module.exports = User;

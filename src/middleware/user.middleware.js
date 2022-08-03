const { getUserInfo } = require("../service/user.service")
const { userFormateError, userAlreadyExited } = require("../constant/err.type")

const userValidator = async (ctx, next) => {
    const { userName, password } = ctx.request.body

    // 合法性 和 合理性验证
    if (!userName || !password) {
        // 参数空校验
        console.error("用户名或密码为空", ctx.request.body);
        ctx.app.emit("error", userFormateError, ctx)
        return;
    }

    await next();
}

const verifyUser = async (ctx, next) => {
    const { userName } = ctx.request.body
    const exitUser = await getUserInfo({ userName })
    if (exitUser) {
        console.error("用户已存在", ctx.request.body)
        ctx.app.emit("error", userAlreadyExited, ctx)
        return
    }

    await next();

}

module.exports = {
    userValidator,
    verifyUser
}
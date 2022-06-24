### 这是一个Koa测试项目！

### 项目初始化
npm init
创建src、gitignore等文件

### 环境配置相关
使用 nodemon 实现服务自动更新
使用 dotenv 环境变量配置

### npm 安装koa，koa路由等
npm i koa
npm i koa-router  编写路由，模块划分
备注：使用方法见api文档

进阶：
路由模块拆分,解析URL，分发给控制器不同方法
控制器controller: 处理不同业务

### 解析body，拆分service层
npm i koa-body
新建 service 层，处理数据库操作
在 controller 中调用并使用结果









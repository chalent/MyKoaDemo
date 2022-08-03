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


### 数据库操作
sequelize ORM 数据库工具

ORM：对象关系映射
· 数据表映射（对应）一个对象
· 数据表中的数行（记录）对应一个对象
· 数据表字段对应对象的属性
· 数据表的操作对应对象的方法

Sequelize 中间件 
  数据库连接工具
  npm 安装sequelize和mysql2（若使用的是mysql数据库）
新建db目录
  连接数据库等操作 -- sequelize连接mysql
新建model目录
  编写数据模型 -- 参考sequelize的数据模型定义方式
  sequelize 数据模型，根据写定的数据模型，执行生成对应数据表
新建middleware
  拆分中间件  
新建consitant
  存放一些静态数据  
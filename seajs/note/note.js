// seajs note

/**
 * #240 模块系统 https://github.com/seajs/seajs/issues/240
 * function/bind的救赎（上）： http://blog.csdn.net/myan/article/details/5928531
 * 继承与混合，略谈系统的构建方式： http://blog.csdn.net/aimingoo/article/details/6062997
 *
 * #242 CMD 模块定义规范
 * 定义模块的  基本书写格式  和  基本交互规范
 * 1. 一个模块就是一个文件
 * 2. 基本书写格式： define(factory)
 *      define: 全局函数
 *      define.cmd 标识cmd加载器  if(typeof define === "function" && define.cmd)
 *      factory: Function | Object | string
 *      factory(require, exports, module)
 *    Modules/Transport写法： define(id?, deps?, factory)
 * 3. Function::require: require(id)
 *      #259 书写可调试时需遵守的约定：把require当做语法关键字使用
 *      1。正确书写  2。 不要修改  3。使用直接量  4。动态依赖使用require.async
 *
 *      require.async
 *      require.resolve: 返回模块解析后的绝对路径
 * 4. Object::exports: 用于向外提供模块接口
 *      exports是module.exports的一个引用，直接给exports赋值不会改变module.exports的值，因此赋值无效
 * 5. Object::module：存储当前模块相关连的属性和方法
 *      module.id: 模块唯一标识，没有直接指定id时module.id == module.uri;
 *      module.uri: 按照模块系统路径解析规则得到的模块绝对路径;
 *      module.dependencies:
 *      module.exports
 *
 * #258 模块标识 https://github.com/seajs/seajs/issues/258
 * 使用CommonJS模块标识的超集
 * 相对标识： 模块环境中，以.开头的标识，永远相对当前模块的URI来解析
 * 顶级标识： 不以.或/开始，相对模块系统的基础路径（base）解析，base默认值与sea.js的访问路径相关
 * 普通路径： 绝对路径，根路径，模块外的相对路径，相对当前页面解析
 * 标识后缀自动添加规则： 路径中有问号、或最后一个字符是#时不会自动填加.js
 *
 *
 * #426 为什么要有约定和构建工具
 * 在书写 CMD 模块时，需要遵守 require 书写约定 。
 * 在压缩 CMD 模块时，推荐使用配套的 构建工具 来压缩。
 * CMD模块的构建过程： 提取、压缩
 * 提取模块的标识id和依赖dependencies
 *
 * #260 模块的加载启动 https://github.com/seajs/seajs/issues/260
 * 页面引入sea.js文件
 * 调用seajs.use方法
 *
 * #262 配置
 * alias: 别名配置
 * paths: 路径配置
 * vars: 变量配置
 * map: 映射配置
 * preload: 预加载项
 * debug: 调试模式
 * base: 顶级标识解析路径
 * charset: 文件编码
 *
 * #588 前端模块化流派 https://github.com/seajs/seajs/issues/588
 * CommonJS:  Modules/1.0
 * -> Modules/1.x 流派: 新增Modules/Transport规范
 * -> Modules/Async 流派:  AMD规范 RequireJS
 * -> Modules/2.0 流派: Modules/2.0-draft BravoJS || Modules/Wrappings规范 FlyScript -> CMD规范 seaJS
 *
 * #547 前端模块化开发的价值
 * 命名冲突 -> java命名空间 -> YUI沙箱
 * 文件依赖 -> 人工配置 -> seajs： exports暴露接口 && require引入依赖
 *
*/

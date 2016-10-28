// 单例模式

/**单例模式内涵
 * 描述了创建对象的构造函数（--创建对象的函数）的行为
 * 构造函数可以被多次调用，但是在系统运行过程中只会创建一个对象
 * 当多次调用构造函数时，构造函数返回第一次创建的对象。
 */

// Imp 1: 单例模式
var createMask = function(){
  var mask;
  return function(){
  		
        return mask || ( mask = document.body.appendChild( document.createElement('div') ) )
  }
}()

/**分析Imp 1
 * 使用闭包保存已创建的对象
 * 使用 || 运算实现第一次创建
 * 使用了立即调用函数表达式，单例模式已经构造完毕
 */

// Imp 2：singleton包装器
// function create( tag ){
// 	return document.body.appendChild( document.createElement( tag ) );
// }


// var singleton = function( fn ){
//     var result;
//     return function(){
//         return result || ( result = fn .apply( this, arguments ) );
//     }
// } 

// createMask = singleton( create )

/**分析
 * 1. 使用闭包，保存内部参数
 * 2. singleton是一个工厂函数
 * 3. createMask调用singleton创建了一个单例对象。多次调用createMask只会执行一次。
 * 4. 对象的创建过程被singleton委托给单独的函数
 * 5. singleton需要在使用时自行配置，在调用后才完成了单例模式的设计。
*/



// 享元模式
/**案例
 * GUI里tablelist中的items可以用享元实现，以便循环使用，不用为每个数据生成一个item控件
 */


 // 职责链模式
 /**案例
  * 事件冒泡过程
  */


// 观察者模式
/**案例
 * 事件驱动系统，订阅/发布模式
 */

// 迭代器模式
/**案例
 * 函数式编程方法里的 each 方法
 */

 // 组合模式
 /**案例
  * jQuery对象？ key：树形结构
  */

// 中介者模式
/**案例
 * MVC架构，control层
 */

// 
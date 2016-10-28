[TOC]

# Reference
1. learning JavaScript Design Patterns - Flayweight、Minin、Decorator
2. http://www.dofactory.com/javascript/design-patterns  
    --> design-patterns.md
3. [4 JavaScript Design Patterns You Should Know](https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know) 
    --> design-patterns.md
4. [Understanding Design Patterns in JavaScript](https://code.tutsplus.com/tutorials/understanding-design-patterns-in-javascript--net-25930)  _simple of #1_


# JavaScript Design Patterns 
设计模式是高级的面向对象的针对经常发生的软件问题的解决方案。模式关于可重用的设计和对象交互。每个模式有一个名字，并且在讨论复杂设计问题时作为词汇使用。
GoF的23种设计模式是所有其他设计模式的基础，他们分为三组：创建式，结构式，行为式
在这个教程中，我们为每一个GoF模式提供了JavaScript例子。大多数情况下，他们在原始设计模式的结构和目标之下。这些例子展示了每个模式背后的原则，但是对于JavaScript他们不是最好的。
JavaScript优化的模式可以在我们的[JavaScript + jQuery Design Pattern Framework](http://www.dofactory.com/products/javascript-jquery-design-pattern-framework)中得到，一个为web app开发者和设计师提供的单独的说明...

- 创建式模式
 * 抽象工厂：创建几个相似类的实例
    factory：用于创建对象的对象
    abstract factory：抽象出了创建对象的共享方法

 * 生成器：分离对象的创建和表示
    _#4
    需要创建Product
    director：指定类型和内容
    builder：提供类型和内容_
>     var myDiv = $('<div id="myDiv">This is a div.</div>');
>  
>     //myDiv now represents a jQuery object referencing a DOM node.
>      
>     var someText = $('<p/>');
>     //someText is a jQuery object referencing an HTMLParagraphElement
>      
>     var input = $('<input />');


 * 工厂方法：创建几个衍生类的实例
 * 原型：一个用于复制的完全初始化的实例
    object.creat()
 * 单例：一个只能有一个实例存在的类


- 结构模式
 * 适配器：匹配不同类的接口
 * 桥接：将类的接口黑实例分开
 * 组合：一个简单的组合对象的树状结构
     - 像对待单个元素一样对待集合
 * 装饰：为对象动态的添加职责
 * 外观：一个表示整个潜在系统的类
     -  jQuery normalizes the browser inconsistencies to ensure that ready() is fired at the appropriate time. 
 * 享元：一个用于共享的实例
 * 代理：用一个对象代表另一个对象


 - 行为模式
  * 职责链：将请求在对象链上传递的方法
  * 命令：将命令包装成一个对象
  * 解释器：在程序中包含语言元素的方法
  * 迭代：按序访问集合的元素
  * 中介者：定义类之间的简单交流
      - 航空管制塔
  * 备忘录：捕获和存储累的内部状态
  * 观察者：一个通知大量类的方法
      - 事件驱动模式
      - mvc架构
  * 状态：改变对象的行为，当他的状态改变的时候
  * 策略：在类里封装算法
  * 模板方法：将算法的不走传递给子类
  * 访问者：不改变类，为类添加一个操作


## 模块设计模式

### Immediately-Invoked-Function-Expressions (IIFE) 立即执行函数表达式

> (function() {
> 
>     // declare private variables and/or functions
> 
>     return {
>       // declare public variables and/or functions
>     }
> 
> })();

### REVEALING MODULE PATTERN
用提供的名称（ie: .first, .second）去访问公共方法

> var Exposer = (function() {
>   var privateVariable = 10;
> 
>   var privateMethod = function() {
>     console.log('Inside a private method!');
>     privateVariable++;
>   }
> 
>   var methodToExpose = function() {
>     console.log('This is a method I want to expose!');
>   }
> 
>   var otherMethodIWantToExpose = function() {
>     privateMethod();
>   }
> 
>   return {
>       first: methodToExpose,
>       second: otherMethodIWantToExpose
>   };
> })();


## 原型设计模式

依赖原型继承链
javascript原生支持

### 


## 观察者模式

AngularJS, $scope 对象
mvc架构


目标
观察者
观察对象


### PUBLISH/SUBSCRIBE


## 单例模式




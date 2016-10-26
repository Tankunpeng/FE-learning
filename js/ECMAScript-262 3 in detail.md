[TOC]
## Chapter 3 This
[原文链接](http://dmitrysoshnikov.com/ecmascript/chapter-3-this/)

### 介绍

### 定义
~~~
this是执行环境的属性。他是code执行的环境中一个特殊对象。
~~~

> activeExecutionContext = {
>   VO: {...},
>   this: thisValue
> };

VO是之前章节中讨论过的变量对象
this直接与代码执行方式的上下文联系。它的值在进入上下文时决定并且在代码执行时是不可更改的。
让我们来详细的讨论具体的情况。

### 在全局代码中的This值
这里所有的事情都很简单。在全局作用域中，this的值始终是全局对象本身。因此，可以直接引用它
> // explicit property definition of
> // the global object
> this.a = 10; // global.a = 10
> alert(a); // 10
> 
> // implicit definition via assigning
> // to unqualified identifier
> b = 20;
> alert(this.b); // 20
>  
> // also implicit via variable declaration
> // because variable object of the global context
> // is the global object itself
> var c = 30;
> alert(this.c); // 30

### 函数代码中的This值
在函数代码中使用this很有趣。这是最复杂的一种情况，会产生很多问题。
在函数中的this取值的首要（可能是主要）性质是this的取值不是静态的绑定到函数上。
如上所述，this取值在进入上下文的时候决定，并且


### 函数调用和非引用类型
### 引用类型和null  this值
### 为函数调用手动设置this值
Function.prototype中定义了两种方法可以在函数调用时手动指定this值。他们是apply方法和call方法。
两者都把首个参数作为调用时的this值使用。这两个方法的区别不大：apply的第二个参数必须是一个数组（或者是类数组对象），而call方法可以接受任何参数。两个方法的必要参数只有第一个：this值。

### 总结
在这篇文章中，我们讨论了ECMAScript中this关键字的特征。我希望这篇文章有助于更准确的认识ECMAScript中this关键字的工作原理。和以前一样，我很乐意在评论中回答你们的问题。


# chapter7.1 oop-general-theory
[url](http://dmitrysoshnikov.com/ecmascript/chapter-7.2-oop-ecmascript-implementation/)

## Introduction
## General provisions, paradigms and ideology
## feture <- class based & prototype based models   

 feture <- static class based models
 1. create an object <= define its class
 2. class => object(instances)
 3. resolution <- methods : chain <- inheritance : strict,direct,unchangeable
 4. class-descendant[ all properties <- inheritance chain]
 5. being created, change class !=> change instances;
 6. class => behavior, properties <- instance 

 feture <- static class based models
 1. basic concept: object;
 2. objects: fully dynamic, mutable
 3. no classes
 4. if(!answer(message) themselves): delegate(prototypes,message)
 5. object prototype: changed at any time
 6. delegation based: change in prototype effect related object
 7. concatenative: not effect
 8. if(!answer(message)): can signal the caller to take additional measure
 9. identification: not type, but current set of characteristics
 
 # chapter7.2 OOP: ECMAScript implementation

 ## Introduction

 ## ECMAScript OOP implementation

 ### Data types
 #### Primitive value types
 #### Object type
 ##### Dynamic nature
 ##### Built-in, native and host objects
 ##### Boolean, String and Number objects

 ### Constructor (_new_)
_Constructor: a function that *creates* and *initializes* the newly created object.  => new Fun_

_creates (auto): memory allocation => Fun[[Construct]]_

_initialization (user code)=> Fun[[call]].apply(created object)_

> F = new NativeObject();
>  
> F.[[Class]] = "Function"
>  
> .... // other properties
>  
> F.[[Call]] = <reference to function> // function itself
>  
> F.[[Construct]] = internalConstructor // general internal constructor
>  
> .... // other properties
>  
> // prototype of objects created by the F constructor
> __objectPrototype = {};
> __objectPrototype.constructor = F // {DontEnum}
> F.prototype = __objectPrototype

 #### Algorithm of objects creation
 
>  F.[\[Construct]](initialParameters):
>  
> O = new NativeObject();
>  
> // property [\[Class]] is set to "Object", i.e. simple object
> O.[\[Class]] = "Object"
>  
> // get the object on which
> // at the moment references F.prototype
> var __objectPrototype = F.prototype;
>  
> // if __objectPrototype is an object, then:
> O.[\[Prototype]] = __objectPrototype
> // else:
> O.[\[Prototype]] = Object.prototype;
> // where O.[\[Prototype]] is the prototype of the object
>  
> // initialization of the newly created object
> // applying the F.[\[Call]]; pass:
> // as this value – newly created object - O,
> // arguments are the same as initialParameters for F
> R = F.[\[Call]](initialParameters); this === O;
> // where R is the returned value of the [\[Call]]
> // in JS view it looks like:
> // R = F.apply(O, initialParameters);
>  
> // if R is an object
> return R
> // else
> return O

 ### Prototype
 #### Property contructor
 - contructor is property of prototype
 - auto creat in new object creation
 - new object.contructor -> NativeObject.prototype.contructor
 - NativeObject.prototype.contructor could be overwrite, and reset.

 #### Explicit prototype and implicit [\[Prototype]] properties

>  // was before changing of A.prototype
> a.[\[Prototype\]] ----> Prototype <---- A.prototype
>  
> // became after
> A.prototype ----> New prototype // new objects will have this prototype
> a.[\[Prototype\]] ----> Prototype // reference to old prototype

- object get prototype by inner implicit reference [\[Prototype]]
- function's explicit prototype property use to initial implicit [\[Prototype]] properties at object creation. They both reference to same prototype object.
- we can use explicit prototype to modify the prototype object.
- replacing prototype property of the constructor does not affect the prototype of already created objects.
- The main rule here is: the object’s prototype is set at the moment of object’s creation and after that cannot be changed to new object. Using the explicit prototype reference from the constructor if it still refers to the same object, it is possible only to add new or modify existing properties of the object’s prototype.
- function's prototype != function's prototype property

 #### Non-standard __proto__ property
 - we may use __proto__ as inner [\[Prototype]] property.
 - we can query object's prototype by Object.getPrototypeOf(obj) in ES5.

 #### Object is independent from its constructor
 - prototype of an instance (via [\[Prototype]] reference) is independent from the constructor & the prototype property of the constructor.
 
 #### Feature of instanceof operator
 - This operator works exactly with the prototype chain of an object but not with the constructor itself

 #### Prototype as a storage for methods and shared properties

 ### Reading and writing properties
 #### [\[Get]] method
 #### [\[Put]] method
 #### Property accessors
 - dot notation
 - bracket notation
 - property accessor always calls ToObject conversion for the object standing on left hand side from the property accessor. 
 
 ### Inheritance

- ECMAScript uses delegating inheritance based on prototypes.
- [\[Get]] mehtod.

>  alert(1..toString());

 #### Prototype chain



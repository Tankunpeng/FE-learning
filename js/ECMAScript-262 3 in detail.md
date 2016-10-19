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
[TOC]
#知识结构 ECMAScript 5
## 概览
编程语言 都有*开发平台、标准库、API函数*，用来提供基本功能。
JavaScript语言核心定义了 文本、数组、日期和正则表达式 相关的API
JavaScript的宿主环境提供了 输入输出 功能

### 内容概述
part 1 语言本身的特性+少量内置API
part 2 JavaScript如何在浏览器工作+基于浏览器API
part 3 核心API手册
part 4 客户端JavaScript手册
### 语言核心
数据类型: 对象、数组
初始化表达式
表达式： 可以通过运算得出一个值的短语，不包含任何操作，不改变程序的运行状态
语句：改变程序的运行状态；赋值语句、声明语句、控制语句
函数：带名字和参数的JavaScript代码段
方法：用函数作为对象的属性
类
正则
核心子集和超集
浏览器以外的JavaScript环境
### 客户端avaScript 

如何在客户端运行JavaScript
浏览器脚本技术+重要的全局函数
DOM操作
CSS操作
事件处理

HTTP请求
JQuery
数据存储机制+会话状态保持
基于canvas的客户端API
HTML5 Web应用API


## 词法结构

### 字符集
Unicode 3+
#### 区分大小写
#### 空格、换行符和格式控制符
#### Unicode转义序列
\u+4个十六进制数
#### 标准化
同一字符可能有多种编码，JavaScript默认使用标准格式解析代码，不做标准化处理


### 注释
//
/**/

### 直接量

### 标识符和保留字
#### _标识符_
字母、_、$、数字（不做为首字符）
可以使用Unicode字符全集中的字母和数字

#### _保留字_
if else 
for in 
do while 
switch case default 
try throw  catch finally 
break continue
var function void 
instanceof typeof 
debugger delete
true false null
new return 
with this

class const enum export extends import  super
_严格模式保留字_
implements let private public yield
interface package protected static

arguments eval
_ES3保留字_

_JavaScript全局变量和函数_
arguments
Array Boolean Date Error Function JSON Math Number Object  RegExp String 
EvalError RangeError ReferenceError SyntaxError TypeError URIError
decodeURI decodeURIComponent encodeURI encodeURIComponent
eval parseInt parseFloat isFinite isNaN
Infinity NaN undefined
_运行环境中的全局属性列表_

### 可选的分号
一条语句的结束成为下一语句的开始
_语句结束标识：_
；
return/break/continue + 换行
换行 + "++/--"
换行+当前语句和下一行语句无法合并解析

## 类型值和变量
_类型_ 能够表示并操作的值的类型称作数据类型
_值_
_变量_ 一个值的符号名称

JavaScript数据类型：
原始类型：数字、字符串、布尔值、null、undefined
对象类型：
- 对象：属性的集合。“命名值”的无序集合
- 数组：带编号的值的有序集合
- 函数：具有与其相关联的可执行代码的对象
- 类：用于初始化新对象（new运算符）的函数称为构造函数。构造函数定义了一类对象。Array、Function、RegExp、Error
JavaScript的内存管理机制：自动对内存进行垃圾回收

JavaScript可以为对象定义方法。null、undefined无法拥有方法

可变类型：类型的值可以修改。对象、数组
不可变类型：数字、布尔值、null、undefined、字符串

JavaScript可以自由的进行数据类型转换。

JavaScript变量是无类型的。可被赋予任何类型的值，也可重新赋予不同类型的值。

JavaScript使用词法作用域。不再任何函数内声明的变量成为全局变量，在程序任何地方都可见。在函数内声明的变量具有函数作用域，只在函数内可见。

### 数字
JavaScript使用IEEE 754标准定义的64为浮点格式表示数字。不区分整数和浮点数
整型直接量：十进制、十六进制、八进制
浮点型直接量：[digits][.digits][(E|e)[(+|-)]digits]
算术运算：+-*/%、Math对象
上溢下溢：（-）Infinity、（-）0。 -0==+0； -Infinity！=Infinity
非数字值：运算没有意义 NaN，与任何值都不相等，包括自身。
数字判断：isNaN、isFinite
浮点数判等有误差。

### 文本
string：由16位值组成的不可变的有序序列，用于表示文本。采用UTF-16的Unicode字符集。常用Unicode字符通过16位的内码表示，代表字符串中的单个字符；不能被表示为16位的Unicode字符用两个16为值组成的一个序列表示。JavaScript定义的各式字符串操作方法均作用于16位值，而非字符。
#### 字符串直接量
""/''
可用\换行书写
最好在JavaScript和HTML中使用独立的引号风格
#### 转义字符
\x + Latin-1字码
\u + Unicode字码
\ + 转义字符
#### 字符串的使用
+ 连接运算符
s.length 属性
方法
s.charAt
s.substring
s.slice
s.indexOf
s.lastIndexOf
s.split
s.replace
s.toUpperCase

### 布尔值
true false
假值：undefined、null、0、-0、NaN、""

#### 布尔值的使用
&&  ||  ！
toString()

### null和undefined
#### null
特殊的对象，含义是"非对象"，表示对象是无值的。是程序级的、正常的或意料中的值的空缺。
tyepof null=="object"
没有任何属性和方法
#### undefined
表明变量没有初始化,是预定义的全局变量，值为“未定义”。是自有类型的唯一成员。是系统级的、出乎意料的或类似错误的值的空缺。
typeof undefined == “undefined”
没有任何属性和方法

### 全局对象
this/window
全局对象定义的属性是全局定义的符号，JavaScript可以直接使用。
当JavaScript解释器启动的时候或浏览器加载新页面时，创建新的全局对象，并定义初始属性。
代码声明的全局变量是全局对象的一个属性。

### 包装对象
用于创建一个临时对象来处理基本类型的属性引用。
存取字符串、数字或布尔值的属性时创建的临时对象称为包装对象，通常制备看作是实现细节，不用特别关注。
字符串、数字和布尔值的属性都是只读的，并且不能给他们定义新属性。
可以显式的创建包装对象
原始对象和包装对象在“==”中视为相等，在“===”中视为不等。

### 原始值与对象
原始值不可变，原始值的比较是值的比较。
对象的值是可以修改的，对象的比较是引用的比较，当且仅当引用同一个基对象时他们相等。
复制对象需显式复制每个属性。

### 类型转换
#### 转换规则

#### 显式转换
1. 使用包装对象
2. x + "" ==> String(x)
3. +x ==>Number(x)
4. !!x ==> Boolean(x)
5. 数字转字符串：toString/toFixed/toExponential/toPrecision
6. 字符串转数字：Number/parseInt/parseFloat


#### 对象转原始值


#### 变量声明
var
未声明直接赋值的变量都作为全局对象的属性（包括函数作用域中）_与普通变量不同_

#### 变量作用域
全局作用域
局部作用域：函数作用域，可以嵌套，可覆盖全局变量
声明提前：须将变量声明放在函数体顶部。
_作为属性的变量_
用var声明的全局变量作为全局对象的不可配置属性，无法通过delete运算符删除。
为未声明变量赋值自动创建的全局变量是可配置属性，可以删除。
_作用域链_
每段代码都有与其关联的作用域链。作用域链是一个对象列表，这组对象定义了这段代码作用域中的变量。

## 表达式和运算符

## 语句
### 表达式语句
### 符合语句和空语句
### 声明语句
### 条件语句
### 循环语句
### 跳转语句
### 其他语句
####with语句
####debugger语句#
###use strict指令

## 对象
## 数组
## 函数
## 类


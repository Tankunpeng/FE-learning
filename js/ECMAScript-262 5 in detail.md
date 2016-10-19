[TOC]
## Chapter 3.1 语义环境：一般理论
[原文链接](http://dmitrysoshnikov.com/ecmascript/es5-chapter-3-1-lexical-environments-common-theory/)

### 介绍

### 基本理论

#### 作用域
通常，作用域用于管理程序不同部分的变量的可见性和可获得性。
与作用与相关的不同封装抽象用于提供一个更好的模块化系统来避免命名冲突。

#### 静态作用域
变量解析独立于调用环境。并且，这是因为在函数定义的时候，最近的寓意环境是
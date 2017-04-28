[TOC]
# markdown语法总结
源自：[Markdown 语法说明][]

## 标记类别
块：
标题(h1-h6)：`#（1-6个）`、底线`===/---`
列表(ul>li)：标记`* + - 1.`,项目段落需缩进成区块 
引用区块(quote)：`>`可嵌套，可使用Markdown语法
代码区块(pre)：缩进`4个空格/1个Tab`
分割线(hr)：三个以上`* - _`
---
行内：
链接(a)：`[name](url)`参考`[name][n]  [n]:url`隐式链接`[name][]  [name]:url`
图片(img)：链接前加`!`
代码(pre)：行内``` `` ```, 区块4个空格/1个Tab
强调(em\strong)：`_`_here_`_`、`*`*here*`*`、`__`__here__`__` 、`**`**here**`**`
***
其他：
自动链接：`<>`
转义字符：`\`
自动目录标记：`[TOC]`*必须在文件开头*
___
兼容HTML：
1. 行内html标签可以直接插入，块级html标签前后要空行。
2. 自动将<,&字符转换成 html实体形式 `&lt;` `&amp;` 

[Markdown 语法说明]: http://www.appinn.com/markdown/






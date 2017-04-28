[TOC]
# CSS语法总结

## 样式类别
*位置*
1. 布局
    1. display: **inline**
        inline | block | list-item | inline-block |
        table | inline-table |
        table-row-group | table-column-group |
        table-header-group |  table-footer-group |  
        table-row | table-column | table-cell | table-caption | 
        none | inherit
    2. position:**stctic** `static | relative | absolute | fixed | inherit`
    3. overflow:**visible** `visible | hidden | scroll | auto | inherit`  
    4. float:**none** `left | right | none | inherit` 
    5. clear:**none** `none | left |right | both | inherit`
    6. clip:**auto** `<shape>|auto|inherit`
    7. z-index: 
2. 尺寸
    1. margin:**0**`<margin-width>{1,4}|inherit`
    2. padding:**0** `<padding-width>{1,4}|inherit`
    3. width/height: **auto**`<length>|<percentage>|auto|inherit`
    4. top/right/bottom/left：**auto**`<length>|<percentage>|auto|inherit`
---
*内容*
3. 背景
    1. background： 
    2. border：
    3. outerline：
4. 行内样式[继承]
    1. line-height: **normal**
    2. vertical-align: 
    3. text-align: 
    4. text-decoration[非继承]:
    5. text-transform:
    6. text-indent:
    7. letter-spacing:
    8. word-spacing:
    9. white-space: 
5. 文字样式[继承]
    1. font: 
    2. color:  
---
*专门样式*
    1. list：
    2. table：
    3. cursor：

## 位置

## 尺寸

## 格式
1. 背景
2. 


## 外边距折叠
*名词*
两个或多个相邻的外边距会被折叠成一个边距，这个边距叫做折叠边距。
*折叠原理*
纵向相邻的margin会折叠，水平margin不会折叠
根元素盒的margin不参与折叠
有clearance的元素，不参与父元素的底部边距折叠。
两个边距相邻，当且仅当：
都是处于同一个块格式化上下文的流内块级盒
之间没有行盒，空隙，padding，border
都属于垂直临盒的边：
    - TM vs TM; 
    - BM vs TM; 
    - BM vs BM 父盒的高度计算值为auto; 
    - TM vs BM 没有创建新的格式化上下文，没有流内子盒，min-height计算值为0，height计算值为0或auto;
如果构成折叠边距的边距中有一个边距和一个其他边距相邻，那么折叠的边距与那个其他边距相邻。（折叠边距可以继续参与折叠）
*折叠结果*
折叠边距的高由最大边距值决定，如果有负边距，则为最大正边距+最大负边距。
边距折叠元素的位置：上边距与父元素上边距完全折叠的元素的上边框和父元素的上边框重合。其他边距折叠元素的位置很明确。
## 可视化格式模型
### 模型简介
作用：对于可视化媒体，用户代理如何处理文档树。
过程：文档树中的每个元素根据盒模型生成0个或几个盒。这些盒的布局由（以下因素）控制：
- 盒尺寸和类型；
- 定位模式；
- 文档树元素间的关系;
- 外部信息（视口大小、图片内在尺寸）


非替换元素：元素的内容包含在文档中
可替换元素：用作为其他元素占位符的一个元素
根元素：位于文档树顶端的元素。HTML文档中为`<html>`
定位元素：position值不为static的元素

块级元素
行内元素

视口：浏览器窗口区域
包含块：包含盒模型的盒子，用于为盒模型确定位置。每个盒都根据其包含块给定了一个位置，但它不受该包含块的限制，可能会溢出。盒模型可以作后代的包含块。元素的包含块完全由position属性决定。

### 包含块  containing block
元素（生成的）盒的位置和大小有时是根据一个特定矩形计算的，叫做该元素的包含块（containing block）。元素的包含块的定义如下: 
    
> 1. **根元素**所在的包含块是一个被称为*初始包含块*的矩形。对于连续媒体，尺寸取自**视口**的尺寸，并且被固定在画布开始的位置；对于分页媒体就是页区（pagearea）。初始包含块的'direction'属性与根元素的相同
> 2. 对于**其它元素**，如果该元素具有**'position:relative或static'**，包含块由其**最近的块容器祖先**盒的content边形成
> 3. 如果元素具有**“position：fixed”**，包含块由连续媒体的**视口**或分页媒体的**页**建立。
> 4. 如果元素具有**'position: absolute'**，包含块由**最近的'position'为'absolute'，'relative'或者'fixed'的祖先**建立，按照如下方式：
>   - 如果该祖先是一个*内联*元素，包含块就是**环绕着为该元素生成的第一个和最后一个内联盒的padding box的边界框**（bounding box）。
>   - 在CSS 2.1中，如果该内联元素被跨行分割了，那么包含块是未定义的
>   - 否则，包含块由该祖先的padding边形成
> 5. 如果没有这样的祖先，包含块就是初始包含块

*单纯的float元素（position：static）不作为绝对定位子元素的包含块*


### 盒模型的生成控制

盒模型的类型：

块级元素：display:block,list-item,table
块级盒：块级元素的盒参与块级格式化上下文，称为块级盒。
块级容器盒：能够作为容器，为子元素提供块级环境和内联环境(当只包含行内元素时)。
块盒：块级的能够作为容器包含其他元素的盒。反例`display：table vs. display：inline-block`

匿名块：如果块级容器包含块级元素和行内元素，行内元素会被一个匿名块包围，这样容器里只有块级盒。当行内盒中包含块盒时，块盒两边的行内元素也会被匿名块包围。

匿名盒的属性从包含它的非匿名盒处继承，不可继承的属性取初始值。

内联级元素：不会为其内容形成新块的元素。display：inline,inline-block,inline-table
内联级盒：内联级元素生成内联级盒，即参与行级格式化上下文的盒。
内联盒：能够作为容器，为子元素提供内联环境。无法作为容器的内联级盒称为原子内联级盒`<img>`。

匿名内联盒：被直接包含在块容器元素中的文本

display属性的计算值和指定值相同（除了定位元素，浮动元素和根元素）。
用户代理会重写display属性

### 定位模式
一个盒可能根据三种定位模式来布局
1. 常规流。块格式化上下文/内联格式化上下文+相对定位
2. 浮动：先按常规流布局，然后跳出常规流尽可能左右移动。
3. 绝对定位：完全跳出常规流，根据包含块确定位置。

*脱离流的元素：根元素，浮动的，绝对定位的元素*
*流内的元素：未脱离流的元素*
*元素A的流：一个集合，包含A和所有最近脱离流的祖先是A的后代元素*
*定位的元素：一个position属性不是static的元素*

*position属性*
static：常规流布局，top/right/bottom/left失效
relative：按常规流定位，再偏移。
absolute：根据相对包含块的偏移量确定位置
fixed：根据相对视口的偏移量确定位置
*盒偏移*
top, right, bottom, left

### 常规流
常规流中的盒必须属于一个格式化上下文--块或内联

块格式化上下文
**浮动，绝对定位元素，非块盒的块容器，和overflow不为visible的块盒（当该值以经传递到视口时除外）会为他们的内容创建一个新的块格式化上下文。**

- 从包含块顶部开始延竖直方向依次排列
- 相邻元素margin会合并
- 每个盒的left外边挨着包含块的左边，除非该盒建立了新的块格式化上下文。

内联格式化上下文
从包含块顶部开始一个接一个水平放置。水平margin、border和padding都有效。包含来自同一行的盒的矩形区域叫做行盒。
行盒宽度由包含块和浮动情况决定，高度需按规则计算
行盒高度要容纳所有的盒。内联级盒高小于行盒时，可用vertical-align指定对齐方式。
行盒的宽度会受浮动的影响。内联级盒宽度小于行盒时，可用text-align指定对齐方式。
    - 当行盒宽度不够时，行盒会垂直堆叠，行盒间没有垂直间隔且不会重叠。
    - 内联盒超出行盒宽度时，内联盒会被分割，margin，border，padding在分割处没有可视化效果。如果内联块无法分割，会从行盒溢出。
行盒在一个内联格式化上下文中是作为存放内联元素的需要而创建的。当其包含的元素什么内容都没有，那么如果为了确定子元素的位置，我们可以认为有一个行高为0的行盒，除此之外，必须认为这个行盒是不存在的。

相对定位
相对定位不会影响后续元素位置。

### 浮动

float（盒）就是一个在当前行向左或向右移动的盒。其他内容会延着它的一侧排列。

 一个浮动盒会向左或向右移动，直到其外边（outer edge）挨到包含块边或者另一个浮动盒的外边。如果存在行盒，浮动盒的外top（边）会与当前行盒的top（边）对齐

如果没有足够的水平空间来浮动，它会向下移动，直到空间合适或者不会再出现其它浮动了 

因为浮动（盒）不在流内，在浮动盒之前或者之后创建的未定位的（non-positioned）块盒会竖直排列，就像浮动不存在一样。然而，接着（next to）浮动（盒）创建的当前及后续行盒会进行必要的缩短，为了给浮动（盒）的margin box让出空间 

如果存在一个完全满足4个条件的的竖直位置：(a)在行盒top或者top以下，(b)在行盒bottom或者bottom以上，(c)在浮动（盒）的top margin边以下，并且(d)在浮动（盒）的bottom margin边以上，那么就说该行盒接着（next to）浮动（盒） 

如果一个缩短的行盒小到无法容纳任何内容了，那么该行盒会向下移动（并重新计算其宽度）直到有些内容能适应（它的空间）或者不会再出现其它浮动了。位于浮动（盒）之前的当前行盒里的任何内容都会在浮动（盒）的另一侧的相同行重新排列（reflowed）。

一个表格，块级可替换元素或者常规流中建立了新的块格式化上下文的元素（例如一个'overflow'不为'visible'的元素）不能和与元素自身处于同一块格式化上下文中的任何浮动（盒）的margin box重叠。

*clear*
清除浮动元素的top-border低于浮动元素的底？边。
clearance会阻止边距折叠，作为上外边距之上的空间，将元素推过浮动元素。
clearance算法：H-M2

### 绝对定位

相对于`包含块`的padding框偏移定位，不在常规流中，为按常规流布局和绝对定位（即除了固定定位外的）子元素建立一个新的包含块。会与其他元素重叠，需要考虑堆叠层级

*固定定位*
绝对定位的子类，包含块由视口确定。

### display，position与float之间的关系
1. 先看生不生成盒。display：none => positon, float 不会生效。元素不生成盒
2. 再看是不是绝对（固定）定位，display的计算值会提升，float不会生效. 计算值为none
2. 最后看是否浮动。display的计算值会提升，位置计算要考虑是否浮动。
3. 如果是根元素，display的计算值会提升。
4. 其他的爱咋咋地。

### 分层展示
    在每个堆叠上下文中，下列层按从后向前的顺序绘制：
    元素的background和border生成的堆叠上下文
    堆叠层级为负数的子级堆叠上下文（最负的优先）
    流内的，非内联级，未定位的（non-positioned ）后代
    未定位的浮动（元素）
    流内的，内联级，未定位的后代，包括inline table和inline block
    堆叠层级为0的子级堆叠上下文，以及堆叠层级为0的定位的后代
    堆叠层级为正数的子级堆叠上下文（最小的优先） 

## 可视化格式模型详细描述


### 内容宽度
`width`
不可替换的内联元素的宽度由其内渲染的内容宽度决定，没有width属性
内联盒排列在行盒内，行盒的宽度由包含块决定

属性值含义如下：

> <length>
>     用一个长度单位指定内容区（content area）的宽度 
> <percentage>
>     指定一个百分比宽度。该百分比根据生成的盒的包含块的宽度来计算。如果包含块的宽度取决于该元素的宽度，那么产生的布局在CSS 2.1中是未定义的注意：对于那些包含块基于一个块容器元素的绝对定位的元素，百分比是根据这个元素的padding box的宽度计算的。这与CSS1不同，（CSS1中）百分比宽度总是根据父级元素的content box计算的 
> auto
>     宽度取决于其它属性的值，见下面的章节 

### 计算width和margin

一个元素的'width'，'margin-left'，'margin-right'，'left'和'right'属性用于布局的值，取决于生成盒的类型以及相互影响（用于布局的值有时被称为应用值）。原则上，应用值就是把计算值'auto'替换成一些合适的值，把百分比根据包含块计算出来，但存在例外。以下情况需要加以区分：    

    1. 内联的不可替换元素
    2. 内联的可替换元素
    3. 常规流中的块级不可替换元素
    4. 常规流中的块级可替换元素
    5. 浮动的不可替换元素
    6. 浮动的可替换元素
    7. 绝对定位的不可替换元素
    8. 绝对定位的可替换元素
    9. 常规流中不可替换的'inline-block'元素
    10. 常规流中可替换的'inline-block'元素
对于1-6和9-10条，相对定位的元素的'left'和'right'的值由9.4.3节中的规则确定 

1. width值不适用, auto margin取0
2. auto margin取0 
    - auto height/width：有内在宽度 width=内在宽度
    - auto height/width：无内在宽度，有内在高度和比例 *或者*
    - auto width 无内在高宽比 width = （height）* 比例
    - auto height/width：具有内在比例但没有内在高度或者宽度 width未定义
    - auto width：有内在宽度 width=内在宽度
    - auto width：width=300px或适应设备的比例不超过2：1的矩形
3. 包含块约束等式7
    - 如果width非auto，非auto总值>包含块宽度，auto margin取值为0
    - 所有计算值都不为0，则过度限制，尾部margin会被忽略，按等式重新计算。
    - 仅有唯一值为auto，按等式计算
    - 如果width=auto， 其余auto值取0后按等式计算width
    - 如果margin-left = margin-right，其应用值相等。
4. 规则2确定width，规则3确定margin
5. auto margin->0; auto width -> 自适应宽度 min(max(首选最小宽度，可用宽度),首选宽度)
6. auto margin->0; width由规则2决定
7. 包含块约束等式9

>     静态位置包含块（static-position containing block）是一个假想盒的包含块，（假想盒）将是该元素的第一个盒，它指定了'position'值为'static'并且'float'为'none'（注意，由于9.7节的规则，这个假想计算可能还需要给'display'假定一个不同的计算值）
>     'left'的静态位置是从包含块的left边到作为该元素的第一个盒的假想盒的left margin边的距离，如果它的'position'属性是'static'并且'float'为'none'。如果假想盒在包含块的左边，那么值为负
>     'right'的静态位置是从包含块的right边到与上面相同的假想盒的right margin边。如果假想盒在包含块边的左边，那么值为正

    - left, right, width = auto, auto margin->0, left=静态位置, 应用规则3计算其他auto值
    - left, right, width != auto, auto margin则margin相等，除非margin为负数，则起始margin取0；只有1个auto margin，解方程求值；过度限制，忽略尾margin。
    - 值为auto的margin-》0，按规则计算
    1. auto：left、width，width自适应，算left
    2. auto：left、right，头部偏移取静态位置，算尾部偏移
    3. auto：width、right，width自适应，算left
    4. auto：left，按公式计算
    5. auto：width，按公式计算
    6. auto：right，按公式计算
> 通过格式化不含除显式换行外的换行来计算首选宽度（preferred width），然后计算首选最小宽度（preferred minimum width），例如，通过尝试所有可能的换行。CSS 2.1没有定义准确的算法。第三步，算出可用宽度（available width）：通过把'left'（第1种情况）或者'right'（第3种情况）设置为0后求'width'来确定
> 
> 那么自适应宽度就是：min(max(首选最小宽度, 可用宽度), 首选宽度)

8. 静态位置参照7
    width由规则2决定。如果auto：margin且
    - auto: left、right, 头部偏移取静态位置
    - auto: left/right, auto：margin->0
    - 如果左右margin都是auto，margin相等
    - 只有一个auto，求值。
    - 该值过渡限制，忽略头部偏移，求值
9. auto: width->自适应; auto: margin=0
10. 与2完全一致

### 最大、最小宽度


    暂定的应用宽度按照上面的“计算width与margin”来计算（不考虑'min-width'和'max-width'）
    如果暂定的应用值大于'max-width'，就再应用一遍上面的规则，但这次把'max-width'的计算值作为'width'的计算值
    如果产生的宽度小于'min-width'，就再应用一遍上面的规则，但这次把'min-width'值作为'width'的计算值

### `height`
指定内容高度
对于那些包含块基于一个块级元素的绝对定位的元素，百分比根据这个元素的padding box的高度来计算。这与CSS1不同，（CSS1中）百分比总是根据父级元素的content box来计算 
不可替换内联元素不适用
1. height属性不适用, 竖直padding, border和margin从内容区的top和bottom开始, 与line-height无关。







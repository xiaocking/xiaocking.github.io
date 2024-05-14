(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{531:function(t,a,n){"use strict";n.r(a);var e=n(2),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动画"}},[t._v("#")]),t._v(" 动画")]),t._v(" "),a("p",[a("em",[t._v("动画是可以让你的元素动起来，使网页变得更加有趣的一种方式。本节内容带你看下如何使用CSS给元素添加动画效果。")])]),t._v(" "),a("h2",{attrs:{id:"一-帧-keyframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-帧-keyframe"}},[t._v("#")]),t._v(" 一.帧（keyframe）")]),t._v(" "),a("p",[t._v("帧是一副静止的画面，在大多数动画软件和CSS中，连续的帧组合在一起连续播放就形成了动画。")]),t._v(" "),a("p",[t._v("请看下面的例子，一个动态球。\n"),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"021 Animation_01",src:"https://codepen.io/AhCola/embed/QWgbJjY?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\nSee the Pen "),a("a",{attrs:{href:"https://codepen.io/AhCola/pen/QWgbJjY"}},[t._v("\n021 Animation_01")]),t._v(" by Pengfei Wang ("),a("a",{attrs:{href:"https://codepen.io/AhCola"}},[t._v("@AhCola")]),t._v(")\non "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")])]),t._v(" "),a("p",[t._v("整个动画在两种状态间变化，每轮变化时间为1秒。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/pengfeiw/PengfeiBlog@1.0.0/image/135.jpg",alt:"css动画"}})]),t._v(" "),a("p",[t._v("这个动画有两个关键控制点：两个状态的起始和终止位置。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/pengfeiw/PengfeiBlog@1.0.0/image/136.jpg",alt:"css动画"}})]),t._v(" "),a("h3",{attrs:{id:"keyframes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyframes"}},[t._v("#")]),t._v(" "),a("code",[t._v("@keyframes")])]),t._v(" "),a("p",[t._v("知道了什么是帧，有助于你理解"),a("code",[t._v("@keyframes")]),t._v("的工作原理。下面是一个拥有两种状态的帧规则。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" my-animation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translateY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("to")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translateY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("使用"),a("code",[t._v("@keyframes")]),t._v("定义一个帧规则，帧规则的名称为"),a("code",[t._v("my-animation")]),t._v("，帧规则的名称是大小写敏感的，定义了帧规则后，可以向使用"),a("RouterLink",{attrs:{to:"/Css/a19function.html"}},[t._v("函数")]),t._v("那样，使用帧规则，函数名即"),a("code",[t._v("my-animation")]),t._v("。")],1),t._v(" "),a("p",[t._v("帧规则内的"),a("code",[t._v("from")]),t._v("和"),a("code",[t._v("to")]),t._v("定义了两种状态，"),a("code",[t._v("from")]),t._v("表示动画开始（0%）时的状态帧，"),a("code",[t._v("to")]),t._v("表示一轮动画结束（100%）时的状态帧。")]),t._v(" "),a("p",[t._v("也可以直接通过百分比的形式指定关键帧的位置，在动态球的例子中，帧规则"),a("code",[t._v("pulse")]),t._v("如下，它包含了两种状态，开始（0%）时，样式是透明的，在动画一半（50%）的时候，不透明度变成0.4，并且放大了1.4倍。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" pulse")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("50%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1.4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("我们只需要定义关键位置时的帧，css会自动为我们生成连续的动画效果。")]),t._v(" "),a("h2",{attrs:{id:"二-动画属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-动画属性"}},[t._v("#")]),t._v(" 二.动画属性")]),t._v(" "),a("p",[t._v("定义帧规则之后，就可以通过动画属性使用定义的帧规则了。")]),t._v(" "),a("h3",{attrs:{id:"animation-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animation-name"}},[t._v("#")]),t._v(" "),a("code",[t._v("animation-name")])]),t._v(" "),a("p",[a("code",[t._v("animation-name")]),t._v("指定要使用的帧规则。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ele")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pulse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"animation-duration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animation-duration"}},[t._v("#")]),t._v(" "),a("code",[t._v("animation-duration")])]),t._v(" "),a("p",[a("code",[t._v("animation-duration")]),t._v("用于设置帧动画的周期，即动画播放一轮的所消耗的时间。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-element")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("animation-duration")]),t._v("默认值是0秒。0秒并不意味着动画没有播放，而是动画播放的速度太快了，你根本无法看到动画效果。"),a("code",[t._v("animation-duration")]),t._v("不能设置负值。")]),t._v(" "),a("h3",{attrs:{id:"animation-timing-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animation-timing-function"}},[t._v("#")]),t._v(" "),a("code",[t._v("animation-timing-function")])]),t._v(" "),a("p",[a("code",[t._v("animation-timing-function")]),t._v("属性定义CSS动画在每一动画周期中执行的节奏。对于关键帧动画来说，"),a("code",[t._v("animation-timing-function")]),t._v("作用于一个关键帧周期而非整个动画周期，即从关键帧开始开始，到关键帧结束结束。")]),t._v(" "),a("p",[a("code",[t._v("animation-timing-function")]),t._v("可以设置为这几个值："),a("code",[t._v("linear")]),t._v("、"),a("code",[t._v("ease")]),t._v("、"),a("code",[t._v("ease-in")]),t._v("、 "),a("code",[t._v("ease-out")]),t._v("、"),a("code",[t._v("ease-in-out")]),t._v("。\n"),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"021 Animation_02",src:"https://codepen.io/AhCola/embed/mdwJadv?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\nSee the Pen "),a("a",{attrs:{href:"https://codepen.io/AhCola/pen/mdwJadv"}},[t._v("\n021 Animation_02")]),t._v(" by Pengfei Wang ("),a("a",{attrs:{href:"https://codepen.io/AhCola"}},[t._v("@AhCola")]),t._v(")\non "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ease")]),t._v(": 默认值。动画以低速开始，然后加快，在结束前变慢。")]),t._v(" "),a("li",[a("code",[t._v("ease-in")]),t._v(": 动画以低速开始。")]),t._v(" "),a("li",[a("code",[t._v("ease-out")]),t._v(": 动画以低速结束。")]),t._v(" "),a("li",[a("code",[t._v("ease-in-out")]),t._v(": 动画以低速开始和结束，中间速度快。")])]),t._v(" "),a("p",[t._v("还可以通过函数设置动画每个阶段的速度。")]),t._v(" "),a("h4",{attrs:{id:"cubic-bezier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cubic-bezier"}},[t._v("#")]),t._v(" "),a("code",[t._v("cubic-bezier")])]),t._v(" "),a("p",[a("code",[t._v("cubic-bezier")]),t._v("是三次贝塞尔曲线，主要是为"),a("code",[t._v("animation")]),t._v("生成速度的函数。它接受四个值，值范围为0-1，"),a("code",[t._v("cubic-bezier(x1, y1, x2, y2)")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/pengfeiw/PengfeiBlog@1.0.0/image/137.jpg",alt:"cubic-bezier"}})]),t._v(" "),a("ul",[a("li",[t._v("p0: 为默认值(0, 0)")]),t._v(" "),a("li",[t._v("p1: 需要设置的点(x1, y1)")]),t._v(" "),a("li",[t._v("p2: 需要设置的点(x2, y2)")]),t._v(" "),a("li",[t._v("p3: 为默认值(1, 1)")])]),t._v(" "),a("p",[t._v("通过这四个点，生成图中的三次贝塞尔曲线，以此设置动画的运动速度。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ele")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-timing-function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cubic-bezier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".42"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" .58"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("推荐一个生成"),a("code",[t._v("cubic-bezier")]),t._v("值的网站："),a("a",{attrs:{href:"https://cubic-bezier.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cubic-bezier.com/"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[t._v("#")]),t._v(" "),a("code",[t._v("steps")])]),t._v(" "),a("p",[t._v("steps语法格式为"),a("code",[t._v("steps(number, position)")]),t._v("。"),a("code",[t._v("number")]),t._v("表示把动画分成多少段，position表示动画是从时间段的开头连续还是从末尾连续。支持"),a("code",[t._v("start")]),t._v("和"),a("code",[t._v("end")]),t._v("两个关键字。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("start")]),t._v(": 表示直接开始。")]),t._v(" "),a("li",[a("code",[t._v("end")]),t._v(": 默认值，表示戛然而止。")])]),t._v(" "),a("p",[t._v("steps详细解释可以看"),a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2018/06/css3-animation-steps-step-start-end/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"animation-iteration-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animation-iteration-count"}},[t._v("#")]),t._v(" "),a("code",[t._v("animation-iteration-count")])]),t._v(" "),a("p",[a("code",[t._v("animation-iteration-count")]),t._v("表示动画执行的次数，默认值为1， 接受一个整数值，也可以指定"),a("code",[t._v("infinite")]),t._v("关键字表示重复执行。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ele")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-iteration-count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" infinite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"animation-direction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animation-direction"}},[t._v("#")]),t._v(" "),a("code",[t._v("animation-direction")])]),t._v(" "),a("p",[a("code",[t._v("animation-direction")]),t._v("控制动画执行的方向。接受以下几个值。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("normal")]),t._v(": 默认值，向前运动。")]),t._v(" "),a("li",[a("code",[t._v("reverse")]),t._v(": 向后运动，与"),a("code",[t._v("normal")]),t._v("相反。")]),t._v(" "),a("li",[a("code",[t._v("alternate")]),t._v(": 动画交替反向运行，反向运行时，动画按步后退。过程为前-后-前重复运动。")]),t._v(" "),a("li",[a("code",[t._v("alternate-reverse")]),t._v(": 交替运行，与"),a("code",[t._v("alternate")]),t._v("相反。过程为后-前-后重复运动。")])]),t._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"021 Animation_03",src:"https://codepen.io/AhCola/embed/dyRowqL?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/AhCola/pen/dyRowqL"}},[t._v("\n  021 Animation_03")]),t._v(" by Pengfei Wang ("),a("a",{attrs:{href:"https://codepen.io/AhCola"}},[t._v("@AhCola")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),a("h3",{attrs:{id:"animation-delay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animation-delay"}},[t._v("#")]),t._v(" "),a("code",[t._v("animation-delay")])]),t._v(" "),a("p",[a("code",[t._v("animation-delay")]),t._v("将动画延迟执行。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-element")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-delay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上面的代码将动画延迟5s执行。")]),t._v(" "),a("h3",{attrs:{id:"animation-play-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animation-play-state"}},[t._v("#")]),t._v(" "),a("code",[t._v("animation-play-state")])]),t._v(" "),a("p",[t._v("表示动画是否暂停或者运行，默认值为"),a("code",[t._v("running")]),t._v("，设置"),a("code",[t._v("paused")]),t._v("可以控制动画暂停。例如鼠标悬浮时，动画暂停。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-element:hover")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-play-state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" paused"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"animation-fill-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animation-fill-mode"}},[t._v("#")]),t._v(" "),a("code",[t._v("animation-fill-mode")])]),t._v(" "),a("p",[t._v("控制动画执行完成后，元素所在的位置。接受"),a("code",[t._v("none | forwards | backwards | both")]),t._v("作为值。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("none")]),t._v(": 不改变默认行为。")]),t._v(" "),a("li",[a("code",[t._v("forwards")]),t._v(": 当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。")]),t._v(" "),a("li",[a("code",[t._v("backwards")]),t._v(": 在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。")]),t._v(" "),a("li",[a("code",[t._v("both")]),t._v(": 向前和向后填充模式都被应用。\n"),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"021 Animation_04",src:"https://codepen.io/AhCola/embed/QWgbzog?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\nSee the Pen "),a("a",{attrs:{href:"https://codepen.io/AhCola/pen/QWgbzog"}},[t._v("\n021 Animation_04")]),t._v(" by Pengfei Wang ("),a("a",{attrs:{href:"https://codepen.io/AhCola"}},[t._v("@AhCola")]),t._v(")\non "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")])])]),t._v(" "),a("h3",{attrs:{id:"animation关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animation关键字"}},[t._v("#")]),t._v(" "),a("code",[t._v("animation")]),t._v("关键字")]),t._v(" "),a("p",[a("code",[t._v("animation")]),t._v("是以下属性按顺序简写的形式。")]),t._v(" "),a("ol",[a("li",[t._v("animation-name")]),t._v(" "),a("li",[t._v("animation-duration")]),t._v(" "),a("li",[t._v("animation-timing-function")]),t._v(" "),a("li",[t._v("animation-delay")]),t._v(" "),a("li",[t._v("animation-iteration-count")]),t._v(" "),a("li",[t._v("animation-direction")]),t._v(" "),a("li",[t._v("animation-fill-mode")]),t._v(" "),a("li",[t._v("animation-play-state")])]),t._v(" "),a("p",[t._v("（完）")])])}),[],!1,null,null,null);a.default=s.exports}}]);
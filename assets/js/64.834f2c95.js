(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{520:function(t,e,a){"use strict";a.r(e);var s=a(2),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"尺寸单位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#尺寸单位"}},[t._v("#")]),t._v(" 尺寸单位")]),t._v(" "),e("p",[e("em",[t._v("本节内容，将讲述如何使用css调整元素的大小，提高页面的美观性。")])]),t._v(" "),e("h2",{attrs:{id:"一-数字-numbers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-数字-numbers"}},[t._v("#")]),t._v(" 一. 数字（Numbers）")]),t._v(" "),e("p",[t._v("数字可以用来定义"),e("code",[t._v("opacity")]),t._v("、"),e("code",[t._v("line-height")]),t._v(",还可以用于定义rgb颜色中的大小。这里指的数字是无单位的。例如(1, 2, 3, 100)和小数(.1, .2, .3)。")]),t._v(" "),e("p",[t._v("数字所处的上下文不同，它的意义也不一样。例如当定义"),e("code",[t._v("line-height")]),t._v("时，一个无单位的数字表示的是一个比例值：")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 24px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.5"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"007 Box Model_1",src:"https://codepen.io/AhCola/embed/jOmxoYw?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),e("a",{attrs:{href:"https://codepen.io/AhCola/pen/jOmxoYw"}},[t._v("\n  007 Box Model_1")]),t._v(" by Pengfei Wang ("),e("a",{attrs:{href:"https://codepen.io/AhCola"}},[t._v("@AhCola")]),t._v(")\n  on "),e("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),e("p",[t._v("这个例子中，"),e("code",[t._v("line-height")]),t._v("为1.5，但是最终行高结果为24px的1.5倍大小，即36px。")]),t._v(" "),e("blockquote",[e("p",[t._v("为"),e("code",[t._v("line-height")]),t._v("提供一个无单位的数字值（即字体大小的倍数）是一个不错的选择。正如之前在继承中说过，"),e("code",[t._v("font-size")]),t._v("是可继承属性。定义无单位的"),e("code",[t._v("line-height")]),t._v("，保证行高永远是相对于"),e("code",[t._v("font-size")]),t._v("的。如果你定义"),e("code",[t._v("line-height: 15px")]),t._v(", 在某些字体大小的情况下，最终页面可能会看起来比较奇怪。")])]),t._v(" "),e("p",[t._v("数字还可以使用在以下几种情形：")]),t._v(" "),e("ul",[e("li",[t._v("filter: "),e("code",[t._v("filter: speia(0.5)")]),t._v(", 给元素添加一个50%的褐色滤镜。")]),t._v(" "),e("li",[t._v("opacity: "),e("code",[t._v("opacity: 0.5")]),t._v(", 50%不透明度。")]),t._v(" "),e("li",[t._v("color: "),e("code",[t._v("rgb(50, 50, 50)")]),t._v(", 分别设置r、g、b的颜色值，允许范围为0-255。")]),t._v(" "),e("li",[t._v("transform: "),e("code",[t._v("transform: scale(1.2)")]),t._v(", 将元素放大1.2倍。")])]),t._v(" "),e("h2",{attrs:{id:"二-百分比-percentages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-百分比-percentages"}},[t._v("#")]),t._v(" 二. 百分比（Percentages）")]),t._v(" "),e("p",[t._v("当使用百分比设置css属性值时，你需要知道百分比是如何用于计算的。例如"),e("code",[t._v("width")]),t._v("的百分比是相对于父元素的宽度进行计算的。")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div p")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 最终结果为150px\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"007 Box Model_2",src:"https://codepen.io/AhCola/embed/yLbjWEp?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),e("a",{attrs:{href:"https://codepen.io/AhCola/pen/yLbjWEp"}},[t._v("\n  007 Box Model_2")]),t._v(" by Pengfei Wang ("),e("a",{attrs:{href:"https://codepen.io/AhCola"}},[t._v("@AhCola")]),t._v(")\n  on "),e("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),e("p",[t._v("上面的例子中"),e("code",[t._v("div p")]),t._v("的宽度为150px。")]),t._v(" "),e("p",[t._v("如果设置"),e("code",[t._v("margin")]),t._v("和"),e("code",[t._v("padding")]),t._v("百分比值，不论"),e("code",[t._v("margin")]),t._v("和"),e("code",[t._v("padding")]),t._v("的方向如何，它们的百分比都是相对于父元素的"),e("code",[t._v("width")]),t._v("的。")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div p")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* calculated: 150px */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-left")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* calculated: 150px */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"三-尺寸和长度单位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-尺寸和长度单位"}},[t._v("#")]),t._v(" 三. 尺寸和长度单位")]),t._v(" "),e("p",[t._v("如果在数字后面添加一个单位，那么它就变成了"),e("strong",[t._v("尺寸")]),t._v("，例如"),e("code",[t._v("1rem")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"绝对长度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#绝对长度"}},[t._v("#")]),t._v(" 绝对长度")]),t._v(" "),e("p",[t._v("所有绝对长度都基于相同的基础进行解析，使它们在CSS中使用的任何地方都是可预测的。例如使用"),e("code",[t._v("cm")]),t._v("单位设置一个元素的"),e("code",[t._v("width")]),t._v("，那么这个元素将呈现4cm的宽度，这个值是一个精确值，可以用尺子去测量的。")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10cm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5cm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" black"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("绝对长度非常适合设计用于打印的页面。")]),t._v(" "),e("p",[t._v("绝对长度尺寸表：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("单位")]),t._v(" "),e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("公式")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("cm")]),t._v(" "),e("td",[t._v("Centimeters")]),t._v(" "),e("td",[t._v("1cm = 96px/2.54")])]),t._v(" "),e("tr",[e("td",[t._v("mm")]),t._v(" "),e("td",[t._v("Millimeters")]),t._v(" "),e("td",[t._v("1mm = 1/10th of 1cm")])]),t._v(" "),e("tr",[e("td",[t._v("Q")]),t._v(" "),e("td",[t._v("Quarter-millimeters")]),t._v(" "),e("td",[t._v("1Q = 1/40th of 1cm")])]),t._v(" "),e("tr",[e("td",[t._v("in")]),t._v(" "),e("td",[t._v("Inches")]),t._v(" "),e("td",[t._v("1in = 2.54cm = 96px")])]),t._v(" "),e("tr",[e("td",[t._v("pc")]),t._v(" "),e("td",[t._v("Picas")]),t._v(" "),e("td",[t._v("1pc = 1/6th of 1in")])]),t._v(" "),e("tr",[e("td",[t._v("pt")]),t._v(" "),e("td",[t._v("Points")]),t._v(" "),e("td",[t._v("1pt = 1/72th of 1in")])]),t._v(" "),e("tr",[e("td",[t._v("px")]),t._v(" "),e("td",[t._v("Pixels")]),t._v(" "),e("td",[t._v("1px = 1/96th of 1in")])])])]),t._v(" "),e("h3",{attrs:{id:"相对长度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相对长度"}},[t._v("#")]),t._v(" 相对长度")]),t._v(" "),e("p",[t._v("相对长度是基于基础值进行计算的，与百分比有点类似。和百分比之间的区别在于，您可以根据上下文来确定元素的大小。如果尺寸单位为"),e("code",[t._v("ch")]),t._v(",表示使用文字大小作为计算的基础值，单位"),e("code",[t._v("vw")]),t._v("表示使用viewport的宽度作为计算的基础值。相对值在响应式布局中很有用。")]),t._v(" "),e("h4",{attrs:{id:"字体大小相对单位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字体大小相对单位"}},[t._v("#")]),t._v(" 字体大小相对单位")]),t._v(" "),e("p",[t._v("css提供了一些相对于元素字体大小的相对单位。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("单位")]),t._v(" "),e("th",[t._v("相对于")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("em")]),t._v(" "),e("td",[t._v("在 font-size 中使用是相对于父元素的字体大小，在其他属性中使用是相对于自身的字体大小，如 width")])]),t._v(" "),e("tr",[e("td",[t._v("ex")]),t._v(" "),e("td",[t._v("字符“x”的高度")])]),t._v(" "),e("tr",[e("td",[t._v("ch")]),t._v(" "),e("td",[t._v("数字“0”的宽度")])]),t._v(" "),e("tr",[e("td",[t._v("rem")]),t._v(" "),e("td",[t._v("根元素的字体大小")])]),t._v(" "),e("tr",[e("td",[t._v("lh")]),t._v(" "),e("td",[t._v("元素的line-height")])]),t._v(" "),e("tr",[e("td",[t._v("cap")]),t._v(" "),e("td",[t._v("当前元素字体的首字母大小")])]),t._v(" "),e("tr",[e("td",[t._v("ic")]),t._v(" "),e("td",[t._v('"水"字形')])]),t._v(" "),e("tr",[e("td",[t._v("rlh")]),t._v(" "),e("td",[t._v("根节点行高")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/pengfeiw/PengfeiBlog@1.0.0/image/96.jpg",alt:"css尺寸单位"}})]),t._v(" "),e("h4",{attrs:{id:"视口相对单位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#视口相对单位"}},[t._v("#")]),t._v(" 视口相对单位")]),t._v(" "),e("p",[t._v("你可以使用视口的大小作为相对值计算的基。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("单位")]),t._v(" "),e("th",[t._v("相对于")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("vw")]),t._v(" "),e("td",[t._v("视口宽度的1%")])]),t._v(" "),e("tr",[e("td",[t._v("vh")]),t._v(" "),e("td",[t._v("视口高度的1%")])]),t._v(" "),e("tr",[e("td",[t._v("vi")]),t._v(" "),e("td",[t._v("等于初始"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Containing_block",target:"_blank",rel:"noopener noreferrer"}},[t._v("包含块"),e("OutboundLink")],1),t._v("大小的 1%，在根元素的"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Logical_Properties#inline-dimension",target:"_blank",rel:"noopener noreferrer"}},[t._v("行内轴"),e("OutboundLink")],1),t._v("方向上。")])]),t._v(" "),e("tr",[e("td",[t._v("vb")]),t._v(" "),e("td",[t._v("等于初始"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Containing_block",target:"_blank",rel:"noopener noreferrer"}},[t._v("包含块"),e("OutboundLink")],1),t._v("大小的 1%，在根元素的"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Logical_Properties#block-dimension",target:"_blank",rel:"noopener noreferrer"}},[t._v("区块轴"),e("OutboundLink")],1),t._v("方向上。")])]),t._v(" "),e("tr",[e("td",[t._v("vmin")]),t._v(" "),e("td",[t._v("视口高度 "),e("code",[t._v("vw")]),t._v(" 和宽度 "),e("code",[t._v("vh")]),t._v(" 两者之间的最小值。")])]),t._v(" "),e("tr",[e("td",[t._v("vmax")]),t._v(" "),e("td",[t._v("视口高度 "),e("code",[t._v("vw")]),t._v(" 和宽度 "),e("code",[t._v("vh")]),t._v(" 两者之间的最大值。")])])])]),t._v(" "),e("h2",{attrs:{id:"四-其他单位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-其他单位"}},[t._v("#")]),t._v(" 四. 其他单位")]),t._v(" "),e("p",[t._v("还有一些其他的单位已经被指定来处理特定类型的值。")]),t._v(" "),e("h3",{attrs:{id:"角度单位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#角度单位"}},[t._v("#")]),t._v(" 角度单位")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("60deg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // deg单位，旋转60度\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"007 Box Model_3",src:"https://codepen.io/AhCola/embed/ZEKRqvX?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),e("a",{attrs:{href:"https://codepen.io/AhCola/pen/ZEKRqvX"}},[t._v("\n  007 Box Model_3")]),t._v(" by Pengfei Wang ("),e("a",{attrs:{href:"https://codepen.io/AhCola"}},[t._v("@AhCola")]),t._v(")\n  on "),e("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),e("h3",{attrs:{id:"分辨率单位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分辨率单位"}},[t._v("#")]),t._v(" 分辨率单位")]),t._v(" "),e("p",[e("code",[t._v("dpi")]),t._v("表示每英寸的点数。")]),t._v(" "),e("h2",{attrs:{id:"附-参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附-参考资料"}},[t._v("#")]),t._v(" 附：参考资料")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("谷歌learn css: "),e("a",{attrs:{href:"https://web.dev/learn/css/sizing/#relative-lengths",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sizing Units"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("MDN web文档："),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/length",target:"_blank",rel:"noopener noreferrer"}},[t._v("length"),e("OutboundLink")],1)])])]),t._v(" "),e("p",[t._v("（完）")])])}),[],!1,null,null,null);e.default=n.exports}}]);
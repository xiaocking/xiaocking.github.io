(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{653:function(t,e,o){"use strict";o.r(e);var s=o(2),a=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"win10-使用-vscode-打开文件-夹"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#win10-使用-vscode-打开文件-夹"}},[t._v("#")]),t._v(" win10 使用 vscode 打开文件(夹)")]),t._v(" "),e("h2",{attrs:{id:"一、-通过配置注册表添加鼠标右键命令使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、-通过配置注册表添加鼠标右键命令使用"}},[t._v("#")]),t._v(" 一、 通过配置注册表添加鼠标右键命令使用")]),t._v(" "),e("h3",{attrs:{id:"配置注册表文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置注册表文件"}},[t._v("#")]),t._v(" 配置注册表文件")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("在任意位置新建一个"),e("code",[t._v("code.txt")]),t._v("文件")])]),t._v(" "),e("li",[e("p",[t._v("复制以下内容到 txt 文件中粘贴")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[t._v("Windows Registry Editor Version 5.00\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("HKEY_CLASSES_ROOT\\"),e("span",{pre:!0,attrs:{class:"token important"}},[t._v("*\\shell\\VSCode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v('\n@="Open with Code"\n"Icon"="F'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v('\\\\Microsoft VS Code\\\\Code.exe"\n\n'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("HKEY_CLASSES_ROOT\\"),e("span",{pre:!0,attrs:{class:"token important"}},[t._v("*\\shell\\VSCode\\command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v('\n@="\\"F'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v('\\\\Microsoft VS Code\\\\Code.exe\\" \\"%1\\""\n\nWindows Registry Editor Version 5.00\n\n'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("HKEY_CLASSES_ROOT\\Directory\\shell\\VSCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v('\n@="Open with Code"\n"Icon"="F'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v('\\\\Microsoft VS Code\\\\Code.exe"\n\n'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("HKEY_CLASSES_ROOT\\Directory\\shell\\VSCode\\command"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v('\n@="\\"F'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v('\\\\Microsoft VS Code\\\\Code.exe\\" \\"%V\\""\n\nWindows Registry Editor Version 5.00\n\n'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("HKEY_CLASSES_ROOT\\Directory\\Background\\shell\\VSCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v('\n@="Open with Code"\n"Icon"="F'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v('\\\\Microsoft VS Code\\\\Code.exe"\n\n'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("HKEY_CLASSES_ROOT\\Directory\\Background\\shell\\VSCode\\command"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v('\n@="\\"F'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v('\\\\Microsoft VS Code\\\\Code.exe\\" \\"%V\\""\n')])])])])]),t._v(" "),e("h3",{attrs:{id:"获取-vscode-安装目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取-vscode-安装目录"}},[t._v("#")]),t._v(" 获取 vscode 安装目录")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("右键 vscode 桌面图标选择查看文件位置")])]),t._v(" "),e("li",[e("p",[t._v("获取文件路径 如：\n"),e("code",[t._v("F:\\xiaoc0727\\exebox\\Microsoft VS Code")])])]),t._v(" "),e("li",[e("p",[t._v("将以上文件路径修改成 "),e("code",[t._v("F:\\\\xiaoc0727\\\\exebox\\\\Microsoft VS Code")])])]),t._v(" "),e("li",[e("p",[t._v("复制修改后的路径替换掉 txt 文件中的 "),e("code",[t._v("F:\\\\Microsoft VS Code")]),t._v("保存")])]),t._v(" "),e("li",[e("p",[t._v("将 "),e("code",[t._v("code.txt")]),t._v(" 文件的后缀 "),e("code",[t._v(".txt")]),t._v(" 修改为 "),e("code",[t._v(".reg")])])]),t._v(" "),e("li",[e("p",[t._v("双击执行"),e("code",[t._v("code.reg")])])]),t._v(" "),e("li",[e("p",[t._v("执行后会弹出一个提示，点击确定即可，完成后，就可以使用了")])]),t._v(" "),e("li",[e("p",[t._v("选中文件夹，右键就能看到 "),e("code",[t._v("Open with Code")]),t._v(" 这个选项了，点击就能用 vscode 打开文件夹")])])]),t._v(" "),e("h2",{attrs:{id:"二、-安装-vscode-工具配置命令行-code-命令使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、-安装-vscode-工具配置命令行-code-命令使用"}},[t._v("#")]),t._v(" 二、 安装 vscode 工具配置命令行 code 命令使用")]),t._v(" "),e("h3",{attrs:{id:"安装-vscode-官方脚手架工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-vscode-官方脚手架工具"}},[t._v("#")]),t._v(" 安装 vscode 官方脚手架工具")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("使用 yarn 安装")]),t._v(" "),e("blockquote",[e("p",[t._v("yarn add global yo generator-code")])])]),t._v(" "),e("li",[e("p",[t._v("使用 npm/cnpm 安装")]),t._v(" "),e("blockquote",[e("p",[t._v("npm/cnpm install -g yo generator-code")])])])]),t._v(" "),e("h3",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),e("blockquote",[e("p",[t._v("打开命令行，使用 "),e("code",[t._v("code 文件(夹)路径")]),t._v(" 即可打开文件(夹)")])])])}),[],!1,null,null,null);e.default=a.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{671:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"taro-升级-2-x-最新版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taro-升级-2-x-最新版本"}},[t._v("#")]),t._v(" Taro 升级 2.x 最新版本")]),t._v(" "),s("h2",{attrs:{id:"环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[t._v("#")]),t._v(" 环境")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[t._v("taro：v2.1.16\nnode：v10.16.3\n")])])]),s("p",[s("a",{attrs:{href:"https://taro-docs.jd.com/taro/docs/README",target:"_blank",rel:"noopener noreferrer"}},[t._v("taro 官网"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://taro-docs.jd.com/taro/docs/2.x/migrate-to-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("taro@2.x 迁移升级文档"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"版本升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本升级"}},[t._v("#")]),t._v(" 版本升级")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"title"}),s("p",[t._v("建议在升级前将 package.json 文件内容保存备份"),s("br"),t._v("\n在升级中，可能会出现 packcage.json 中依赖包丢失情况")])]),s("h3",{attrs:{id:"升级-taro-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级-taro-cli"}},[t._v("#")]),t._v(" 升级 @taro/cli")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 有两种升级版本的方式 一种是全局升级，一种是只升级某个项目的，这里只升级单个项目内的 Taro 版本")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单独升级项目内的 Taro 版本（npm 方式）")]),t._v("\nnpm install "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dev @tarojs/cli@2.2.15\n")])])]),s("blockquote",[s("p",[t._v("只升级单个项目内的 Taro 版本，这样做的好处是全局的 Taro 版本还是原来的版本，多个项目间的依赖不冲突，其余项目依然可以用旧版本开发。 如果你的项目里没有安装 Taro CLI")])]),t._v(" "),s("h3",{attrs:{id:"升级项目依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级项目依赖"}},[t._v("#")]),t._v(" 升级项目依赖")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目目录 打开命令行")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm 方式 升级项目 Taro 相关依赖")]),t._v("\nnode ./node_modules/.bin/taro update project 2.2.15 (请修改为 Taro 2.x 最新版本)\n")])])]),s("h3",{attrs:{id:"安装新增依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装新增依赖"}},[t._v("#")]),t._v(" 安装新增依赖")]),t._v(" "),s("blockquote",[s("p",[t._v("Taro 2.0 新增了 "),s("code",[t._v("@tarojs/mini-runner")]),t._v(" 作为小程序的编译依赖，所以你需要将它安装在你的项目")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 @tarojs/mini-runner")]),t._v("\nnpm install "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dev @tarojs/mini"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("runner@2.2.15\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("升级安装到这基本就都升级完成了"),s("br"),t._v("\n2.2.x 以后新增了一些优化项，下面记录一些配置方法")])]),s("h2",{attrs:{id:"配置项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[t._v("#")]),t._v(" 配置项")]),t._v(" "),s("h3",{attrs:{id:"js-代码压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-代码压缩"}},[t._v("#")]),t._v(" Js 代码压缩")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://taro-docs.jd.com/taro/docs/2.x/script-compressor",target:"_blank",rel:"noopener noreferrer"}},[t._v("Taro@2.x JS 代码压缩文档"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本次使用 uglifyjs")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm i --D uglifyjs-webpack-plugin")]),t._v("\nnpm i "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("D @tarojs/plugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("uglify\n\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config/index  文件中配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@tarojs/plugin-uglify'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启 js 压缩")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("uglify")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置项同 https://github.com/mishoo/UglifyJS2#minify-options")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"css-样式压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-样式压缩"}},[t._v("#")]),t._v(" Css 样式压缩")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://taro-docs.jd.com/taro/docs/2.x/styles-processor",target:"_blank",rel:"noopener noreferrer"}},[t._v("Taro@2.x Css 样式压缩文档"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("如果使用了 sass ,需安装 "),s("code",[t._v("@tarojs/plugin-sass")])])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 @tarojs/plugin-sass 插件")]),t._v("\nnpm i "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("D @tarojs/plugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sass\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config/index  文件中配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@tarojs/plugin-sass'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启 css 压缩")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("csso")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置项同 https://github.com/css/csso#minifysource-options")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"分析打包体积"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析打包体积"}},[t._v("#")]),t._v(" 分析打包体积")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://taro-docs.jd.com/taro/docs/2.x/migrate-to-2#%E5%8F%91%E8%A7%89%E5%8D%87%E7%BA%A7%E4%B9%8B%E5%90%8E%E6%96%87%E4%BB%B6%E6%9B%B4%E5%A4%A7",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 webpack-bundle-analyzer 插件"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 analyzer")]),t._v("\nnpm install webpack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bundle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("analyzer "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("D\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config/index")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mini")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置 analyzer 开启打包")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("webpackChain")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" webpack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      chain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'analyzer'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack-bundle-analyzer'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BundleAnalyzerPlugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"微信小程序持续集成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序持续集成"}},[t._v("#")]),t._v(" 微信小程序持续集成")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/cli.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序开发文档 命令行 V2"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("开发者工具提供了命令行与 HTTP 服务两种接口供外部调用\n开发者可以通过命令行或 HTTP 请求指示工具进行登录、预览、上传等操作\n本次使用 命令行方式 执行自动构建提交")])]),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/bin/bash")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\nset "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("e\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看node 版本")]),t._v("\nnode "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("v\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看npm 版本")]),t._v("\nnpm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("v\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取微信开发者工具-命令行工具位置(配置为自己的 微信开发者工具路径)")]),t._v("\ncli=/g/xxx/xxx/微信web开发者工具/cli.bat\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置项目路径 (配置为自己的 项目路径 加上打包后生成的目录如：dist)")]),t._v("\nproject_path=/g/xxx/xxx/dist\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置版本号")]),t._v("\nversion=3.3.6.8\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包构建")]),t._v("\necho "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("e '\\033"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("32m打包生成部署文件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\\033"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0m'\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行构建(可配置为自己的 构建命令)")]),t._v("\nnpm run build"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("sit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("weapp\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取git提交信息")]),t._v("\necho "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("e '\\033"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("32m获取Git提交信息"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\\033"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0m'\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取最新一次的 git commit 信息")]),t._v("\nhead_commit_info=`git log "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pretty=format"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v('“%s” "HEAD" '),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1`\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取最新一次的 git author 信息")]),t._v("\nhead_commit_author=`git log "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pretty=format"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v('“%an” "HEAD" '),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1`\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取最新一次的 git 提交日期")]),t._v("\nhead_commit_date=`git log "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pretty=format"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v('“%cd” "HEAD" '),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1`\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打印查看")]),t._v("\necho $head_commit_info\necho $head_commit_author\necho $head_commit_date\n\necho "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("e '\\033"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("32m执行上传"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\\033"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0m'\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取当前时间")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# time=$(date "+%Y-%m-%d %H:%M:%S")')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 调用微信开发者工具命令行方式 执行上传")]),t._v("\n$cli upload "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("project $project_path "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("v $version "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("d $head_commit_info\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 调用微信开发者工具命令行方式 执行预览")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $cli preview --project /g/xiaoc1103/code/gitlab/wx-ci-test/dist")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
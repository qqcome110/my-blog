(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{241:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"http笔试部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http笔试部分","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP笔试部分")]),t._v(" "),s("p",[t._v("点击关注本"),s("a",{attrs:{href:"#%E5%85%AC%E4%BC%97%E5%8F%B7"}},[t._v("公众号")]),t._v("获取文档最新更新,并可以领取配套于本指南的 "),s("strong",[t._v("《前端面试手册》")]),t._v(" 以及"),s("strong",[t._v("最标准的简历模板")]),t._v(".")]),t._v(" "),s("blockquote",[s("p",[t._v("此部分是我早前在网上搜集的，已无法找出出处")])]),t._v(" "),s("h2",{attrs:{id:"缓存题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存题","aria-hidden":"true"}},[t._v("#")]),t._v(" 缓存题")]),t._v(" "),s("p",[t._v("假设我们有一个HTML页面，如下:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- page.html --\x3e")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v('\n http://www.w3.org/1999/xhtml">\n '),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Content-Type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/html; charset=utf-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("page页"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("images/head.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("page.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("重新访问page页"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("加载此页面后，会获取图片，图片请求返回的响应头为")]),t._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v(" HTTP/1.1 200 OK\n Cache-Control: no-cache\n Content-Type: image/png\n Last-Modified: Tue, 08 Nov 2016 06:59:00 GMT\n Accept-Ranges: bytes\n Date: Thu, 10 Nov 2016 02:48:50 GMT\n Content-Length: 3534\n")])])]),s("h3",{attrs:{id:"问题一：当点击“重新访问-page-页”链接重新加载该页面后，-head-png-如何二次加载？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题一：当点击“重新访问-page-页”链接重新加载该页面后，-head-png-如何二次加载？","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题一：当点击“重新访问 page 页”链接重新加载该页面后， head.png 如何二次加载？")]),t._v(" "),s("p",[t._v("响应头的"),s("code",[t._v("no-cache")]),t._v("表达的是可以缓存，但是每次都需要去服务器确认缓存资源的新鲜度，而不是不缓存，这是个坑。")]),t._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v(" Cache-Control: no-cache\n")])])]),s("p",[t._v("如果不跳这个坑的话，这个问题就简单了：图片会发出请求头带上"),s("code",[t._v("If-Modified-Since: Tue, 08 Nov 2016 06:59:00 GMT")]),t._v("，服务器确认新鲜度，如果客户端资源是新鲜资源则返回304,否则返回200并带上新的图片资源。")]),t._v(" "),s("h3",{attrs:{id:"问题二：如果将上述信息中的-cache-control-设置为-private，那么结果又会如何呢？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题二：如果将上述信息中的-cache-control-设置为-private，那么结果又会如何呢？","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题二：如果将上述信息中的 Cache-Control 设置为 private，那么结果又会如何呢？")]),t._v(" "),s("p",[t._v("当"),s("code",[t._v("Cache-Control: private")]),t._v("之后，说明一个问题，响应头没有给到任何缓存策略，这个时候客户端会怎么处理？")]),t._v(" "),s("p",[t._v("现在浏览器会有一个处理方法，当响应头没有任何缓存策略的时候有一套自己的处理机制，即 "),s("code",[t._v("Expires = 当前时间(Date - Last-Modified) * 10%")]),t._v(",简单理解就是响应头的Date时间与Last-Modified的时间差的十分之一作为缓存的过期时间。")]),t._v(" "),s("p",[t._v("按照这个处理流程，如果马上重新加载，则会直接读取本地缓存内容\n，无需向服务器请求。")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"公众号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公众号","aria-hidden":"true"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),s("p",[t._v("想要实时关注笔者最新的文章和最新的文档更新请关注公众号"),s("strong",[t._v("程序员面试官")]),t._v(",后续的文章会优先在公众号更新.")]),t._v(" "),s("p",[s("strong",[t._v("简历模板:")]),t._v(" 关注公众号回复「模板」获取")]),t._v(" "),s("p",[s("strong",[t._v("《前端面试手册》:")]),t._v(" 配套于本指南的突击手册,关注公众号回复「fed」获取")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/d846f65d5025c4b6c4619662a0669503.png",alt:"2019-08-12-03-18-41"}})])])},[],!1,null,null,null);a.default=e.exports}}]);
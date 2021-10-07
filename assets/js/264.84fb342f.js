(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{696:function(s,t,a){"use strict";a.r(t);var n=a(16),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"session丢失问题与cookie的添加方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session丢失问题与cookie的添加方式"}},[s._v("#")]),s._v(" Session丢失问题与Cookie的添加方式")]),s._v(" "),a("h2",{attrs:{id:"一、网页版支付宝沙箱开发支付成功同步回调session丢失问题与解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、网页版支付宝沙箱开发支付成功同步回调session丢失问题与解决办法"}},[s._v("#")]),s._v(" 一、网页版支付宝沙箱开发支付成功同步回调session丢失问题与解决办法")]),s._v(" "),a("p",[s._v("​\t\t用了半天时间解决支付宝异步回调session丢失问题，今天就继续为沙箱支付成功后同步回调session对象中的数据丢失问题发愁，真是忙活了一天，网上都翻烂了，就那些问题，没有什么实质性答案去解决这个问题，为此，浪费了一天的时间，慢慢发现，第一次做支付宝对接网页的项目，没想到我碰到的问题都是大多数人没有碰到的，真是够”幸运的“。好了废话不多说，回归正题：")]),s._v(" "),a("h3",{attrs:{id:"问题-支付宝沙箱同步回调sessio对象中的数据丢失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题-支付宝沙箱同步回调sessio对象中的数据丢失"}},[s._v("#")]),s._v(" 问题：支付宝沙箱同步回调sessio对象中的数据丢失")]),s._v(" "),a("h3",{attrs:{id:"解决问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决问题"}},[s._v("#")]),s._v(" 解决问题：")]),s._v(" "),a("p",[s._v("首先我是用的本地地址去运行的该项目\n这是我的本地项目地址，http://localhost:8080/front")]),s._v(" "),a("p",[s._v("运行上面这个链接到了首页，就进行一些操作，一切都很顺利，但是到了付款成功过的页面的时候，自动跳回的两个页面后，就到了处理同步回调的页面、同步处理页面此时的地址是：")]),s._v(" "),a("blockquote",[a("p",[s._v("1:===>https://excashier.alipaydev.com/standard/auth.htm?payOrderId=84ff625ca7e04d3e8af2029d0c74f220.00")])]),s._v(" "),a("blockquote",[a("p",[s._v("2:===>https://cashier.alipaydev.com/standard/lightpay/lightPayCashier.htm?orderId=0910aa02f7f76f1dee0000-2-2NN9210&bizIdentity=trade20001&outBizNo=2021091022001479210501505049&timeStamp=1631204747701&country=CN")])]),s._v(" "),a("blockquote",[a("p",[s._v("3:===>https://unitradeprod.alipaydev.com/acq/cashierReturn.htm?sign=K1iSL19gsMALQHhxuH4L0zpksY22zJSWW2UuVBF3e2mUcslzs4XVXInBdRqm0EoajO4KXLuppJ0VUr2BDt7eTmOUv%252BL8Rw%253D%253D&outTradeNo=JFH_913e2092ab144d77bcf2cd38a74ba04a&pid=2088621956261714&type=1")])]),s._v(" "),a("blockquote",[a("p",[s._v("4:===>http://127.0.0.1:8080/alipay/success.html")])]),s._v(" "),a("p",[s._v("支付宝规定同步回调需要用内网穿透，所以，同步回调回来的链接和刚刚运行的项目的链接不一样，而且在刚刚运行项目将用户信息保存到网址为http://localhost:8080/front/的"),a("code",[s._v("session")]),s._v("域中，同步回调回来的"),a("code",[s._v("session")]),s._v("域不包含用户信息，以至于，会觉得原"),a("code",[s._v("session")]),s._v("信息丢失，不知道去了哪里。")]),s._v(" "),a("p",[s._v("原因分析完了，根据原因，我们要保证这个链接要保证全部在同一个链接下运行才可以，所以项目一上来运行就用该用内网穿透网址+项目名去登录用户信息，这样"),a("code",[s._v("session")]),s._v("域中会一直保存着用户信息，则一开始就使用如下地址访问项目工程：")]),s._v(" "),a("p",[a("code",[s._v("http://127.0.0.1:8080/front")])]),s._v(" "),a("p",[s._v("运行该项目，一直到支付完毕，同步回调回来的的网址也是内网穿透的网址，保证session不会丢失，一定不要一边使用本地链接运行本地项目，一边同步回调拿到的链接是内网穿透的链接，两个链接根本不在同一频道上，session 能一样才怪，好了上面就是问题和解决办法。")]),s._v(" "),a("h2",{attrs:{id:"二、cookie的添加方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、cookie的添加方式"}},[s._v("#")]),s._v(" 二、Cookie的添加方式")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSession")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"phonenumber"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" phonenumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nrequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSession")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MD5Util")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getMd5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cookie")]),s._v(" phonenumberCookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"phonenumber"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" phonenumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cookie")]),s._v(" passwordCookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MD5Util")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getMd5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nphonenumberCookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setMaxAge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\npasswordCookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setMaxAge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置路径，很重要，这次就是在这里吃了亏。")]),s._v("\nphonenumberCookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\npasswordCookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("phonenumberCookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("passwordCookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
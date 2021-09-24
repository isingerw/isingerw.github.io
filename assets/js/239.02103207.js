(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{670:function(a,t,s){"use strict";s.r(t);var n=s(16),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"ajax在springmvc基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajax在springmvc基本使用"}},[a._v("#")]),a._v(" Ajax在SpringMVC基本使用")]),a._v(" "),s("p",[a._v("数据交互：就是"),s("code",[a._v("Controller")]),a._v(" —"),s("code",[a._v("View")]),a._v("之间的数据交互")]),a._v(" "),s("p",[a._v("控制器："),s("code",[a._v("Controller")]),a._v(" 如何传递数据给"),s("code",[a._v("View")])]),a._v(" "),s("p",[a._v("视图："),s("code",[a._v("View（jsp,html,vue… ）")]),a._v("如何传递数据给 控制器"),s("code",[a._v("Controller")])]),a._v(" "),s("p",[s("strong",[a._v("先定标准，写好控制器，做好接口的测试！")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://singerwimg-1300001977.cos.accelerate.myqcloud.com/2021/08/18/601267355fcda.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"_1、添加jar文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、添加jar文件"}},[a._v("#")]),a._v(" 1、添加Jar文件")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("com.fasterxml.jackson.core:jackson-databind:2.12.3")])]),a._v(" "),s("li",[s("code",[a._v("com.fasterxml.jackson.core:jackson-core:2.12.3")])]),a._v(" "),s("li",[s("code",[a._v("com.fasterxml.jackson.core:jackson-annotations:2.12.3")])])]),a._v(" "),s("p",[a._v("检查springmvc配置文件中加入:"),s("code",[a._v("<mvc:annotation-driven></mvc:annotation-driven>")]),a._v(",如果没有加入"),s("code",[a._v("mvc-annotation")]),a._v("的节点，可能会出现如下错误:")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://singerwimg-1300001977.cos.accelerate.myqcloud.com/2021/08/18/5ccd58be8654f.png",alt:""}})]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!--\n    检查springmvc配置文件中加入: <mvc:annotation  ….>\n    如果没有加入mvc-annotation的节点，可能会出现错误:\n    --\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!--设置配置方案 --\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("mvc:")]),a._v("annotation-driven")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("mvc:")]),a._v("annotation-driven")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[s("code",[a._v("<mvc:annotation-driven />")]),a._v("注解意义：")]),a._v(" "),s("p",[a._v("主要就是为了"),s("code",[a._v("Spring MVC")]),a._v("来用的，提供"),s("code",[a._v("Controller")]),a._v("请求转发，json自动转换等功能.。")]),a._v(" "),s("p",[s("code",[a._v("<mvc:annotation-driven />")]),a._v(" 是一种简写形式，完全可以手动配置替代这种简写形式，简写形式可以让初学都快速应用默认配置方案。配置一些"),s("code",[a._v("messageconverter")]),a._v("。即解决了"),s("code",[a._v("@Controller")]),a._v("注解的使用前提配置"),s("code",[a._v("<context:annotation-config/>")]),a._v("是对包进行扫描，实现注释驱动"),s("code",[a._v("Bean")]),a._v("定义，同时将"),s("code",[a._v("bean")]),a._v("自动注入容器中使用。即解决了"),s("code",[a._v("@Controller")]),a._v("标识的类的bean的注入和使用。\n"),s("code",[a._v("<mvc:annotation-driven>")]),a._v("会自动注册"),s("code",[a._v("RequestMappingHandlerMapping")]),a._v("与"),s("code",[a._v("RequestMappingHandlerAdapter")]),a._v("两个"),s("code",[a._v("Bean")]),a._v(",这是"),s("code",[a._v("Spring MVC")]),a._v("为"),s("code",[a._v("@Controller")]),a._v("分发请求所必需的，并且提供了数据绑定支持，"),s("code",[a._v("@NumberFormatannotation")]),a._v("支持，"),s("code",[a._v("@DateTimeFormat")]),a._v("支持,"),s("code",[a._v("@Valid")]),a._v("支持读写"),s("code",[a._v("XML")]),a._v("的支持"),s("code",[a._v("（JAXB）")]),a._v("和读写"),s("code",[a._v("JSON")]),a._v("的支持（默认"),s("code",[a._v("Jackson")]),a._v("）等功能。\n我们处理响应"),s("code",[a._v("ajax")]),a._v("请求时，就使用到了对"),s("code",[a._v("json")]),a._v("的支持。\n对"),s("code",[a._v("action")]),a._v("写"),s("code",[a._v("JUnit")]),a._v("单元测试时，要从"),s("code",[a._v("spring IOC")]),a._v("容器中取"),s("code",[a._v("DefaultAnnotationHandlerMapping")]),a._v("与"),s("code",[a._v("AnnotationMethodHandlerAdapter")]),a._v("两个"),s("code",[a._v("bean")]),a._v("，来完成测试，取的时候要知道是"),s("code",[a._v("<mvc:annotation-driven />")]),a._v("这一句注册的这两个"),s("code",[a._v("bean")]),a._v("。")]),a._v(" "),s("p",[s("code",[a._v("CSS")]),a._v("和"),s("code",[a._v("JS")]),a._v("失效，需要在"),s("code",[a._v("applicationContext.xml")]),a._v("中做静态资源的处理")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!--静态资源的处理，我们的前端控制器不处理静态资源 ,注意，请求还是有走前端控制器，只不过不处理 --\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("mvc:")]),a._v("default-servlet-handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"_2、使用注解编写控制层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、使用注解编写控制层"}},[a._v("#")]),a._v(" 2、使用注解编写控制层")]),a._v(" "),s("p",[a._v("在控制器层使用 **"),s("code",[a._v("@RestController")]),a._v("**返回数据 ，可以设置返回格式 "),s("code",[a._v("application/json")]),a._v(";")]),a._v(" "),s("p",[s("code",[a._v("@ResponseBody")]),a._v(" : 如果方法加上了"),s("code",[a._v("@ResponseBody")]),a._v("注解，"),s("code",[a._v("Spring")]),a._v("返回值到响应体。如果这样做的话，"),s("code",[a._v("Spring")]),a._v("将根据请求中的 "),s("code",[a._v("Content-Type header")]),a._v("（私下）使用"),s("code",[a._v("HTTP Message converters")]),a._v(" 来将"),s("code",[a._v("domain")]),a._v("对象转换为响应体。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@RestController")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ajax"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BlogControllerAjax")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Autowired")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BlogService")]),a._v(" blogService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@GetMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"blog"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PageData")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BlogEntity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBlogListAjax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" page "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" pageSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PageData")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BlogEntity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" blogList "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" blogService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBlogList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" pageSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("blogList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" blogList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br")])]),s("h2",{attrs:{id:"_3、访问url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、访问url"}},[a._v("#")]),a._v(" 3、访问Url")]),a._v(" "),s("blockquote",[s("p",[s("code",[a._v("GET http://127.0.0.1:8080/ajax/blog")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
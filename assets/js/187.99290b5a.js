(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{618:function(t,e,s){"use strict";s.r(e);var a=s(16),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"servlet-指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#servlet-指南"}},[t._v("#")]),t._v(" Servlet 指南")]),t._v(" "),s("h2",{attrs:{id:"一、javaweb-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、javaweb-简介"}},[t._v("#")]),t._v(" 一、JavaWeb 简介")]),t._v(" "),s("h3",{attrs:{id:"_1-1-web-应用程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-web-应用程序"}},[t._v("#")]),t._v(" 1.1. Web 应用程序")]),t._v(" "),s("p",[s("code",[t._v("Web")]),t._v("，在英语中 "),s("code",[t._v("web")]),t._v(" 即表示网页的意思，它用于表示 "),s("code",[t._v("Internet")]),t._v(" 主机上供外界访问的资源。")]),t._v(" "),s("p",[s("code",[t._v("Web")]),t._v(" 应用程序是一种可以通过 "),s("code",[t._v("Web")]),t._v(" 访问的应用程序，程序的最大好处是用户很容易访问应用程序，用户只需要有浏览器即可，不需要再安装其他软件。")]),t._v(" "),s("p",[s("code",[t._v("Internet")]),t._v("上供外界访问的 "),s("code",[t._v("Web")]),t._v(" 资源分为：")]),t._v(" "),s("ul",[s("li",[t._v("静态 "),s("code",[t._v("web")]),t._v(" 资源：指"),s("code",[t._v("web")]),t._v(" 页面中供人们浏览的数据始终是不变。常见静态资源文件："),s("code",[t._v("html")]),t._v("、"),s("code",[t._v("css")]),t._v("、各种图片类型（jpg、png）")]),t._v(" "),s("li",[t._v("动态 "),s("code",[t._v("web")]),t._v(" 资源：指 "),s("code",[t._v("web")]),t._v(" 页面中供人们浏览的数据是由程序产生的，不同时间点访问 "),s("code",[t._v("web")]),t._v(" 页面看到的内容各不相同。常见动态资源技术："),s("code",[t._v("JSP/Servlet")]),t._v("、"),s("code",[t._v("ASP")]),t._v("、"),s("code",[t._v("PHP")])])]),t._v(" "),s("h3",{attrs:{id:"_1-2-常见-web-服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-常见-web-服务器"}},[t._v("#")]),t._v(" 1.2. 常见 Web 服务器")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://tomcat.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tomcat"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.eclipse.org/jetty/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jetty"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://caucho.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Resin"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://httpd.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://nginx.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.ibm.com/cloud/websphere-application-platform",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebSphere"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.oracle.com/middleware/technologies/weblogic.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebLogic"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.jboss.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JBoss"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"二、servlet-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、servlet-简介"}},[t._v("#")]),t._v(" 二、Servlet 简介")]),t._v(" "),s("h3",{attrs:{id:"_2-1-什么是servlet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-什么是servlet"}},[t._v("#")]),t._v(" 2.1 什么是Servlet")]),t._v(" "),s("p",[s("code",[t._v("Servlet（Server Applet）")]),t._v("，"),s("code",[t._v("Servlet")]),t._v("是运行在服务器端的组件，能够给客户端返回动态页面，即小服务程序或服务连接器。"),s("code",[t._v("Servlet")]),t._v("是 "),s("code",[t._v("Java")]),t._v(" 编写的服务器端程序，具有独立于平台和协议的特性，主要功能在于交互式地浏览和生成数据，生成动态 "),s("code",[t._v("Web")]),t._v(" 内容。")]),t._v(" "),s("p",[t._v("一个servlet应该继承"),s("code",[t._v("HttpServlet")]),t._v("，重写"),s("code",[t._v("doGet")]),t._v("和"),s("code",[t._v("doPost")]),t._v("等方法；可以使用 "),s("code",[t._v("@WebServlet")]),t._v("来注解来标识"),s("code",[t._v("urlmapping")]),t._v("等信息。")]),t._v(" "),s("p",[t._v("多个客户端访问同一个Servlet时，不再创建新的对象，而是共用同一个Servlet对象。可以说，"),s("font",{attrs:{color:"red"}},[t._v("Servlet是多线程单实例的")]),t._v("。")],1),t._v(" "),s("ul",[s("li",[t._v("狭义的 "),s("code",[t._v("Servlet")]),t._v("是指 "),s("code",[t._v("Java")]),t._v(" 实现的一个接口。")]),t._v(" "),s("li",[t._v("广义的 "),s("code",[t._v("Servlet")]),t._v("是指任何实现了这个"),s("code",[t._v("Servlet")]),t._v("接口的类。")])]),t._v(" "),s("p",[s("code",[t._v("Servlet")]),t._v(" 运行于支持 "),s("code",[t._v("Java")]),t._v(" 的应用服务器中。从原理上讲，"),s("code",[t._v("Servlet")]),t._v(" 可以响应任何类型的请求，但绝大多数情况下"),s("code",[t._v("Servlet")]),t._v("只用来扩展基于 "),s("code",[t._v("HTTP")]),t._v("协议的"),s("code",[t._v("Web")]),t._v(" 服务器。")]),t._v(" "),s("h3",{attrs:{id:"_2-2-servlet-任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-servlet-任务"}},[t._v("#")]),t._v(" 2.2  Servlet 任务")]),t._v(" "),s("ul",[s("li",[t._v("读取客户端（浏览器）发送的显式的数据。这包括网页上的 HTML 表单，或者也可以是来自 applet 或自定义的 HTTP 客户端程序的表单。")]),t._v(" "),s("li",[t._v("读取客户端（浏览器）发送的隐式的 HTTP 请求数据。这包括 cookies、媒体类型和浏览器能理解的压缩格式等等。")]),t._v(" "),s("li",[t._v("处理数据并生成结果。这个过程可能需要访问数据库，执行 RMI 或 CORBA 调用，调用 Web 服务，或者直接计算得出对应的响应。")]),t._v(" "),s("li",[t._v("发送显式的数据（即文档）到客户端（浏览器）。该文档的格式可以是多种多样的，包括文本文件（HTML 或 XML）、二进制文件（GIF 图像）、Excel 等。")]),t._v(" "),s("li",[t._v("发送隐式的 HTTP 响应到客户端（浏览器）。这包括告诉浏览器或其他客户端被返回的文档类型（例如 HTML），设置 cookies 和缓存参数，以及其他类似的任务。")])]),t._v(" "),s("h3",{attrs:{id:"_2-3-servlet-生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-servlet-生命周期"}},[t._v("#")]),t._v(" 2.3 Servlet 生命周期")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("加载")]),t._v(" - 第一个到达服务器的 "),s("code",[t._v("HTTP")]),t._v(" 请求被委派到 "),s("code",[t._v("Servlet")]),t._v(" 容器。容器通过类加载器使用"),s("code",[t._v("Servlet")]),t._v(" 类对应的文件加载 "),s("code",[t._v("servlet")]),t._v("，将类加载到JVM中.；")]),t._v(" "),s("li",[s("strong",[t._v("初始化")]),t._v(" - "),s("code",[t._v("Servlet")]),t._v("通过调用 "),s("strong",[s("code",[t._v("init ()")])]),t._v(" 方法进行初始化，只会在第一次访问的时候初始化一次。")]),t._v(" "),s("li",[s("strong",[t._v("服务")]),t._v(" - "),s("code",[t._v("Servlet")]),t._v(" 调用 "),s("strong",[s("code",[t._v("service()")])]),t._v(" 方法来处理客户端的请求，请求一次就执行一次。")]),t._v(" "),s("li",[s("strong",[t._v("销毁")]),t._v(" - "),s("code",[t._v("Servlet")]),t._v(" 通过调用 "),s("strong",[s("code",[t._v("destroy()")])]),t._v(" 方法终止（结束），重新启动或者停止"),s("code",[t._v("Tomcat")]),t._v("时"),s("code",[t._v("Servlet")]),t._v("销毁。")]),t._v(" "),s("li",[s("strong",[t._v("卸载")]),t._v(" - "),s("code",[t._v("Servlet")]),t._v("是由 "),s("code",[t._v("JVM")]),t._v(" 的垃圾回收器进行垃圾回收的。")])]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[t._v("类加载和构造")]),t._v(" "),s("li",[t._v("初始化")]),t._v(" "),s("li",[t._v("服务")]),t._v(" "),s("li",[t._v("销毁")])]),t._v(" "),s("h2",{attrs:{id:"三、-注解-webservlet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、-注解-webservlet"}},[t._v("#")]),t._v(" 三、 注解:@WebServlet:")]),t._v(" "),s("p",[t._v("从"),s("code",[t._v("Servlet3.0")]),t._v("开始，配置"),s("code",[t._v("Servlet")]),t._v("支持注解方式，但还是保留了配置"),s("code",[t._v("web.xml")]),t._v("方式，使用"),s("code",[t._v("Servlet")]),t._v("有两种方式：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("name")])]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[t._v("指定Servlet 的 name 属性，等价于 "),s("code",[t._v("<servlet-name>")]),t._v("。如果没有显式指定，则该 Servlet 的取值即为类的全限定名。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("value")])]),t._v(" "),s("td",[s("code",[t._v("String[]")])]),t._v(" "),s("td",[t._v("该属性等价于 urlPatterns 属性。两个属性不能同时使用。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("urlPatterns")])]),t._v(" "),s("td",[s("code",[t._v("String[]")])]),t._v(" "),s("td",[t._v("指定一组 Servlet 的 URL 匹配模式。等价于"),s("code",[t._v("<url-pattern>")]),t._v("标签。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("loadOnStartup")])]),t._v(" "),s("td",[s("code",[t._v("int")])]),t._v(" "),s("td",[t._v("指定 Servlet 的加载顺序，等价于 "),s("code",[t._v("<load-on-startup>")]),t._v("标签。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("initParams")])]),t._v(" "),s("td",[s("code",[t._v("WebInitParam[]")])]),t._v(" "),s("td",[t._v("指定一组 Servlet 初始化参数，等价于"),s("code",[t._v("<init-param>")]),t._v("标签。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("asyncSupported")])]),t._v(" "),s("td",[s("code",[t._v("boolean")])]),t._v(" "),s("td",[t._v("声明 Servlet 是否支持异步操作模式，等价于"),s("code",[t._v("<async-supported>")]),t._v(" 标签。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("description")])]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[t._v("该 Servlet 的描述信息，等价于 "),s("code",[t._v("<description>")]),t._v("标签。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("displayName")])]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[t._v("该 Servlet 的显示名，通常配合工具使用，等价于 "),s("code",[t._v("<display-name>")]),t._v("标签。")])])])]),t._v(" "),s("h3",{staticStyle:{color:"red"}},[t._v("WebServlet中的重要属性详解：")]),t._v(" "),s("p",[s("code",[t._v("loadOnStartup")]),t._v("属性：标记容器是否在启动应用时就加载"),s("code",[t._v("Servlet")]),t._v("，默认不配置或数值为负数时表示客户端第一次请求Servlet时再加载；"),s("code",[t._v("0")]),t._v("或正数表示启动应用就加载，正数情况下，数值越小，加载该Servlet的优先级越高；默认值为"),s("code",[t._v("-1")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// loadOnStartup = 0 0或正数表示启动应用就加载，正数情况下，数值越小，加载该Servlet的优先级越高；默认值为-1.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// urlPatterns/value属性： String[]类型，可以配置多个映射,urlPatterns/value是一样的，用哪个都可以。")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@WebServlet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urlPatterns "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/news"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("loadOnStartup "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[s("code",[t._v("urlPatterns/value属性")]),t._v("： "),s("code",[t._v("String[]")]),t._v("类型，可以配置多个映射。"),s("code",[t._v("urlPatterns/value")]),t._v("是一样的，用哪个都可以，请求地址就是实际访问的"),s("code",[t._v("Servlet")]),t._v("地址。")]),t._v(" "),s("p",[s("code",[t._v("urlPatterns")]),t._v("的规则：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*：拦截所有\n\n*.do：拦截指定后缀，例如a.do,index.do\n\n/index/test 或者 /UserServlet：拦截路径\n\n/*.do是非法的，启动会报错\n")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[s("code",[t._v("WebServlet")]),t._v("源码：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("javax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Documented")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Retention")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RUNTIME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Documented")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebServlet")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("urlPatterns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadOnStartup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebInitParam")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("asyncSupported")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("smallIcon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("largeIcon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("displayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br")])]),s("h2",{attrs:{id:"四、servlet-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、servlet-api"}},[t._v("#")]),t._v(" 四、Servlet API")]),t._v(" "),s("h3",{attrs:{id:"_4-1-httpservletrequest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-httpservletrequest"}},[t._v("#")]),t._v(" 4.1 HttpServletRequest")]),t._v(" "),s("p",[s("code",[t._v("HttpServletRequest")]),t._v(":负责处理请求,在"),s("code",[t._v("servlet")]),t._v("中使用:")]),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[s("code",[t._v("HttpServletRequest")]),t._v("的常见方法：")])],1),t._v(" "),s("ul",[s("li",[s("code",[t._v('request.getParameter("newstitle")')]),t._v(" 获取传递的参数的值，返回值是一个String类型.")]),t._v(" "),s("li",[s("code",[t._v('request.getParameterValues("cks")')]),t._v(" 获取传递的参数的值，返回值是一个String[]类型.")]),t._v(" "),s("li",[s("code",[t._v('request.setCharacterEncoding("utf-8")')]),t._v(" 和请求页面的编码要一致;")]),t._v(" "),s("li",[s("code",[t._v("request.getRemoteAddr()")]),t._v(" 得到客户端请求的ip地址")]),t._v(" "),s("li",[s("code",[t._v("String contextPath = request.getContextPath()")]),t._v(" 请求的上下文 /newsSys")]),t._v(" "),s("li",[s("code",[t._v('request.getRequestDispatcher("index.jsp").forward(request, response)')]),t._v(" 页面的转发")])]),t._v(" "),s("h3",{attrs:{id:"_4-2-httpservletresponse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-httpservletresponse"}},[t._v("#")]),t._v(" 4.2 HttpServletResponse")]),t._v(" "),s("h3",{attrs:{id:"_4-3-httpsession"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-httpsession"}},[t._v("#")]),t._v(" 4.3 HttpSession")]),t._v(" "),s("h3",{attrs:{id:"_4-4-servletcontext"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-servletcontext"}},[t._v("#")]),t._v(" 4.4 ServletContext")])])}),[],!1,null,null,null);e.default=n.exports}}]);
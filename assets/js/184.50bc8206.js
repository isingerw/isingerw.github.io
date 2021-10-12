(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{614:function(s,e,t){"use strict";t.r(e);var a=t(16),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"jsp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsp"}},[s._v("#")]),s._v(" JSP")]),s._v(" "),t("h2",{attrs:{id:"一、jsp简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、jsp简介"}},[s._v("#")]),s._v(" 一、Jsp简介")]),s._v(" "),t("p",[t("code",[s._v("JSP")]),s._v("全称"),t("code",[s._v("Java Server Pages")]),s._v("，是一种动态网页开发技术。")]),s._v(" "),t("p",[s._v("它使用 JSP 标签在 HTML 网页中插入 Java 代码。标签通常以"),t("code",[s._v("<%")]),s._v("开头以"),t("code",[s._v("%>")]),s._v("结束。")]),s._v(" "),t("p",[s._v("JSP 是一种 Java servlet，主要用于实现 Java web 应用程序的用户界面部分。网页开发者们通过结合 HTML 代码、XHTML 代码、XML 元素以及嵌入 JSP 操作和命令来编写 JSP。")]),s._v(" "),t("p",[s._v("JSP 通过网页表单获取用户输入数据、访问数据库及其他数据源，然后动态地创建网页。")]),s._v(" "),t("p",[s._v("JSP 标签有多种功能，比如访问数据库、记录用户选择信息、访问 JavaBeans 组件等，还可以在不同的网页中传递控制信息和共享信息。")]),s._v(" "),t("h2",{attrs:{id:"二、为什么要用jsp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、为什么要用jsp"}},[s._v("#")]),s._v(" 二、为什么要用Jsp？")]),s._v(" "),t("p",[s._v("JSP 也是一种 Servlet，因此 JSP 能够完成 Servlet 能完成的任何工作。")]),s._v(" "),t("p",[s._v("JSP 程序与 CGI 程序有着相似的功能，但和 CGI 程序相比，JSP 程序有如下优势：")]),s._v(" "),t("ul",[t("li",[s._v("性能更加优越，因为 JSP 可以直接在 HTML 网页中动态嵌入元素而不需要单独引用 CGI 文件。")]),s._v(" "),t("li",[s._v("服务器调用的是已经编译好的 JSP 文件，而不像 CGI/Perl 那样必须先载入解释器和目标脚本。")]),s._v(" "),t("li",[s._v("JSP 基于 Java Servlets API，因此，JSP 拥有各种强大的企业级 Java API，包括 JDBC，JNDI，EJB，JAXP 等等。")]),s._v(" "),t("li",[s._v("JSP 页面可以与处理业务逻辑的 servlets 一起使用，这种模式被 Java servlet 模板引擎所支持。")])]),s._v(" "),t("p",[s._v("最后，JSP 是 Java EE 不可或缺的一部分，是一个完整的企业级应用平台。这意味着 JSP 可以用最简单的方式来实现最复杂的应用。")]),s._v(" "),t("h3",{attrs:{id:"_2-1-jsp-的优势"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-jsp-的优势"}},[s._v("#")]),s._v(" 2.1  JSP 的优势")]),s._v(" "),t("ul",[t("li",[s._v("与 ASP 相比：JSP 有两大优势。首先，动态部分用 Java 编写，而不是 VB 或其他 MS 专用语言，所以更加强大与易用。第二点就是 JSP 易于移植到非 MS 平台上。")]),s._v(" "),t("li",[s._v("与纯 Servlets 相比：JSP 可以很方便的编写或者修改 HTML 网页而不用去面对大量的 println 语句。")]),s._v(" "),t("li",[s._v("与 SSI 相比：SSI 无法使用表单数据、无法进行数据库链接。")]),s._v(" "),t("li",[s._v("与 JavaScript 相比：虽然 JavaScript 可以在客户端动态生成 HTML，但是很难与服务器交互，因此不能提供复杂的服务，比如访问数据库和图像处理等等。")]),s._v(" "),t("li",[s._v("与静态 HTML 相比：静态 HTML 不包含动态信息。")])]),s._v(" "),t("h2",{attrs:{id:"三、jsp语法组成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、jsp语法组成"}},[s._v("#")]),s._v(" 三、Jsp语法组成")]),s._v(" "),t("h2",{attrs:{id:"四、jsp-隐式对象或内置对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、jsp-隐式对象或内置对象"}},[s._v("#")]),s._v(" 四、JSP 隐式对象或内置对象")]),s._v(" "),t("p",[s._v("JSP 隐式对象是 JSP 容器为每个页面提供的 Java 对象，开发者可以直接使用它们而不用显式声明。JSP 隐式对象也被称为预定义变量。")]),s._v(" "),t("p",[s._v("JSP 所支持的九大隐式对象：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[s._v("对象")])]),s._v(" "),t("th",[t("strong",[s._v("描述")])])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",[s._v("request")])]),s._v(" "),t("td",[t("strong",[s._v("HttpServletRequest")]),s._v("类的实例")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("response")])]),s._v(" "),t("td",[t("strong",[s._v("HttpServletResponse")]),s._v("类的实例")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("out")])]),s._v(" "),t("td",[t("strong",[s._v("PrintWriter")]),s._v("类的实例，用于把结果输出至网页上")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("session")])]),s._v(" "),t("td",[t("strong",[s._v("HttpSession")]),s._v("类的实例")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("application")])]),s._v(" "),t("td",[t("strong",[s._v("ServletContext")]),s._v("类的实例，与应用上下文有关")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("config")])]),s._v(" "),t("td",[t("strong",[s._v("ServletConfig")]),s._v("类的实例")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("pageContext")])]),s._v(" "),t("td",[t("strong",[s._v("PageContext")]),s._v("类的实例，提供对 JSP 页面所有对象以及命名空间的访问")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("page")])]),s._v(" "),t("td",[s._v("类似于 Java 类中的 this 关键字")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("Exception")])]),s._v(" "),t("td",[t("strong",[s._v("Exception")]),s._v("类的对象，代表发生错误的 JSP 页面中对应的异常对象")])])])]),s._v(" "),t("h3",{attrs:{id:"_6-1-request-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-request-对象"}},[s._v("#")]),s._v(" 6.1. "),t("font",{attrs:{color:"red"}},[s._v(" request 对象")])],1),s._v(" "),t("p",[t("code",[s._v("request")]),s._v("对象是"),t("code",[s._v("javax.servlet.http.HttpServletRequest")]),s._v(" 类的实例。")]),s._v(" "),t("p",[s._v("每当客户端请求一个 JSP 页面时，JSP 引擎就会制造一个新的"),t("code",[s._v("request")]),s._v("对象来代表这个请求。")]),s._v(" "),t("p",[t("code",[s._v("request")]),s._v("对象提供了一系列方法来获取 HTTP 头信息，cookies，HTTP 方法等等。")]),s._v(" "),t("div",{staticClass:"language-jsp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<%\n    //数据存于request中\n    request.setAttribute("name", "张欣");\n%>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"language-jsp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('\x3c!--// request 获取数据   getAttribute --\x3e\n<%=request.getAttribute("name")%>\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_6-2-response-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-response-对象"}},[s._v("#")]),s._v(" 6.2. response 对象")]),s._v(" "),t("p",[t("code",[s._v("response")]),s._v("对象是"),t("code",[s._v("javax.servlet.http.HttpServletResponse")]),s._v("类的实例。")]),s._v(" "),t("p",[s._v("当服务器创建"),t("code",[s._v("request")]),s._v("对象时会同时创建用于响应这个客户端的"),t("code",[s._v("response")]),s._v("对象。")]),s._v(" "),t("p",[t("code",[s._v("response")]),s._v("对象也定义了处理 HTTP 头模块的接口。通过这个对象，开发者们可以添加新的 cookies，时间戳，HTTP 状态码等等。")]),s._v(" "),t("div",{staticClass:"language-jsp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code")]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"})]),t("h3",{attrs:{id:"_6-3-out-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-out-对象"}},[s._v("#")]),s._v(" 6.3. out 对象")]),s._v(" "),t("p",[t("code",[s._v("out")]),s._v("对象是"),t("code",[s._v("javax.servlet.jsp.JspWriter")]),s._v("类的实例，用来在"),t("code",[s._v("response")]),s._v("对象中写入内容。")]),s._v(" "),t("p",[s._v("最初的"),t("code",[s._v("JspWriter")]),s._v("类对象根据页面是否有缓存来进行不同的实例化操作。可以在"),t("code",[s._v("page")]),s._v("指令中使用"),t("code",[s._v("buffered='false'")]),s._v("属性来轻松关闭缓存。")]),s._v(" "),t("p",[t("code",[s._v("JspWriter")]),s._v("类包含了大部分"),t("code",[s._v("java.io.PrintWriter")]),s._v("类中的方法。不过，"),t("code",[s._v("JspWriter")]),s._v("新增了一些专为处理缓存而设计的方法。还有就是，"),t("code",[s._v("JspWriter")]),s._v("类会抛出"),t("code",[s._v("IOExceptions")]),s._v("异常，而"),t("code",[s._v("PrintWriter")]),s._v("不会。")]),s._v(" "),t("p",[s._v("下表列出了我们将会用来输出"),t("code",[s._v("boolean")]),s._v("，"),t("code",[s._v("char")]),s._v("，"),t("code",[s._v("int")]),s._v("，"),t("code",[s._v("double")]),s._v("，"),t("code",[s._v("String")]),s._v("，"),t("code",[s._v("object")]),s._v("等类型数据的重要方法：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[s._v("方法")])]),s._v(" "),t("th",[t("strong",[s._v("描述")])])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[s._v("out.print(dataType dt)")])]),s._v(" "),t("td",[s._v("输出 Type 类型的值")])]),s._v(" "),t("tr",[t("td",[t("strong",[s._v("out.println(dataType dt)")])]),s._v(" "),t("td",[s._v("输出 Type 类型的值然后换行")])]),s._v(" "),t("tr",[t("td",[t("strong",[s._v("out.flush()")])]),s._v(" "),t("td",[s._v("刷新输出流")])])])]),s._v(" "),t("div",{staticClass:"language-jsp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code")]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"})]),t("h4",{attrs:{id:"_1-out对象应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-out对象应用场景"}},[s._v("#")]),s._v(" 1. out对象应用场景")]),s._v(" "),t("p",[s._v("如：打印"),t("code",[s._v("<script>代码<\/script>>")])]),s._v(" "),t("p",[s._v("切记这个对象用完要记得关闭")]),s._v(" "),t("h3",{attrs:{id:"_6-4-session-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-session-对象"}},[s._v("#")]),s._v(" 6.4. "),t("font",{attrs:{color:"red"}},[s._v(" session 对象")])],1),s._v(" "),t("p",[t("code",[s._v("session")]),s._v("对象是"),t("code",[s._v("javax.servlet.http.HttpSession")]),s._v("类的实例。和 Java Servlets 中的"),t("code",[s._v("session")]),s._v("对象有一样的行为。")]),s._v(" "),t("p",[t("code",[s._v("session")]),s._v("对象用来跟踪在各个客户端请求间的会话。")]),s._v(" "),t("h4",{attrs:{id:"_1-session-会话"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-session-会话"}},[s._v("#")]),s._v(" 1. "),t("font",{attrs:{color:"red"}},[s._v(" Session：会话")])],1),s._v(" "),t("p",[s._v("当我们打开浏览器来访问一个网站，一个会话就开始了;只要浏览器没有关闭，会话就一直存在;当浏览器关闭，会话结束；只要浏览器没有关闭，则在网站的任何页面（jsp, servlet） 都可以获取session中的值；当用户第一次访url地址的时候，就会自动生成一个jsessionId存放在本地的cookie中;")]),s._v(" "),t("div",{staticClass:"language-jsp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('session.setAttribute("username","admin");\n// 返回值为Object\nObject obj = session.getAttribute("username")\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"language-jsp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<%\n\t//数据存于session中\n    session.setAttribute("nickname", "陈总");\n%>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"language-jsp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('\x3c!--// session 获取数据   getAttribute --\x3e\n<%=session.getAttribute("nickname")%>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"_2-session-超时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-session-超时"}},[s._v("#")]),s._v(" 2. "),t("font",{attrs:{color:"red"}},[s._v("Session 超时:")])],1),s._v(" "),t("p",[s._v("Session超时理解为：浏览器和服务器之间创建了一个Session，由于客户端长时间（休眠时间）没有与服务器交互，服务器将此Session销毁，客户端再一次与服务器交互时之前的Session就不存在了。")]),s._v(" "),t("p",[s._v("设置Session超时时间方式：")]),s._v(" "),t("p",[s._v("方式一： 即客户端连续两次与服务器交互间隔时间最长为2分钟，2分钟后session.getAttribute()获取的值为空")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[s._v("在web.xml中设置session-config如下：\n "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("session-config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("session-timeout")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("session-timeout")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("session-config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"language-jsp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("session.getCreationTime()   获取session的创建时间\nsession.getLastAccessedTime()  获取上次与服务器交互时间\nsession.getMaxInactiveInterval() 获取session最大的不活动的间隔时间，以秒为单位120秒。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("方式二：在Tomcat的/conf/web.xml中session-config,默认值为：30分钟")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("session-config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("session-timeout")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("30"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("session-timeout")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("session-config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("方式三： 在Servlet中设置")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpSession")]),s._v(" session "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSession")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setMaxInactiveInterval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//单位为秒")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"_4-说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-说明"}},[s._v("#")]),s._v(" 4. 说明：")]),s._v(" "),t("ol",[t("li",[s._v("优先级：Servlet中API设置 > 程序/web.xml设置 > Tomcat/conf/web.xml设置")]),s._v(" "),t("li",[s._v("若访问服务器session超时（本次访问与上次访问时间间隔大于session最大的不活动的间隔时间）了，即上次会话结束，但服务器与客户端会产生一个新的会话，之前的session里的属性值全部丢失，产生新的sesssionId")]),s._v(" "),t("li",[s._v("客户端与服务器一次有效会话（session没有超时），每次访问sessionId相同，若代码中设置了session.setMaxInactiveInterval()值，那么这个session的最大不活动间隔时间将被修改，并被应用为新值。")]),s._v(" "),t("li",[s._v("Session的销毁（代表会话周期的结束）：在某个请求周期内调用了Session.invalidate()方法，此请求周期结束后，session被销毁；或者是session超时后自动销毁；或者客户端关掉浏览器")]),s._v(" "),t("li",[s._v('对于JSP，如果指定了<%@ page session="false"%>，则在JSP中无法直接访问内置的session变量，同时也不会主动创建session，因为此时JSP未自动执行request.getSession()操作获取session。')])]),s._v(" "),t("h4",{attrs:{id:"_5-session应用场景-访问控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-session应用场景-访问控制"}},[s._v("#")]),s._v(" 5."),t("font",{attrs:{color:"red"}},[s._v(" session应用场景(访问控制):")])],1),s._v(" "),t("ul",[t("li",[s._v("下载文件，判断用户是否登录，如果有登录过，则可以下载否则提示登录")]),s._v(" "),t("li",[s._v("只有登录的用户才能进入网站的后台")])]),s._v(" "),t("p",[s._v("操作步骤：")]),s._v(" "),t("ul",[t("li",[s._v("用户登录成功，我们将用户登录的信息存储在session中[会话]")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Session")]),s._v("对象"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setAttribute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("“key”"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("需要验证用户权限的页面或者servlet中通过对session中的值进行判断来决定是放行还是跳转到登录界面")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("If")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("session对象"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getAttribute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("“key”"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//跳转到登录界面")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_6-5-application-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-application-对象"}},[s._v("#")]),s._v(" 6.5. "),t("font",{attrs:{color:"red"}},[s._v(" application 对象")])],1),s._v(" "),t("p",[t("code",[s._v("application")]),s._v("对象直接包装了 servlet 的"),t("code",[s._v("ServletContext")]),s._v("类的对象，是"),t("code",[s._v("javax.servlet.ServletContext")]),s._v("类的实例。")]),s._v(" "),t("p",[s._v("这个对象在 JSP 页面的整个生命周期中都代表着这个 JSP 页面。这个对象在 JSP 页面初始化时被创建，随着"),t("code",[s._v("jspDestroy()")]),s._v("方法的调用而被移除。")]),s._v(" "),t("p",[s._v("通过向"),t("code",[s._v("application")]),s._v("中添加属性，则所有组成 web 应用的 JSP 文件都能访问到这些属性。")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("setAttribute")]),s._v("设置了属性之后,在当前的整个应用程序中都可以使用;")]),s._v(" "),t("div",{staticClass:"language-jsp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<%\n    //数据存于application中\n    application.setAttribute("money", "10爽");\n%>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"language-jsp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('\x3c!--// application 获取数据   getAttribute --\x3e\n<%=application.getAttribute("money")%>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"_1-applicatiion应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-applicatiion应用场景"}},[s._v("#")]),s._v(" 1. "),t("code",[s._v("Applicatiion")]),s._v("应用场景：")]),s._v(" "),t("p",[s._v("如：可以简单记录访问网站的在线人数.")]),s._v(" "),t("h3",{attrs:{id:"_6-6-config-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-config-对象"}},[s._v("#")]),s._v(" 6.6. config 对象")]),s._v(" "),t("p",[t("code",[s._v("config")]),s._v("对象是"),t("code",[s._v("javax.servlet.ServletConfig")]),s._v("类的实例，直接包装了 servlet 的"),t("code",[s._v("ServletConfig")]),s._v("类的对象。")]),s._v(" "),t("p",[s._v("这个对象允许开发者访问 "),t("code",[s._v("Servlet")]),s._v(" 或者 "),t("code",[s._v("JSP")]),s._v(" 引擎的初始化参数，比如文件路径等。")]),s._v(" "),t("p",[s._v("以下是 "),t("code",[s._v("config")]),s._v("对象的使用方法，不是很重要，所以不常用：")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("config.getServletName();\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("它返回包含在"),t("code",[s._v("<servlet-name>")]),s._v("元素中的 servlet 名字，注意，"),t("code",[s._v("<servlet-name>")]),s._v("元素在"),t("code",[s._v("WEB-INF\\web.xml")]),s._v("文件中定义。")]),s._v(" "),t("h3",{attrs:{id:"_6-7-pagecontext-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-7-pagecontext-对象"}},[s._v("#")]),s._v(" 6.7. "),t("font",{attrs:{color:"red"}},[s._v(" pageContext 对象")])],1),s._v(" "),t("p",[t("code",[s._v("pageContext")]),s._v("对象是"),t("code",[s._v("javax.servlet.jsp.PageContext")]),s._v("类的实例，用来代表整个 JSP 页面。")]),s._v(" "),t("p",[s._v("这个对象主要用来访问页面信息，同时过滤掉大部分实现细节。")]),s._v(" "),t("p",[s._v("这个对象存储了"),t("code",[s._v("request")]),s._v("对象和"),t("code",[s._v("response")]),s._v("对象的引用。"),t("code",[s._v("application")]),s._v("对象，"),t("code",[s._v("config")]),s._v("对象，"),t("code",[s._v("session")]),s._v("对象，"),t("code",[s._v("out")]),s._v("对象可以通过访问这个对象的属性来导出。")]),s._v(" "),t("p",[t("code",[s._v("pageContext")]),s._v("对象也包含了传给 JSP 页面的指令信息，包括缓存信息，ErrorPage URL,页面 scope 等。")]),s._v(" "),t("p",[t("code",[s._v("PageContext")]),s._v("类定义了一些字段，包括 "),t("code",[s._v("PAGE_SCOPE")]),s._v("，"),t("code",[s._v("REQUEST_SCOPE")]),s._v("，"),t("code",[s._v("SESSION_SCOPE")]),s._v("， "),t("code",[s._v("APPLICATION_SCOPE")]),s._v("。它也提供了 40 余种方法，有一半继承自"),t("code",[s._v("javax.servlet.jsp.JspContext")]),s._v(" 类。")]),s._v(" "),t("p",[s._v("其中一个重要的方法就是"),t("code",[s._v("removeArribute()")]),s._v("，它可接受一个或两个参数。比如，"),t("code",[s._v('pageContext.removeArribute("attrName")')]),s._v("移除四个 "),t("code",[s._v("scope")]),s._v(" 中相关属性，但是下面这种方法只移除特定"),t("code",[s._v("scope")]),s._v(" 中的相关属性：")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('pageContext.removeAttribute("attrName", PAGE_SCOPE);\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v('pageContext.setAttribute("key","value")')]),s._v("与"),t("code",[s._v('pageContext.getAttribute("key","value")')]),s._v("主要作用是获取其他对象：")]),s._v(" "),t("div",{staticClass:"language-jsp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('pageContext.setAttribute("key","value") // 在页面上定义一个专门存储数据的对象，\npageContext.getAttribute("key","value") // 取数据\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("如：")]),s._v(" "),t("div",{staticClass:"language-jsp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<%\n    //数据存放于setAttribute中\n    pageContext.setAttribute("username", "罗水文");\n%>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"language-jsp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('\x3c!--//pageContext 获取数据   getAttribute --\x3e\n<%=pageContext.getAttribute("username")%>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_6-8-page-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-8-page-对象"}},[s._v("#")]),s._v(" 6.8. page 对象")]),s._v(" "),t("p",[s._v("这个对象就是页面实例的引用。它可以被看做是整个 JSP 页面的代表。")]),s._v(" "),t("p",[t("code",[s._v("page")]),s._v("对象就是"),t("code",[s._v("this")]),s._v("对象的同义词。")]),s._v(" "),t("h3",{attrs:{id:"_6-9-exception-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-9-exception-对象"}},[s._v("#")]),s._v(" 6.9. exception 对象")]),s._v(" "),t("p",[t("code",[s._v("exception")]),s._v("对象包装了从先前页面中抛出的异常信息。它通常被用来产生对出错条件的适当响应。")]),s._v(" "),t("h2",{attrs:{id:"五、页面跳转"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、页面跳转"}},[s._v("#")]),s._v(" 五、页面跳转")]),s._v(" "),t("h3",{attrs:{id:"_5-1-通过request跳转"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-通过request跳转"}},[s._v("#")]),s._v(" 5.1 通过Request跳转")]),s._v(" "),t("ul",[t("li",[s._v("转发："),t("code",[s._v('request.getRequestDispatcher("index.jsp").forward(request, response);')]),s._v("request转发:只能在当前网址内部（），效率比较高。")])]),s._v(" "),t("div",{staticClass:"language-jsp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<%--request转发:只能在当前网址内部（）--%>\n<%\n    request.setAttribute("username", "tom");\n    request.setAttribute("password", "123456");\n    request.getRequestDispatcher("page_2.jsp").forward(request, response);\n%>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("div",{staticClass:"language-jsp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<%--request转发--%>\n<%=request.getAttribute("username")%>\n<%=request.getAttribute("password")%>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_5-2-通过response跳转"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-通过response跳转"}},[s._v("#")]),s._v(" 5.2 通过Response跳转")]),s._v(" "),t("ul",[t("li",[s._v("重定向："),t("code",[s._v('response.sendRedirect("page_2.jsp");')]),s._v("在当前网址内部，也可以是外部的url地址")])]),s._v(" "),t("div",{staticClass:"language-jsp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<%--response重定向：在当前网址内部，也可以是外部的url地址--%>\n<%\n    response.sendRedirect("page_2.jsp");\n%>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_5-3-转发和重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-转发和重定向"}},[s._v("#")]),s._v(" 5.3 转发和重定向")]),s._v(" "),t("ol",[t("li",[s._v("转发"),t("code",[s._v("(request.getRequestDispatcher(“index.jsp”).forward(request,response)) ;")]),s._v("操作的时候浏览器地址栏还停留在原来的url地址，而页面内容已经显示的是"),t("code",[s._v("index.jsp")]),s._v("的内容;而重定向"),t("code",[s._v("(response.sendRedirect(“index.jsp”)) ;")]),s._v("此时浏览器地址栏和显示的内容页是一致，都是"),t("code",[s._v("index.jsp.")])]),s._v(" "),t("li",[s._v("转发的时候可以携带数据"),t("code",[s._v("(request.setAttribute(“key”,value));")]),s._v("之后可以在新的页面获取"),t("code",[s._v("(request.getAttribute(“key”)),")]),s._v("可以多次转发 ;而重定向不能使用"),t("code",[s._v("setAttribute()/getAttribute()")]),s._v("的操作来设置或者获取数据. 传递数据只能通过url直接传递;")]),s._v(" "),t("li",[s._v("二者的原理不同: 转发是服务器内部的行为,对于请求者来说，根本不关注内部的行为只关注自己发送请求的响应; 重定向其实是浏览器重新发送的请求,多次请求者和服务器进行交互的操作.")]),s._v(" "),t("li",[s._v("相对来讲，因为是服务器内部行为,内部转发，所以效率会高一些.")]),s._v(" "),t("li",[s._v("转发是服务器"),t("strong",[s._v("内部")]),s._v("的行为，所以转发页面也是同一个网站的不同部分;但是不能跳转到外部网站;而重定向可以是内部或者外部的网站"),t("code",[s._v("url")]),s._v(".")]),s._v(" "),t("li",[s._v("使用场合:如果需要携带数据(很多 对象)到下一个请求地址，则可以使用转发，否则可以使用重定向.")])]),s._v(" "),t("h3",{attrs:{id:"_5-3-通过超链接按钮js-url跳转"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-通过超链接按钮js-url跳转"}},[s._v("#")]),s._v(" 5.3 通过超链接按钮JS Url跳转")]),s._v(" "),t("div",{staticClass:"language-jsp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('location.href = "news?op=delete&nid=" + $(this).val();\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);
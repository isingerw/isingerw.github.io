(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{672:function(r,t,e){"use strict";e.r(t);var v=e(16),n=Object(v.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"spring-mvc入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc入门"}},[r._v("#")]),r._v(" Spring MVC入门")]),r._v(" "),e("p",[r._v("​\t\t\tSpring是apache推出的开源框架，整合了springmvc框架及spring框架其他部分,是一种轻量级的、基于MVC的 Web应用框架  ,使用springMVC+Mybatis可以实现SSH几乎所有的功能，相对SSH更加的轻量，灵活。")]),r._v(" "),e("h2",{attrs:{id:"_1、springmvc优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、springmvc优势"}},[r._v("#")]),r._v(" 1、SpringMVC优势")]),r._v(" "),e("ul",[e("li",[e("p",[r._v("清晰的角色划分：")]),r._v(" "),e("ul",[e("li",[e("strong",[r._v("前端控制器（DispatcherServlet）;")])]),r._v(" "),e("li",[e("strong",[r._v("请求到处理器映射（HandlerMapping）;")])]),r._v(" "),e("li",[e("strong",[r._v("处理器适配器（HandlerAdapter）;")])]),r._v(" "),e("li",[e("strong",[r._v("视图解析器（ViewResolver）;")])]),r._v(" "),e("li",[e("strong",[r._v("处理器或页面控制器（Controller）;")])]),r._v(" "),e("li",[e("strong",[r._v("验证器（Validator）")])]),r._v(" "),e("li",[e("strong",[r._v("命令对象（Command 请求参数绑定到的对象就叫命令对象）;")])]),r._v(" "),e("li",[e("strong",[r._v("表单对象（Form Object 提供给表单展示和提交到的对象就叫表单对象）")])])])]),r._v(" "),e("li",[e("p",[r._v("分工明细，拓展相当灵活和Spring无缝集成，这个是其他框架不具备的,本身spring中包含了springMVC")])]),r._v(" "),e("li",[e("p",[r._v("功能强大的数据验证、格式化。")])]),r._v(" "),e("li",[e("p",[e("strong",[r._v("支持REST风格")]),r._v("(所有的url都可当成资源)软件的架构风格")])]),r._v(" "),e("li",[e("p",[e("strong",[r._v("基于注解的零配置")]),r._v(",在以前时候，Struts2中需要配置大量的xml文件;但是其实后来struts2也支持注解咯.")])])]),r._v(" "),e("h2",{attrs:{id:"_2、mvc说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、mvc说明"}},[r._v("#")]),r._v(" 2、MVC说明")]),r._v(" "),e("ul",[e("li",[r._v("Model（模型）：")])]),r._v(" "),e("p",[r._v("数据模型，提供要展示的数据，因此包含数据和行为，可以认为是领域模型或JavaBean组件（包含数据和行为），不过现在一般都分离开来：Value Object（数据） 和 服务层service（业务行为）,也就是模型提供了模型数据查询和模型数据的状态更新等功能，包括数据和业务。")]),r._v(" "),e("ul",[e("li",[r._v("View（视图）：")])]),r._v(" "),e("p",[r._v("负责进行模型的展示，一般就是我们见到的用户界面，展示给用户的东西，同时可以收集用户的请求数据，传递给控制器.设计的时候可以借助外部的一些框架.技术可以是html+js,jsp,freemarker，其他的前端技术等")]),r._v(" "),e("ul",[e("li",[r._v("Controller（控制器）：")])]),r._v(" "),e("p",[r._v("接收用户请求，调用给模型进行处理（状态改变），处理完毕后把返回的模型数据返回给视图，由视图负责展示。 也就是说控制器做了个调度员的工作。核心部分。")]),r._v(" "),e("h2",{attrs:{id:"_3、springmvc控制器说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、springmvc控制器说明"}},[r._v("#")]),r._v(" 3、SpringMVC控制器说明")]),r._v(" "),e("p",[r._v("​\t\t框架的Controller 层要完成的主要工作：封装web 请求为一个数据对象、调用业务逻辑层来处理数据对象、返回处理数据结果及相应的视图给用户。")]),r._v(" "),e("p",[r._v("​\t\tSpringMVC中 Controller 层框架的核心是 "),e("strong",[r._v("DispatcherServlet")]),r._v("，它的作用是将请求分发给不同的后端处理器，也即 使用了一种被称为Front Controller 的模式(后面对此模式有简要说明)。 Spring 的C 层框架使用了后端控制器来、映射处理器和视图解析器来共同完成C 层框架的主要工作。并且spring 的C 层框架还真正地把业务层处理的数据结果和相应的视图拼成一个对象，即我们后面会经常用到的ModelAndView 对象。")]),r._v(" "),e("p",[r._v("​\t\tSpring MVC是结构最清晰的MVC Model 2实现。它的控制器，称做Controller；Controller接收request, response参数，然后返回ModelAndView类型的对象（其中的Model不是Object类型，而是Map类型）。但在其它的Web Framework中，Action返回值一般都只是一个View Name；Model则需要通过其它的途径（如request.attribute，Context参数，或Action本身的属性数据）传递上去。")])])}),[],!1,null,null,null);t.default=n.exports}}]);
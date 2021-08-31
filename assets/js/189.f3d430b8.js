(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{621:function(a,t,s){"use strict";s.r(t);var n=s(16),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"实现日志功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现日志功能"}},[a._v("#")]),a._v(" 实现日志功能⚡️")]),a._v(" "),s("h2",{attrs:{id:"_1、日志工厂"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、日志工厂"}},[a._v("#")]),a._v(" 1、日志工厂")]),a._v(" "),s("p",[a._v("Mybatis内置的日志工厂提供日志功能，具体的日志实现有以下几种工具：")]),a._v(" "),s("ul",[s("li",[a._v("SLF4J")]),a._v(" "),s("li",[a._v("Apache Commons Logging")]),a._v(" "),s("li",[a._v("Log4j 2")]),a._v(" "),s("li",[a._v("Log4j")]),a._v(" "),s("li",[a._v("JDK logging")])]),a._v(" "),s("p",[a._v("【示例】"),s("code",[a._v("mybatis-config.xml")]),a._v("中配置"),s("code",[a._v("setting")])]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("settings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("setting")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("logImpl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("STDOUT_LOGGING"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("settings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h2",{attrs:{id:"_2、-log4j的基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、-log4j的基本使用"}},[a._v("#")]),a._v(" 2、 Log4j的基本使用")]),a._v(" "),s("p",[a._v("​\t\tLog4j是Apache的一个开源项目，通过使用Log4j，我们可以控制日志信息输送的目的地是控制台、文件、GUI组件，甚至是套接口服务器、NT的事件记录器、UNIX Syslog守护进程等；我们也可以控制每一条日志的输出格式；通过定义每一条日志信息的级别，我们能够更加细致地控制日志的生成过程。最令人感兴趣的就是，这些可以通过一个配置文件来灵活地进行配置，而不需要修改应用的代码。")]),a._v(" "),s("h3",{attrs:{id:"步骤一-导入jar文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-导入jar文件"}},[a._v("#")]),a._v(" 步骤一：导入Jar文件")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!--log4j--\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("log4j"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("log4j"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1.2.16"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h3",{attrs:{id:"步骤二-配置log4j配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤二-配置log4j配置文件"}},[a._v("#")]),a._v(" 步骤二：配置log4j配置文件")]),a._v(" "),s("p",[a._v("新建"),s("code",[a._v("log4j.properties")]),a._v("，进行配置")]),a._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.rootLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("DEBUG, console, file")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#控制台输出的相关设置")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.appender.console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("org.apache.log4j.ConsoleAppender")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.appender.console.Target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("System.out")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.appender.console.Threshold")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("DEBUG")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.appender.console.layout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("org.apache.log4j.PatternLayout")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.appender.console.layout.ConversionPattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("%-d{yyyy-MM-dd HH:mm:ss} [%p][%c{1}] - %m%n")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.appender.console.Encoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("UTF-8")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#文件输出的相关设置")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.appender.file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("org.apache.log4j.RollingFileAppender")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.appender.file.File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("./logs/log.log")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.appender.file.MaxFileSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("500KB")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.appender.file.MaxBackupIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.appender.file.Threshold")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("DEBUG")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.appender.file.layout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("org.apache.log4j.PatternLayout")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.appender.file.layout.ConversionPattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("%-d{yyyy-MM-dd HH:mm:ss} [%p]-%c{1} - %m%n")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.appender.file.encoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("UTF-8")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#日志输出级别")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.logger.org.mybatis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("DEBUG")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.logger.java.sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("DEBUG")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.logger.java.sql.Connection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("DEBUG")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.logger.java.sql.Statement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("DEBUG")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.logger.java.sql.ResultSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("DEBUG")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log4j.logger.java.sql.PreparedStatement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("DEBUG")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br")])]),s("ol",[s("li",[s("p",[s("code",[a._v("log4j.rootCategory=INFO, stdout , R")])]),a._v(" "),s("p",[a._v("此句为将等级为INFO的日志信息输出到stdout和R这两个目的地，stdout和R的定义在下面的代码，可以任意起名。等级可分为OFF、FATAL、ERROR、WARN、INFO、DEBUG、ALL，如果配置OFF则不打出任何信息，如果配置为INFO这样只显示INFO、WARN、ERROR的log信息，而DEBUG信息不会被显示，具体讲解可参照第三部分定义配置文件中的logger。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("log4j.appender.stdout=org.apache.log4j.ConsoleAppender")])]),a._v(" "),s("p",[a._v("此句为定义名为stdout的输出端是哪种类型，可以是")]),a._v(" "),s("p",[a._v("org.apache.log4j.ConsoleAppender（控制台），")]),a._v(" "),s("p",[a._v("org.apache.log4j.FileAppender（文件），")]),a._v(" "),s("p",[a._v("org.apache.log4j.DailyRollingFileAppender（每天产生一个日志文件），")]),a._v(" "),s("p",[a._v("org.apache.log4j.RollingFileAppender（文件大小到达指定尺寸的时候产生一个新的文件）")]),a._v(" "),s("p",[a._v("org.apache.log4j.WriterAppender（将日志信息以流格式发送到任意指定的地方）")]),a._v(" "),s("p",[a._v("具体讲解可参照第三部分定义配置文件中的Appender。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("log4j.appender.stdout.layout=org.apache.log4j.PatternLayout")])]),a._v(" "),s("p",[a._v("此句为定义名为stdout的输出端的layout是哪种类型，可以是")]),a._v(" "),s("p",[a._v("org.apache.log4j.HTMLLayout（以HTML表格形式布局），")]),a._v(" "),s("p",[a._v("org.apache.log4j.PatternLayout（可以灵活地指定布局模式），")]),a._v(" "),s("p",[a._v("org.apache.log4j.SimpleLayout（包含日志信息的级别和信息字符串），")]),a._v(" "),s("p",[a._v("org.apache.log4j.TTCCLayout（包含日志产生的时间、线程、类别等等信息）")]),a._v(" "),s("p",[a._v("具体讲解可参照第三部分定义配置文件中的Layout。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("log4j.appender.stdout.layout.ConversionPattern= [QC] %p [%t] %C.%M(%L) | %m%n")])]),a._v(" "),s("p",[a._v("如果使用pattern布局就要指定的打印信息的具体格式ConversionPattern，打印参数如下：")]),a._v(" "),s("p",[s("code",[a._v("%m")]),a._v(" 输出代码中指定的消息；")]),a._v(" "),s("p",[s("code",[a._v("%M")]),a._v(" 输出打印该条日志的方法名；")]),a._v(" "),s("p",[s("code",[a._v("%p")]),a._v(" 输出优先级，即DEBUG，INFO，WARN，ERROR，FATAL；")]),a._v(" "),s("p",[s("code",[a._v("%r")]),a._v(" 输出自应用启动到输出该log信息耗费的毫秒数；")]),a._v(" "),s("p",[s("code",[a._v("%c")]),a._v(" 输出所属的类目，通常就是所在类的全名；")]),a._v(" "),s("p",[s("code",[a._v("%t")]),a._v(" 输出产生该日志事件的线程名；")]),a._v(" "),s("p",[s("code",[a._v("%n")]),a._v(' 输出一个回车换行符，Windows平台为"rn”，Unix平台为"n”；')]),a._v(" "),s("p",[s("code",[a._v("%d")]),a._v(" 输出日志时间点的日期或时间，默认格式为ISO8601，也可以在其后指定格式，比如：%d{yyyy-MM-dd HH:mm:ss,SSS}，输出类似：2002-10-18 22:10:28,921；")]),a._v(" "),s("p",[s("code",[a._v("%l")]),a._v("输出日志事件的发生位置，及在代码中的行数；")]),a._v(" "),s("p",[s("code",[a._v("[QC]")]),a._v("是log信息的开头，可以为任意字符，一般为项目简称。")]),a._v(" "),s("p",[a._v("输出的信息")]),a._v(" "),s("p",[a._v("[TS] DEBUG [main] AbstractBeanFactory.getBean(189) | Returning cached instance of singleton bean 'MyAutoProxy'")]),a._v(" "),s("p",[a._v("具体讲解可参照第三部分定义配置文件中的格式化日志信息。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("log4j.appender.R=org.apache.log4j.DailyRollingFileAppender")])]),a._v(" "),s("p",[a._v("此句与第3行一样。定义名为R的输出端的类型为每天产生一个日志文件。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("log4j.appender.R.File=D:\\Tomcat 5.5\\logs\\qc.log")])]),a._v(" "),s("p",[a._v("此句为定义名为R的输出端的文件名为D:\\Tomcat 5.5\\logs\\qc.log可以自行修改。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("log4j.appender.R.layout=org.apache.log4j.PatternLayout")])]),a._v(" "),s("p",[a._v("与第4行相同。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("log4j.appender.R.layout.ConversionPattern=%d-[TS] %p %t %c - %m%n")])]),a._v(" "),s("p",[a._v("与第5行相同。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("log4j.logger.com. neusoft =DEBUG")])]),a._v(" "),s("p",[a._v("指定com.neusoft包下的所有类的等级为DEBUG。")]),a._v(" "),s("p",[a._v("可以把com.neusoft改为自己项目所用的包名。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("log4j.logger.com.opensymphony.oscache=ERROR")])]),a._v(" "),s("p",[s("code",[a._v("og4j.logger.net.sf.navigator=ERROR")])]),a._v(" "),s("p",[a._v("这两句是把这两个包下出现的错误的等级设为ERROR，如果项目中没有配置EHCache，则不需要这两句。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("log4j.logger.org.apache.commons=ERROR")])]),a._v(" "),s("p",[s("code",[a._v("log4j.logger.org.apache.struts=WARN")])]),a._v(" "),s("p",[a._v("这两句是struts的包。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("log4j.logger.org.displaytag=ERROR")])]),a._v(" "),s("p",[a._v("这句是displaytag的包。（QC问题列表页面所用）")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("log4j.logger.org.springframework=DEBUG")])]),a._v(" "),s("p",[a._v("此句为Spring的包。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("log4j.logger.org.hibernate.ps.PreparedStatementCache=WARN")])]),a._v(" "),s("p",[s("code",[a._v("log4j.logger.org.hibernate=DEBUG")])]),a._v(" "),s("p",[a._v("此两句是hibernate的包。")])])]),a._v(" "),s("p",[s("strong",[a._v("以上这些包的设置可根据项目的实际情况而自行定制。")])]),a._v(" "),s("h3",{attrs:{id:"步骤三-配置log4j为日志实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤三-配置log4j为日志实现"}},[a._v("#")]),a._v(" 步骤三：配置log4j为日志实现")]),a._v(" "),s("p",[a._v("在"),s("code",[a._v("mybatis-config.xm")]),a._v("文件中配置l"),s("code",[a._v("og4j")]),a._v("为日志实现")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!--配置log4j为日志实现--\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("settings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("setting")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("logImpl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("LOG4J"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("settings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"步骤四-log4j的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤四-log4j的使用"}},[a._v("#")]),a._v(" 步骤四：log4j的使用")]),a._v(" "),s("ul",[s("li",[a._v("在要使用Log4j的类中，导入"),s("code",[a._v("import org.apache.log4j.Logger;")])]),a._v(" "),s("li",[a._v("创建日志对象，参数为当前类的"),s("code",[a._v("class")])])]),a._v(" "),s("p",[a._v("在要输出日志的类中加入相关语句来定义属性：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Logger")]),a._v(" logger "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Logger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UserMapperTest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UserMapperTest")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Logger")]),a._v(" logger "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Logger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UserMapperTest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Test")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("testLog4j")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"info:进入了testLog4j方法"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("debug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"debug:进入了进入了testLog4j方法"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"debug:进入了进入了testLog4j方法"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("blockquote",[s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("2021-08-25")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("01:55:30 [DEBUG]-LogFactory - Logging initialized using 'class org.apache.ibatis.logging.log4j.Log4jImpl' adapter.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("2021-08-25")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("01:55:30 [DEBUG]-PooledDataSource - PooledDataSource forcefully closed/removed all connections.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("2021-08-25")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("01:55:30 [DEBUG]-PooledDataSource - PooledDataSource forcefully closed/removed all connections.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("2021-08-25")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("01:55:30 [DEBUG]-PooledDataSource - PooledDataSource forcefully closed/removed all connections.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("2021-08-25")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("01:55:30 [DEBUG]-PooledDataSource - PooledDataSource forcefully closed/removed all connections.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("2021-08-25")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("01:55:31 [INFO]-UserMapperTest - info:进入了testLog4j方法")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("2021-08-25")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("01:55:31 [DEBUG]-UserMapperTest - debug:进入了进入了testLog4j方法")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("2021-08-25")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("01:55:31 [ERROR]-UserMapperTest - debug:进入了进入了testLog4j方法")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])])]),a._v(" "),s("p",[a._v("​\t\tlog4j定义了8个级别的log（除去OFF和ALL，可以说分为6个级别），优先级从高到低依次为：")]),a._v(" "),s("ul",[s("li",[a._v("OFF")]),a._v(" "),s("li",[a._v("FATAL")]),a._v(" "),s("li",[a._v("ERROR")]),a._v(" "),s("li",[a._v("WARN")]),a._v(" "),s("li",[a._v("INFO")]),a._v(" "),s("li",[a._v("DEBUG")]),a._v(" "),s("li",[a._v("TRACE")]),a._v(" "),s("li",[a._v("ALL")])]),a._v(" "),s("ol",[s("li",[s("strong",[s("code",[a._v("ALL")])]),a._v(" 最低等级的，用于打开所有日志记录。")]),a._v(" "),s("li",[s("strong",[s("code",[a._v("TRACE")])]),a._v(" designates finer-grained informational events than the DEBUG.Since:1.2.12，很低的日志级别，一般不会使用。")]),a._v(" "),s("li",[s("strong",[s("code",[a._v("DEBUG")])]),a._v(" 指出细粒度信息事件对调试应用程序是非常有帮助的，主要用于开发过程中打印一些运行信息。")]),a._v(" "),s("li",[s("strong",[s("code",[a._v("INFO")])]),a._v(" 消息在粗粒度级别上突出强调应用程序的运行过程。打印一些你感兴趣的或者重要的信息，这个可以用于生产环境中输出程序运行的一些重要信息，但是不能滥用，避免打印过多的日志。")]),a._v(" "),s("li",[s("strong",[s("code",[a._v("WARN")])]),a._v(" 表明会出现潜在错误的情形，有些信息不是错误信息，但是也要给程序员的一些提示。")]),a._v(" "),s("li",[s("strong",[s("code",[a._v("ERROR")])]),a._v(" 指出虽然发生错误事件，但仍然不影响系统的继续运行。打印错误和异常信息，如果不想输出太多的日志，可以使用这个级别。")]),a._v(" "),s("li",[s("strong",[s("code",[a._v("FATAL")])]),a._v(" 指出每个严重的错误事件将会导致应用程序的退出。这个级别比较高了。重大错误，这种级别你可以直接停止程序了。")]),a._v(" "),s("li",[s("strong",[s("code",[a._v("OFF")])]),a._v(" 最高等级的，用于关闭所有日志记录。")])]),a._v(" "),s("p",[a._v("​           "),s("strong",[a._v("如果将log level设置在某一个级别上，那么比此级别优先级高的log都能打印出来。例如，如果设置优先级为WARN，那么OFF、FATAL、ERROR、WARN 4个级别的log能正常输出，而INFO、DEBUG、TRACE、 ALL级别的log则会被忽略。Log4j建议只使用四个级别，优先级从高到低分别是ERROR、WARN、INFO、DEBUG。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
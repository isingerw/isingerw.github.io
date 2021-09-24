(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{622:function(s,a,t){"use strict";t.r(a);var e=t(16),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"centos7-6-安装-tomcat-解压缩安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos7-6-安装-tomcat-解压缩安装"}},[s._v("#")]),s._v(" CentOS7.6 安装 Tomcat（解压缩安装）")]),s._v(" "),t("h3",{attrs:{id:"步骤一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤一"}},[s._v("#")]),s._v(" 步骤一")]),s._v(" "),t("p",[s._v("下载Tomcat，官网网站下载即可！")]),s._v(" "),t("h3",{attrs:{id:"步骤二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤二"}},[s._v("#")]),s._v(" 步骤二")]),s._v(" "),t("p",[s._v("上传"),t("code",[s._v("apache-tomcat-9.0.53.tar.gz")]),s._v("，进行命令解压：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf apache-tomcat-9.0.53.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"步骤三"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤三"}},[s._v("#")]),s._v(" 步骤三")]),s._v(" "),t("p",[s._v("运行Tomcat，进入bin目录，和我们以前在Windows下看的都是一样的!")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/anzhuangbao/\n\n./startup.sh\n./shutdown.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"步骤四"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤四"}},[s._v("#")]),s._v(" 步骤四")]),s._v(" "),t("p",[s._v("确保Linux的防火墙端口是开启的，如果是阿里云，需要保证阿里云的安全组策略是开放的！")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看firewall服务状态")]),s._v("\nsystemctl status firewalld\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启、重启、关闭、firewalld.service服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld start\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld restart\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld stop\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看防火墙规则")]),s._v("\nfirewall-cmd --list-all    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看全部信息")]),s._v("\nfirewall-cmd --list-ports  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只看端口信息")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启端口")]),s._v("\n开端口命令：firewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp --permanent\n重启防火墙：systemctl restart firewalld.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("端口开启命令含义：")]),s._v(" "),t("ul",[t("li",[s._v("--zone #作用域")]),s._v(" "),t("li",[s._v("--add-port=8080/tcp  #添加端口，格式为：端口/通讯协议")]),s._v(" "),t("li",[s._v("--permanent   #永久生效，没有此参数重启后失效")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
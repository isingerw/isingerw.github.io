(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{622:function(s,a,e){"use strict";e.r(a);var t=e(16),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"centos7-6-安装-jdk-rpm方式安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos7-6-安装-jdk-rpm方式安装"}},[s._v("#")]),s._v(" CentOS7.6 安装 JDK（rpm方式安装）")]),s._v(" "),e("h3",{attrs:{id:"步骤一"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤一"}},[s._v("#")]),s._v(" 步骤一")]),s._v(" "),e("p",[s._v("下载JDK rpm到本地")]),s._v(" "),e("p",[s._v("JDK rpm下载地址："),e("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/#java8",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.oracle.com/java/technologies/downloads/#java8"),e("OutboundLink")],1)]),s._v(" "),e("h3",{attrs:{id:"步骤二"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤二"}},[s._v("#")]),s._v(" 步骤二")]),s._v(" "),e("p",[s._v("检查服务器主机是否安装过jdk，如果有安装openjdk 则卸载")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("java -version "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看java版本")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查jdk是否存在")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" jdk\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载命令： yum -y remove")]),s._v("\nyum -y remove libgcj-4.1.2-42.el5\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果不信可以用下面强制卸载")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载 -e ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#--nodeps 强制删除")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -e --nodeps jdk1.8.0_121-1.8.0_121-fcs.x86_64\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h3",{attrs:{id:"步骤三"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤三"}},[s._v("#")]),s._v(" 步骤三")]),s._v(" "),e("p",[s._v("上传"),e("code",[s._v("jdk-8u301-linux-i586.rpm")]),s._v("到服务器相应目录，执行以下命令。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/singerw\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh jdk-8u301-linux-x64.rpm "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装命令")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"步骤四"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤四"}},[s._v("#")]),s._v(" 步骤四")]),s._v(" "),e("p",[s._v("安装完成后配置环境变量 文件："),e("code",[s._v("/etc/profile")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("插入以下变量")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/java/jdk1.8.0_301-amd64\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%JAVA_HOME%/lib:%JAVA_HOME%/jre/lib\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin:"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/jre/bin\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" CLASSPATH JAVA_HOME\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("让新增的环境变量生效！")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("测试：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("java -version\njavac\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"_2、centos7-6-安装-tomcat-解压缩安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、centos7-6-安装-tomcat-解压缩安装"}},[s._v("#")]),s._v(" 2、CentOS7.6 安装 Tomcat（解压缩安装）")]),s._v(" "),e("h3",{attrs:{id:"步骤一-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-2"}},[s._v("#")]),s._v(" 步骤一")]),s._v(" "),e("p",[s._v("下载Tomcat，官网网站下载即可！")]),s._v(" "),e("h3",{attrs:{id:"步骤二-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤二-2"}},[s._v("#")]),s._v(" 步骤二")]),s._v(" "),e("p",[s._v("上传"),e("code",[s._v("apache-tomcat-9.0.53.tar.gz")]),s._v("，进行命令解压：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf apache-tomcat-9.0.53.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"步骤三-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤三-2"}},[s._v("#")]),s._v(" 步骤三")]),s._v(" "),e("p",[s._v("运行Tomcat，进入bin目录，和我们以前在Windows下看的都是一样的!")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/anzhuangbao/\n\n./startup.sh\n./shutdown.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"步骤四-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤四-2"}},[s._v("#")]),s._v(" 步骤四")]),s._v(" "),e("p",[s._v("确保Linux的防火墙端口是开启的，如果是阿里云，需要保证阿里云的安全组策略是开放的！")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看firewall服务状态")]),s._v("\nsystemctl status firewalld\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启、重启、关闭、firewalld.service服务")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld start\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld restart\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld stop\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看防火墙规则")]),s._v("\nfirewall-cmd --list-all    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看全部信息")]),s._v("\nfirewall-cmd --list-ports  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只看端口信息")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启端口")]),s._v("\n开端口命令：firewall-cmd --zone"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp --permanent\n重启防火墙：systemctl restart firewalld.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("p",[s._v("端口开启命令含义：")]),s._v(" "),e("ul",[e("li",[s._v("--zone #作用域")]),s._v(" "),e("li",[s._v("--add-port=8080/tcp  #添加端口，格式为：端口/通讯协议")]),s._v(" "),e("li",[s._v("--permanent   #永久生效，没有此参数重启后失效")])]),s._v(" "),e("h2",{attrs:{id:"_3、centos7-6-安装-mysql-rpm安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、centos7-6-安装-mysql-rpm安装"}},[s._v("#")]),s._v(" 3、CentOS7.6 安装 MySQL（rpm安装）")]),s._v(" "),e("h3",{attrs:{id:"卸载历史版本mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载历史版本mysql"}},[s._v("#")]),s._v(" 卸载历史版本MySQL")]),s._v(" "),e("p",[s._v("查看是否拥有历史版本")]),s._v(" "),e("p",[s._v("非首次安装需卸载历史版本MySQL，命令查看是否有安装MySQL历史版本组件")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看MySQL服务状态")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld status\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("暂停MySQL服务")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld stop\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("卸载MySQL服务")]),s._v(" "),e("p",[s._v("需要把每个组件全部移除，注意可能会有组件的依赖前后顺序。")]),s._v(" "),e("div",{staticClass:"language-cpp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[s._v("rpm "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ev "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("需要移除组件的名称"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n或者\nrpm "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("nodeps "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("需要移除组件的名称"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//此命令为强制卸载")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"安装mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql"}},[s._v("#")]),s._v(" 安装MySQL")]),s._v(" "),e("p",[s._v("使用rpm来安装MySQL")]),s._v(" "),e("p",[s._v("因为CentOS 7默认安装的数据库是Mariadb,所以使用YUM命令是无法安装MySQL的，只会更新Mariadb。使用rpm来进行安装。可以在"),e("a",{attrs:{href:"https://links.jianshu.com/go?to=http%3A%2F%2Frepo.mysql.com%2F",target:"_blank",rel:"noopener noreferrer"}},[s._v("mysql的repo源仓库"),e("OutboundLink")],1),s._v("右键复制指定版本的数据库。")]),s._v(" "),e("div",{staticClass:"language-cpp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[s._v("wget http"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//repo.mysql.com/mysql80-community-release-el7-1.noarch.rpm")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("安装mysql80-community-release-el7-1.noarch.rpm包")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[s._v("sudo rpm -ivh mysql80-community-release-el7-1.noarch.rpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("使用yum安装mysql服务")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("检查是否已经设置为开机启动MySQL服务")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("systemctl list-unit-files"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysqld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("则表示已经设置为开机启动，如果没有设置为开机启动则执行")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" mysqld.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看MySQL是否启动未启动则执行启动服务命令")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("查看是否启动MySQL服务\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n\n启动服务\nsystemctl start mysqld.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("初始化MySQL")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("mysqld --initialize\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看MySQL初始默认密码")]),s._v(" "),e("div",{staticClass:"language-dart line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[s._v("grep "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'temporary password'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("log"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysqld"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("复制 root@localhost: 后面的密码。登录mysql，并粘贴默认密码\n因为MySQL8.0的更改，导致必须要重置密码")]),s._v(" "),e("div",{staticClass:"language-csharp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[s._v("ALTER USER 'root"),e("span",{pre:!0,attrs:{class:"token string character"}},[s._v("'@'")]),s._v("localhost' IDENTIFIED BY 'Assam1314520"),e("span",{pre:!0,attrs:{class:"token range operator"}},[s._v("..")]),s._v("'\\g"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("设置root账号密码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果设置密码时候出现提示")]),s._v(" "),e("blockquote",[e("p",[s._v("ERROR 1819 (HY000): Your password does not satisfy the current policy requirements")])]),s._v(" "),e("p",[s._v("代表需要降低policy的等级后在执行")]),s._v(" "),e("div",{staticClass:"language-csharp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" validate_password"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("policy"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("开启MySQL远程连接")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("use mysql"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改root账户权限")]),s._v("\nupdate user "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" where user "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#刷新权限")]),s._v("\nflush privileges"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("创建新用户")]),s._v(" "),e("div",{staticClass:"language-n1ql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-n1ql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你的用户名'")]),s._v("@"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" identified "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" mysql_native_password "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你的密码'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("刷新权限")]),s._v(" "),e("div",{staticClass:"language-pgsql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("grant all on *.* to '你的用户名'@'%';\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_4、centos7-6-安装-docker-yum安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、centos7-6-安装-docker-yum安装"}},[s._v("#")]),s._v(" 4、CentOS7.6 安装 Docker（yum安装）")]),s._v(" "),e("blockquote",[e("p",[s._v("基于 CentOS 7 安装")])]),s._v(" "),e("ol",[e("li",[e("p",[s._v("官网安装参考手册：https://docs.docker.com/install/linux/docker-ce/centos/")])]),s._v(" "),e("li",[e("p",[s._v("确定你是CentOS7及以上版本")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@192 Desktop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /etc/redhat-release")]),s._v("\nCentOS Linux release "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.2")]),s._v(".1511 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Core"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看系统版本信息")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("yum安装gcc相关（需要确保 虚拟机可以上外网 ）")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc\nyum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc-c++\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("卸载旧版本")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum -y remove docker docker-common docker-selinux docker-engine\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 官网版本")]),s._v("\nyum remove docker "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n          docker-client "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n          docker-client-latest "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n          docker-common "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n          docker-latest "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n          docker-latest-logrotate "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n          docker-logrotate "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n          docker-engine\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("安装需要的软件包")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils device-mapper-persistent-data lvm2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("设置stable镜像仓库")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 错误")]),s._v("\nyum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 报错")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Errno "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#35 - TCP connection reset by peer")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Errno "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#35 - Timeout")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 正确推荐使用国内的")]),s._v("\nyum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("更新yum软件包索引")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum makecache fast\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("安装Docker CE")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce docker-ce-cli containerd.io\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("启动docker")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("systemctl start docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("测试")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker version\n\ndocker run hello-world\n\ndocker images\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);
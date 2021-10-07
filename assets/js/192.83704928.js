(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{624:function(s,a,t){"use strict";t.r(a);var e=t(16),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"centos7-6-安装-mysql-rpm安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos7-6-安装-mysql-rpm安装"}},[s._v("#")]),s._v(" CentOS7.6 安装 MySQL（rpm安装）")]),s._v(" "),t("h3",{attrs:{id:"卸载历史版本mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载历史版本mysql"}},[s._v("#")]),s._v(" 卸载历史版本MySQL")]),s._v(" "),t("p",[s._v("查看是否拥有历史版本")]),s._v(" "),t("p",[s._v("非首次安装需卸载历史版本MySQL，命令查看是否有安装MySQL历史版本组件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看MySQL服务状态")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld status\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("暂停MySQL服务")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld stop\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("卸载MySQL服务")]),s._v(" "),t("p",[s._v("需要把每个组件全部移除，注意可能会有组件的依赖前后顺序。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("rpm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ev "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("需要移除组件的名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n或者\nrpm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("nodeps "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("需要移除组件的名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//此命令为强制卸载")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"安装mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql"}},[s._v("#")]),s._v(" 安装MySQL")]),s._v(" "),t("p",[s._v("使用rpm来安装MySQL")]),s._v(" "),t("p",[s._v("因为CentOS 7默认安装的数据库是Mariadb,所以使用YUM命令是无法安装MySQL的，只会更新Mariadb。使用rpm来进行安装。可以在"),t("a",{attrs:{href:"https://links.jianshu.com/go?to=http%3A%2F%2Frepo.mysql.com%2F",target:"_blank",rel:"noopener noreferrer"}},[s._v("mysql的repo源仓库"),t("OutboundLink")],1),s._v("右键复制指定版本的数据库。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("wget http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//repo.mysql.com/mysql80-community-release-el7-1.noarch.rpm")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装mysql80-community-release-el7-1.noarch.rpm包")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v("sudo rpm -ivh mysql80-community-release-el7-1.noarch.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("使用yum安装mysql服务")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("检查是否已经设置为开机启动MySQL服务")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl list-unit-files"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysqld\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("则表示已经设置为开机启动，如果没有设置为开机启动则执行")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" mysqld.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看MySQL是否启动未启动则执行启动服务命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("查看是否启动MySQL服务\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n\n启动服务\nsystemctl start mysqld.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("初始化MySQL")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqld --initialize\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看MySQL初始默认密码")]),s._v(" "),t("div",{staticClass:"language-dart line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dart"}},[t("code",[s._v("grep "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'temporary password'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("log"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysqld"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("复制 root@localhost: 后面的密码。登录mysql，并粘贴默认密码\n因为MySQL8.0的更改，导致必须要重置密码")]),s._v(" "),t("div",{staticClass:"language-csharp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[s._v("ALTER USER 'root"),t("span",{pre:!0,attrs:{class:"token string character"}},[s._v("'@'")]),s._v("localhost' IDENTIFIED BY 'Assam1314520"),t("span",{pre:!0,attrs:{class:"token range operator"}},[s._v("..")]),s._v("'\\g"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("设置root账号密码\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果设置密码时候出现提示")]),s._v(" "),t("blockquote",[t("p",[s._v("ERROR 1819 (HY000): Your password does not satisfy the current policy requirements")])]),s._v(" "),t("p",[s._v("代表需要降低policy的等级后在执行")]),s._v(" "),t("div",{staticClass:"language-csharp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" validate_password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("policy"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("开启MySQL远程连接")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("use mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改root账户权限")]),s._v("\nupdate user "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" where user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#刷新权限")]),s._v("\nflush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("创建新用户")]),s._v(" "),t("div",{staticClass:"language-n1ql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-n1ql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你的用户名'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" identified "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" mysql_native_password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你的密码'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("刷新权限")]),s._v(" "),t("div",{staticClass:"language-pgsql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("grant all on *.* to '你的用户名'@'%';\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
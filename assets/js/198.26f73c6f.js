(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{628:function(s,l,e){"use strict";e.r(l);var t=e(16),o=Object(t.a)({},(function(){var s=this,l=s.$createElement,e=s._self._c||l;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"生命周期和作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期和作用域"}},[s._v("#")]),s._v(" 生命周期和作用域")]),s._v(" "),e("p",[s._v("作用域和生命周期类别是至关重要的，因为错误的使用会导致非常严重的并发问题。")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("SqlSessionFactoryBuilder")]),s._v(" "),e("ul",[e("li",[s._v("局部变量")]),s._v(" "),e("li",[s._v("这个类可以被实例化、使用和丢弃，它一旦创建了 SqlSessionFactory，就不再需要它了。")])])]),s._v(" "),e("li",[e("code",[s._v("SqlSessionFactory")]),s._v(" "),e("ul",[e("li",[s._v("SqlSessionFactory 一旦被创建就应该在应用的运行期间一直存在，没有任何理由丢弃它或重新创建另一个实例。")]),s._v(" "),e("li",[s._v("使用 SqlSessionFactory 的最佳实践是在应用运行期间不要重复创建多次，多次重建 SqlSessionFactory 被视为一种代码“坏习惯”。")]),s._v(" "),e("li",[s._v("因此 SqlSessionFactory 的最佳作用域是应用作用域。 有很多方法可以做到，最简单的就是使用单例模式或者静态单例模式。")]),s._v(" "),e("li",[s._v("可以想象为：数据库连接池")])])]),s._v(" "),e("li",[e("code",[s._v("SqlSession")]),s._v(" "),e("ul",[e("li",[s._v("SqlSession 的实例不是线程安全的，因此是不能被共享的，所以它的最佳的作用域是请求或方法作用域。")]),s._v(" "),e("li",[e("strong",[s._v("用完之后需要赶紧关闭，否则资源将被占用！")])]),s._v(" "),e("li",[s._v("绝对不能将 SqlSession 实例的引用放在一个类的静态域，甚至一个类的实例变量也不行。 也绝不能将 SqlSession 实例的引用放在任何类型的托管作用域中，比如 Servlet 框架中的 HttpSession。 如果你现在正在使用一种 Web 框架，考虑将 SqlSession 放在一个和 HTTP 请求相似的作用域中。 换句话说，每次收到 HTTP 请求，就可以打开一个 SqlSession，返回一个响应后，就关闭它。 这个关闭操作很重要，为了确保每次都能执行关闭操作，你应该把这个关闭操作放到 finally 块中。 下面的示例就是一个确保 SqlSession 关闭的标准模式：")])])])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://singerwimg-1300001977.cos.accelerate.myqcloud.com/2021/08/25/3caadada02790.png",alt:""}})]),s._v(" "),e("p",[s._v("这里面的每一个"),e("code",[s._v("Mapper")]),s._v("都代表一个具体的业务。")])])}),[],!1,null,null,null);l.default=o.exports}}]);
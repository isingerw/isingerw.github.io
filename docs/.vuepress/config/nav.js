// nav
module.exports = [
    {text: '首页', link: '/'},


    {
        text: '前端',
        link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
            {
                text: '前端文章',
                items: [
                    {text: 'HTML', link: '/pages/8309a5b876fc95e3/'},
                    {text: 'CSS', link: '/pages/0a83b083bdf257cb/'},
                    {text: 'JavaScript', link: '/pages/8143cc480faf9a11/'},
                ],
            },
            {
                text: '前端学习笔记',
                items: [
                    {text: '《JavaScript教程》', link: '/note/javascript/'},
                    {text: '《ES6 教程》', link: '/note/es6/'},
                    {text: '《Vue》', link: '/note/vue/'},
                    {text: '《Git》', link: '/note/git/'},
                ],
            },
        ],
    },


    {
        text: '后端',
        link: '/back/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
            // {
            //     text: '后端文章',
            //     items: [
            //         {text: 'JavaCore', link: '/pages/.../'},
            //         {text: 'JavaWeb', link: '/pages/.../'},
            //         {text: 'MySQL', link: '/pages/.../'},
            //         {text: 'Spring', link: '/pages/.../'},
            //         {text: 'SpringMVC', link: '/pages/.../'},
            //         {text: 'MyBatis', link: '/pages/.../'},
            //         {text: 'Linux', link: '/pages/.../'},
            //     ],
            // },
            {
                text: '后端学习笔记',
                items: [
                    {text: '《JavaCore》', link: '/note/javacore/'},
                    {text: '《JavaWeb》', link: '/note/javaweb/'},
                    {text: '《MySQL》', link: '/note/mysql/'},
                    {text: '《Spring》', link: '/note/spring/'},
                    {text: '《SpringMVC》', link: '/note/springmvc/'},
                    {text: '《MyBatis》', link: '/note/mybatis/'},
                    {text: '《Linux》', link: '/note/linux/'},
                ],
            },
        ],
    },


    {
        text: '技术',
        link: '/technology/',
        items: [
            {text: '技术文档', link: '/pages/9a7ee40fc232253e/'},
            {text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/'},
            {text: '博客搭建', link: '/pages/41f87d890d0a02af/'},
            {text: '软路由', link: '/pages/a8c517/'},
        ],
    },


    {
        text: '教程',
        link: '/course/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
            {
                text: '安装教程',
                items: [
                    {text: 'JDK', link: '/pages/3143be/'},
                    {text: 'MySQL', link: '/pages/381c29/'},
                    {text: 'Node.js', link: '/pages/f4524e/'},
                ],
            },
            {
                text: '使用教程',
                items: [
                    {text: '更新中', link: ''},
                ],
            },
            {
                text: '其他教程',
                items: [
                    {text: '更新中', link: ''},
                ],
            },
        ],
    },

    {
        text: '更多',
        link: '/more/',
        items: [
            {text: '终身学习', link: '/pages/f2a556/'},
            {text: '面试人生', link: '/pages/aea6571b7a8bae86/'},
            {text: '心情杂货', link: '/pages/2d615df9a36a98ed/'},
            {text: '生活随笔', link: '/pages/baaa02/'},
        ],
    },

    {
        text: '索引',
        link: '/archives/',
        items: [
            {text: '分类', link: '/categories/'},
            {text: '标签', link: '/tags/'},
            {text: '归档', link: '/archives/'},
        ],
    },

]

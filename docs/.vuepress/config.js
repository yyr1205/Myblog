module.exports = {
    title: '有一人的生活',// 设置网站标题
    description: '想记录生活',
    base: '/',// 设置站点根路径
    dest: './ROOT',  // 设置输出目录
    head: [],
    plugins: [],
    themeConfig: {
        loge:'/image/loge.png',
        // 添加导航栏
        nav: [
            { text: '主页', link: '/' },
            { text: '关于我', link: '/about/' },
        ],
        sidebar: [],
        sidebarDepth: 2,
        lastUpdated: 'Last Updated'
    }
}
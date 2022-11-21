// let ejs = require('ejs'),
//     people = ['geddy', 'neil', 'alex'],
//     html = ejs.render('<%= people.join(", "); %>', {people: people});
//     console.log(html)

const {renderEjsTemplates} = require('./utils/renderFile')

const htmlStr = async () => {
    const res = await renderEjsTemplates({
        pageName: 'index',
        blockid: 'b20210910', // 区块唯一标识id
        rules: [       
            {
                name: 'NavBar', // 区块名称
                description: '头部导航条',  // 组件描述
                homepage: 'https://unpkg.com/@ouyangdan/linkkap-admin@0.0.6/build/index.html',  // 组件预览地址
                source: { // 组件url地址 
                    url: '',
                    type: "npm",
                    npm: "@ouyangdan/linkkap-admin",
                    version: '0.0.6',  // 组件版本
                    author: 'ouyangdan',  // 组件开发者
                }, 
                sceenshot: 'https://unpkg.com/@ouyangdan/linkkap-admin@0.0.6/screenshot.png', // 截图图片地址
                props: { // 组件属性,可为字符串/对象，字符串即静态文本，对象即动态属性(:value)
                    class: '', // 自定义类
                    style: {key: 'customStyle'}, // 自定义样式
                    customProps: {key: 'username'},
                    "v-for": "(item, index) in list",
                    key: {key: 'index'}
                },

                events: [{
                    eventName:'change',
                    methodName: 'changeWorld'
                }],
                children: [ // 区块内容，可为其他区块，避免死循环
                ],
            },
            {
                name: 'NavBar', // 区块名称
                description: '头部导航条',  // 组件描述
                homepage: 'https://unpkg.com/@ouyangdan/linkkap-admin@0.0.6/build/index.html',  // 组件预览地址
                source: { // 组件url地址 
                    url: '',
                    type: "npm",
                    npm: "@ouyangdan/linkkap-admin",
                    version: '0.0.6',  // 组件版本
                    author: 'ouyangdan',  // 组件开发者
                }, 
                sceenshot: 'https://unpkg.com/@ouyangdan/linkkap-admin@0.0.6/screenshot.png', // 截图图片地址
                props: { // 组件属性,可为字符串/对象，字符串即静态文本，对象即动态属性(:value)
                    class: '', // 自定义类
                    style: {key: 'customStyle'}, // 自定义样式
                    customProps: {key: 'username'},
                    "v-for": "(item, index) in list",
                    key: {key: 'index'}
                },

                events: [{
                    eventName:'change',
                    methodName: 'changeWorld'
                }],
                children: [ // 区块内容，可为其他区块，避免死循环
                ],
            }
        ],
        imports: [ // 可选
          'import { transformDate } from "./utils/index"',
        ],
        components: [ // 可选
            'NavBar',
            'Hello',
        ],
        model: { // 可选，vuex数据源
          data: {},
          computed: {},
          watch: {}
        },
        actions: { // 可选
           'changeWorld': {
              params: ['event'],
              content: 'alert(event)'
           },
           'changeWorld2': {
                params: ['event'],
                content: 'alert(event)'
            },
        },
        style: { // 可选
          lang: 'scss',
          scoped: true,
          src: './assets/index.scss',
          content: '' 
        },
        dependencies: { // 可选
          'sass': '1.26.5',
          'sass-loader': '8.0.2'
        }
    }, '../templates')
    console.log('res', res)

    // const file = await renderEjsTemplates({}, '../templates')
    return res;
}
console.log(htmlStr())
## 项目中使用的一些node模块

### transliteration

node.js 音译模块

https://www.npmjs.com/package/transliteration

``` js
const transliteration = require('transliteration');

transliteration.transliterate('你好, world'); //Ni Hao , world
transliteration.slugify("你好， world"); //ni-hao-world
```

### markdown-it-anchor

为markdown添加锚链接

https://www.npmjs.com/package/markdown-it-anchor

``` js
// Globals from wzrd.in (Browserify as a service).
const md = markdownIt()

md.use(markdownItAnchor, {
  level: 2, //h2
  // slugify: string => string,  //自定义函数
  permalink: false,
  // renderPermalink: (slug, opts, state, permalink) => {},
  permalinkClass: 'header-anchor',
  permalinkSymbol: '¶',
  permalinkBefore: false
})

const src = `# First header
Lorem ipsum.
## Next section!
This is totaly awesome.
`

pre.textContent = html.prettyPrint(md.render(src))

```

### markdown-it-container

为markdown-it markdown解析器创建块级自定义容器

https://www.npmjs.com/package/markdown-it-container

``` html
::: warning
*here be dragons*
:::

<div class="warning">
<em>here be dragons</em>
</div>
```

### vue-clipboard2

vue复制到剪贴板组件

https://www.npmjs.com/package/vue-clipboard2


``` js
//import
import VueClipboard from "vue-clipboard2";
Vue.use(VueClipboard);
//use
<button 
  type="button"
  v-clipboard:copy="message"
  v-clipboard:success="onCopy"
  v-clipboard:error="onError"
>Copy!</button>
```


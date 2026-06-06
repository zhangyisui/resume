export const fullMarkdown = `张皓
----

前端工程师，熟悉各类AI工具，上手新技术速度快，期待新的工作机会.

技能
----

* 前端开发
* Node.js 开发

学习经历
----

* 大连东软信息学院
    * 计算机科学与技术

链接
----

* [GitHub](https://github.com/zhangyisui)
* [我的博客](https://blog.zhangyisui.top)

> 期待你的联系：[hechugetqiufrost@outlook.com](mailto:hechugetqiufrost@outlook.com)

`

const sharedIntro = `/*
* 大家好，我是张皓
* 已经到了找工作的时间了，大家估计都在写简历吧
* 我也来写份简历！
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，换个颜色 */
html {
  color: rgb(222,222,222);
  background: rgb(0,43,54);
}
`

const sharedTokenHighlight = `
/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }
`

const sharedPerspective = `
/* 再加点 3D 效果 */
html{
  perspective: 1000px;
}
`

const markdownCommentStyle = `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 的，最好变成对 HR 更友好的格式
 * 用开源工具转成 HTML 就行了
 */
`

const resumeEditorAnimatedStyle = `
/* 再加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`

const desktopLayoutStyle = `
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
${sharedTokenHighlight}
${sharedPerspective}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* 接下来给自己准备一个编辑器 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，我开始写简历了 */


`

const mobileLayoutStyle = `
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  overflow: auto;
  width: 90vw;
  margin: 2.5vh 5vw;
  height: 90vh;
}
/* 太高了 */
.styleEditor {
  height: 45vh;
}
${sharedTokenHighlight}
${sharedPerspective}
.styleEditor {
  position: fixed; left: 0; top: 0;
  transform: rotateX(-10deg) translateZ(-50px) ;
}

/* 接下来给自己准备一个编辑器 */
.resumeEditor{
  position: fixed;
  top: 50%; left: 0;
  padding: .5em;  margin: 2.5vh;
  width: 95vw; height: 45vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，我开始写简历了 */


`

const buildFullStyle = (layoutStyle) => [
  sharedIntro + layoutStyle,
  markdownCommentStyle,
  resumeEditorAnimatedStyle,
]

export const desktopFullStyle = buildFullStyle(desktopLayoutStyle)
export const mobileFullStyle = buildFullStyle(mobileLayoutStyle)

# 我的简历

灵感来自 [strml.net](http://strml.net/)，重构后使用 **Vue 3 + Vite** 实现。

## 使用方法

```bash
npm install
npm run dev
```

浏览器打开终端里显示的本地地址即可预览。

## 自定义简历

编辑 `src/data/resumeContent.js`：

- `fullMarkdown`：简历正文（Markdown，桌面/移动共用）
- `desktopFullStyle` / `mobileFullStyle`：动画里逐字打出的 CSS 片段（数组按阶段播放）

## 部署（GitHub Pages 等）

```bash
npm run build
```

将 `dist` 目录内容上传即可。`vite.config.js` 中已设置 `base: './'`，适合子路径部署。

## 技术栈

- Vue 3（Composition API + `<script setup>`）
- Vite 6
- [marked](https://marked.js.org/) — Markdown 转 HTML
- [Prism](https://prismjs.com/) — CSS 语法高亮

---

## 注：改 `resumeContent.js` 会影响具体的页面布局

动画把 `desktopFullStyle` / `mobileFullStyle` 里的字符串写进 `currentStyle`，左侧 `StyleEditor` 会把它变成生效的样式

---

在线预览：<https://resume.zhangyisui.top>
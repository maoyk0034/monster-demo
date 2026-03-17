# monster-demo
该项目是一个基于原生 HTML + CSS + JavaScript + jQuery 的静态网页复刻练习，使用 Bootstrap 5 完成整体布局与响应式适配，支持 PC、平板、手机三端自适应。页面结构按模块拆分为头部、导航、轮播、主体内容、底部等组件，统一由 `index.html` 作为入口，通过 jQuery 的 `load()` 动态加载 `src/components` 下的各个片段，便于维护与复用。导航栏实现了 Bootstrap 移动端折叠效果，并扩展支持三级菜单；轮播图支持上一张/下一张切换。样式集中在 `src/assets/css/style.css`，交互逻辑集中在 `src/assets/js/script.js`....整体强调美观还原与可维护的前端工程化结构。

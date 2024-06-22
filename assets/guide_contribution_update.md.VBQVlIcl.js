import{_ as l,h as i,g as a,G as e}from"./chunks/framework.DvBEbZPB.js";const b=JSON.parse('{"title":"贡献指南 | 关于更新","description":"欢迎BlazeB2各种形式的贡献，包括但不限于：美化界面、增加功能、改进代码、 修复 Bug 等","frontmatter":{"lang":"zh-CN","title":"贡献指南 | 关于更新","description":"欢迎BlazeB2各种形式的贡献，包括但不限于：美化界面、增加功能、改进代码、 修复 Bug 等"},"headers":[],"relativePath":"guide/contribution/update.md","filePath":"guide/contribution/update.md","lastUpdated":1719061201000}'),t={name:"guide/contribution/update.md"},r=e('<h1 id="关于更新" tabindex="-1">关于更新 <a class="header-anchor" href="#关于更新" aria-label="Permalink to &quot;关于更新&quot;">​</a></h1><h2 id="_2022-08-v1-6" tabindex="-1">2022-08（v1.6） <a class="header-anchor" href="#_2022-08-v1-6" aria-label="Permalink to &quot;2022-08（v1.6）&quot;">​</a></h2><h3 id="_2022-08-04-09-24-04" tabindex="-1">2022-08-04 09:24:04 <a class="header-anchor" href="#_2022-08-04-09-24-04" aria-label="Permalink to &quot;2022-08-04 09:24:04&quot;">​</a></h3><ul><li>🦄refactor: <ul><li>首页去除左侧临时管理界面</li><li>去除顶部nav栏；</li><li>去除配置界面 加到顶部状态栏</li></ul></li><li>🎨style: <ul><li>修改顶部nav栏；加入昼夜模式；</li><li>管理界面去除时间节点；</li><li>配置界面去除主题设置；</li></ul></li><li>✨feat: <ul><li>加入双击预览图片；</li><li>支持批量图片下载，使用jszip 批量压缩；</li><li>右键功能增加（复制，打开，下载，删除，分享等）</li><li>管理界面快捷键提示（待加入）</li></ul></li></ul><h2 id="_2022-07-v1-5" tabindex="-1">2022-07（v1.5） <a class="header-anchor" href="#_2022-07-v1-5" aria-label="Permalink to &quot;2022-07（v1.5）&quot;">​</a></h2><h3 id="_2022-07-28-09-24-04" tabindex="-1">2022-07-28 09:24:04 <a class="header-anchor" href="#_2022-07-28-09-24-04" aria-label="Permalink to &quot;2022-07-28 09:24:04&quot;">​</a></h3><ul><li>🦄refactor: <ul><li>重构代码，使用vite代替webpack</li></ul></li><li>✨feat: <ul><li>增加右键功能</li><li>增加快捷键选中，支持通用选择模式ctrl、shift 点击选择 ctrl+a 全选</li></ul></li><li>🎨style: <ul><li>重构图床管理界面去除鼠标触动效果</li><li>页面标题随路由动态变化</li><li>图床管理增加table展示效果</li></ul></li><li>👨‍🔧fix: <ul><li>修复加载页面时 pinia加载问题（router）</li></ul></li></ul><h3 id="_2022-07-26-20-36-13" tabindex="-1">2022-07-26 20:36:13 <a class="header-anchor" href="#_2022-07-26-20-36-13" aria-label="Permalink to &quot;2022-07-26 20:36:13&quot;">​</a></h3><ul><li>👨‍🔧fix: <ul><li>图床管理加入图片重复判断，如果该文件夹下没有多余文件 不在重复的显示；有阈值提示</li><li>修复图床管理界面删除按钮触发选择操作</li><li>修复vercel部署问题</li><li>修复更改登录配置host_url后，页面管理地址不更新问题</li><li>去除默认图片地址s3API和downloadApI</li></ul></li><li>✨feat: <ul><li>更改图床加载顺序默认为降序排列</li><li>新增上传图片后的默认复制的链接模式</li><li>批量复制链接 支持多种模式复制模式(可自定义)</li></ul></li></ul><h3 id="_2022-07-16-11-36-13" tabindex="-1">2022-07-16 11:36:13 <a class="header-anchor" href="#_2022-07-16-11-36-13" aria-label="Permalink to &quot;2022-07-16 11:36:13&quot;">​</a></h3><ul><li>👨‍🔧fix: <ul><li>修复上传页面，取消水印界面，图片列表消失问题</li><li>修复水印上传时报错问题；</li></ul></li><li>✨feat: <ul><li>加入文件验证，目前仅支持几种图片格式</li><li>加入占位图，图片未加载</li><li>支持批量上传，批量删除，批量复制链接</li><li>加入临时上传管理，使用sessionStorage，关闭页面重新打开后消失</li></ul></li><li>🎨style: <ul><li>部分样式重构；</li></ul></li></ul><h2 id="_2022-06-v1-4" tabindex="-1">2022-06（v1.4） <a class="header-anchor" href="#_2022-06-v1-4" aria-label="Permalink to &quot;2022-06（v1.4）&quot;">​</a></h2><h3 id="_2022-06-28-11-32-49" tabindex="-1">2022-06-28 11:32:49 <a class="header-anchor" href="#_2022-06-28-11-32-49" aria-label="Permalink to &quot;2022-06-28 11:32:49&quot;">​</a></h3><ul><li>👨‍🔧fix: <ul><li>修复管理图片界面 加载失败问题;</li><li>修复管理界面 图片复制链接问题;</li></ul></li><li>🎨style: <ul><li>增加管理界面占位图 加载动画等等;</li><li>修改移动端图片占比样式;</li></ul></li><li>✨feat: <ul><li>管理图片界面加入时间排序 顺序or倒序(默认升序);</li><li>图片上方加入上传日期提示;</li><li>支持自定义复制链接内容;</li></ul></li></ul>',14),u=[r];function o(n,h,d,s,c,_){return a(),i("div",null,u)}const p=l(t,[["render",o]]);export{b as __pageData,p as default};

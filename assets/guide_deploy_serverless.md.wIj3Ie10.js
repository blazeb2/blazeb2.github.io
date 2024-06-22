import{_ as s,h as a,g as e,G as i,R as t}from"./chunks/framework.DvBEbZPB.js";const y=JSON.parse('{"title":"项目部署 | 腾讯云serverless部署","description":"使用serverless一键部署balzeb2图床项目","frontmatter":{"lang":"zh-cn","title":"项目部署 | 腾讯云serverless部署","description":"使用serverless一键部署balzeb2图床项目"},"headers":[],"relativePath":"guide/deploy/serverless.md","filePath":"guide/deploy/serverless.md","lastUpdated":1719061201000}'),l={name:"guide/deploy/serverless.md"},n=i(`<h1 id="腾讯云部署" tabindex="-1">腾讯云部署 <a class="header-anchor" href="#腾讯云部署" aria-label="Permalink to &quot;腾讯云部署&quot;">​</a></h1><h2 id="项目文件结构" tabindex="-1">项目文件结构 <a class="header-anchor" href="#项目文件结构" aria-label="Permalink to &quot;项目文件结构&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└─static  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 存放静态文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ├─css</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ├─fonts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ├─img</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  └─icons</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    └─js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└─index.py  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 项目启动文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└─Procfile  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Heroku启动文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└─requirements.txt </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//项目依赖库</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└─scf_bootstrap  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 腾讯云部署启动文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└─docker</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">compose.yml  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Docker启动文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└─Dockerfile  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// docker相关配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└─gun.conf  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 保障程序运行</span></span></code></pre></div><p><a href="https://console.cloud.tencent.com/scf/list-create?rid=1&amp;ns=default&amp;createType=empty" target="_blank" rel="noreferrer"><img src="`+t+`" alt="" data-fancybox="gallery"></a></p><h2 id="step-1-创建web函数" tabindex="-1">Step. 1: 创建web函数 <a class="header-anchor" href="#step-1-创建web函数" aria-label="Permalink to &quot;Step. 1: 创建web函数&quot;">​</a></h2><p><img src="https://cloud.ryanuo.cc/hexo/4/bfdb068c-a2c1-472c-990a-6f4420ee7cf7.png" alt="" data-fancybox="gallery"></p><h2 id="step-2-将原有的文件删除-新建一个空的src文件" tabindex="-1">Step. 2: 将原有的文件删除，新建一个空的src文件 <a class="header-anchor" href="#step-2-将原有的文件删除-新建一个空的src文件" aria-label="Permalink to &quot;Step. 2: 将原有的文件删除，新建一个空的src文件&quot;">​</a></h2><p><img src="https://cloud.ryanuo.cc/hexo/4/5a0fb26f-b137-4dda-a4f0-704cc23ad279.png" alt="" data-fancybox="gallery"></p><h2 id="step-3-然后将api文件上传到src文件中" tabindex="-1">Step. 3: 然后将<a href="https://github.com/ryanuo/blazeB2/tree/master/deploys/vercel-api" target="_blank" rel="noreferrer">api</a>文件上传到src文件中 <a class="header-anchor" href="#step-3-然后将api文件上传到src文件中" aria-label="Permalink to &quot;Step. 3: 然后将[api](https://github.com/ryanuo/blazeB2/tree/master/deploys/vercel-api)文件上传到src文件中&quot;">​</a></h2><p><img src="https://cloud.ryanuo.cc/hexo/4/bf923231-d1cd-4312-ada0-fa786c775b76.png" alt="" data-fancybox="gallery"></p><h2 id="step-4-点击终端安装依赖" tabindex="-1">Step. 4: 点击终端安装依赖 <a class="header-anchor" href="#step-4-点击终端安装依赖" aria-label="Permalink to &quot;Step. 4: 点击终端安装依赖&quot;">​</a></h2><ul><li>必须执行 修改文件权限</li></ul><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cd src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pip3 install Flask requests </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t .</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">chmod </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">755</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> scf_bootstrap</span></span></code></pre></div><ul><li>注意： 启动文件可能存在权限不足问题</li></ul><p><img src="https://cloud.ryanuo.cc/hexo/4/23b26647-97b8-4e64-aa05-2bee84666277.png" alt="" data-fancybox="gallery"><img src="https://cloud.ryanuo.cc/hexo/4/d89e5329-bd8b-4100-956b-1cf1b38965ad.png" alt="" data-fancybox="gallery"></p><h2 id="step-5-点击依赖完成部署-下滑找到部署地址访问" tabindex="-1">Step. 5: 点击依赖完成部署，下滑找到部署地址访问 <a class="header-anchor" href="#step-5-点击依赖完成部署-下滑找到部署地址访问" aria-label="Permalink to &quot;Step. 5: 点击依赖完成部署，下滑找到部署地址访问&quot;">​</a></h2><p><img src="https://cloud.ryanuo.cc/hexo/4/55fc7bf3-c8fe-45af-ace3-da9e7d582452.png" alt="" data-fancybox="gallery"></p>`,17),p=[n];function r(h,c,d,o,k,E){return e(),a("div",null,p)}const b=s(l,[["render",r]]);export{y as __pageData,b as default};

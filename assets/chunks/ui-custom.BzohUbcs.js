import{e as r,a as i,r as d,o as l,f as u,g as f,h as m}from"./framework.DvBEbZPB.js";import{u as p}from"./theme.CWtjPg9S.js";const A=r({__name:"VPCarbonAds",setup(_){const{theme:c}=i(),a=c.value.carbonAds,{isAsideEnabled:n}=p(),s=d();let t=!1;function o(){if(!t){t=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${a.code}&placement=${a.placement}`,e.async=!0,s.value.appendChild(e)}}return a&&l(()=>{n.value?o():u(n,e=>e&&o())}),(e,b)=>(f(),m("div",{class:"VPCarbonAds",ref_key:"container",ref:s},null,512))}});export{A as default};

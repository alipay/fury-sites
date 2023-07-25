"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[458],{61464:function(k,a,t){t.r(a),t.d(a,{default:function(){return f}});var u=t(5574),A=t.n(u),e=t(62435),i=t(85956),h=t(74865),c=t.n(h),d=t(64236),o=t(12402),g=t(90482),m=t(86074),p={};function f(){var z=(0,i.pC)(),y=(0,e.useState)(!0),r=A()(y,2),v=r[0],n=r[1],s=(0,e.useRef)(i.m8.location.pathname);return(0,e.useEffect)(function(){return i.m8.listen(function(l){l.location.pathname!==s.current&&(s.current=l.location.pathname,n(!0),c().start(),document.documentElement.scrollTo(0,0))})},[]),(0,m.jsx)(d.D.Provider,{value:{pkg:{name:"home",description:"A static site for fury",version:"0.0.1",license:"MIT",repository:"git@github.com:fury-project/fury-sites.git",authors:[]},historyType:"browser",entryExports:p,demos:o.DE,components:o.wx,locales:g.k,loading:v,setLoading:n,hostname:void 0,themeConfig:{logo:{link:"https://mdn.alipayobjects.com/huamei_s7kka1/afts/img/A*V_oxQYSTdLQAAAAAAAAAAAAADpJ-AQ/original"},title:"",footer:'Copyright \xA9 2023 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',prefersColor:{default:"light",switch:!0},nprogress:!0,description:"Blazing Fast Binary Serialization",defaultLanguage:"en",siteUrl:{en:"https://www.furyio.org",zh:"https://www.furyio.org/zh"},showSearch:!0,showGithubCorner:!0,showGithubStars:!0,showLanguageSwitcher:!0,showChartResize:!0,showAPIDoc:!0,githubUrl:"https://github.com/alipay/fury",showSpecTab:!0,es5:!1,navs:[{slug:"docs/start/install",title:{zh:"\u5F00\u59CB",en:"Start"},order:2},{slug:"docs/introduction/introduction",title:{zh:"\u7B80\u4ECB",en:"Introduction"},order:3},{slug:"docs/guide",title:{zh:"Guide",en:"Guide"},order:4},{slug:"docs/blog",title:{zh:"\u535A\u5BA2",en:"Blog"},order:5}],navsCn:[{slug:"docs/start/install",title:{zh:"\u5F00\u59CB",en:"Start"},order:2},{slug:"docs/introduction/introduction",title:{zh:"\u7B80\u4ECB",en:"Introduction"},order:3}],docs:[{slug:"start/",title:{zh:"",en:""},order:1},{slug:"introduction/",title:{zh:"",en:""},order:1},{slug:"guide/",title:{zh:"",en:""},order:1},{slug:"blog/",title:{zh:"",en:""},order:1}],detail:{title:{zh:"Fury",en:"Fury"},description:{zh:"Fury\u662F\u4E00\u4E2A\u57FA\u4E8EJIT\u52A8\u6001\u7F16\u8BD1\u548C\u96F6\u62F7\u8D1D\u7684\u9AD8\u6027\u80FD\u591A\u8BED\u8A00\u5E8F\u5217\u5316\u6846\u67B6",en:"Fury is a blazing fast multi-language serialization framework powered by jit(just-in-time compilation) and zero-copy."},image:"https://mdn.alipayobjects.com/huamei_s7kka1/afts/img/A*7P08RJm4noUAAAAAAAAAAAAADpJ-AQ/original",buttons:[{text:{zh:"\u5F00\u59CB",en:"Start"},link:{en:"/start/install",zh:"zh/start/install"},type:"primary"},{text:{zh:"Github",en:"Github"},link:"https://github.com/alipay/fury"}]},features:[{icon:"https://mdn.alipayobjects.com/huamei_s7kka1/afts/img/A*TIgXS5t2NOAAAAAAAAAAAAAADpJ-AQ/original",title:{en:"High performance",zh:"\u9AD8\u6027\u80FD"},description:{en:"Compared to other serialization frameworks, there is a 20~170x speed up",zh:"\u548C\u5176\u4ED6\u5E8F\u5217\u53F7\u6846\u67B6\u76F8\u6BD4\uFF0C\u5B9E\u73B0\u4E8620~170\u500D\u52A0\u901F"}},{icon:"https://mdn.alipayobjects.com/huamei_s7kka1/afts/img/A*8GF5QJxZ3UoAAAAAAAAAAAAADpJ-AQ/original",title:{en:"Easy to use",zh:"\u4F7F\u7528\u4FBF\u6377"},description:{en:"No need for DSL, with your intuition, you can use Fury effectively",zh:"\u65E0\u9700DSL\uFF0C\u5F00\u7BB1\u5373\u7528"}},{icon:"https://mdn.alipayobjects.com/huamei_s7kka1/afts/img/A*MDCKSLfeVPkAAAAAAAAAAAAADpJ-AQ/original",title:{en:"Multi-languages",zh:"\u591A\u8BED\u8A00\u652F\u6301"},description:{en:"Supports mainstream programming languages, including Java/Python/C++/Golang/Javascript/Rust, and more languages will be added in the future",zh:"\u652F\u6301\u4E3B\u6D41\u7F16\u7A0B\u8BED\u8A00\uFF0C\u5305\u62ECJava/Python/C++/Golang/Javascript/Rust\u7B49\uFF0C\u66F4\u591A\u8BED\u8A00\u5C06\u4F1A\u5728\u672A\u6765\u52A0\u5165\u652F\u6301"}}],cases:[{logo:"https://mdn.alipayobjects.com/huamei_s7kka1/afts/img/A*lUa0RqV3srIAAAAAAAAAAAAADpJ-AQ/original",title:{en:"Extremely fast deserialization",zh:"\u6781\u81F4\u53CD\u5E8F\u5217\u5316\u6027\u80FD"},description:{en:"Base on efficient JIT, struct deserialization can get 170x speed up compared other serialization frameworks",zh:"\u57FA\u4E8EJIT\uFF0Cstruct\u53CD\u5E8F\u5217\u5316\u76F8\u6BD4\u5176\u4ED6\u6846\u67B6\u80FD\u63D0\u5347\u6700\u591A170\u500D"},image:"/case2.png",link:{en:"/introduction/benchmark#java-deserialization",zh:"zh/introduction/benchmark#java-deserialization"}},{logo:"https://mdn.alipayobjects.com/huamei_s7kka1/afts/img/A*lUa0RqV3srIAAAAAAAAAAAAADpJ-AQ/original",title:{en:"Extremely fast serialization",zh:"\u8D85\u5F3A\u5E8F\u5217\u5316\u6027\u80FD"},description:{en:"In deserialization scenarios, Fury can achieve a 100x speed up compared to traditional serialization frameworks. If you use Java clusters on a large scale, this will save a lot of computing resources",zh:"\u5728\u53CD\u5E8F\u5217\u5316\u573A\u666F\u4E2D\uFF0C\u76F8\u6BD4\u4F20\u7EDF\u5E8F\u5217\u53F7\u6846\u67B6Fury\u80FD\u6700\u591A\u63D0\u5347100\u500D\u901F\u5EA6\uFF0C\u5982\u679C\u4F60\u4F7F\u7528Java\u96C6\u7FA4\uFF0C\u53EF\u4EE5\u8282\u7701\u5F88\u591A\u8BA1\u7B97\u8D44\u6E90"},image:"/case1.png",link:{en:"/introduction/benchmark#java-serialization",zh:"zh/introduction/benchmark#java-serialization"}}],companies:[],editor:{size:.4,playgroundSize:.38}},_2_level_nav_available:!0},children:z})}}}]);

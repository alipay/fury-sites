"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[9376],{80201:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>n,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(85893),h=t(11151);const r={slug:"fury_0_8_0_release",title:"Fury v0.8.0 Released",authors:["chaokunyang"],tags:["fury"]},n=void 0,l={permalink:"/zh-CN/blog/fury_0_8_0_release",editUrl:"https://github.com/apache/fury-site/tree/main/i18n/zh-CN/docusaurus-plugin-content-blog/2024-10-04-fury_0_8_0_release.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2024-10-04-fury_0_8_0_release.md",title:"Fury v0.8.0 Released",description:"The Apache Fury team is pleased to announce the 0.8.0 release. This is a major release that includes 23 PR from 7 distinct contributors. See the Install Page to learn how to get the libraries for your platform.",date:"2024-10-04T00:00:00.000Z",formattedDate:"2024\u5e7410\u67084\u65e5",tags:[{label:"fury",permalink:"/zh-CN/blog/tags/fury"}],readingTime:1.905,hasTruncateMarker:!1,authors:[{name:"Shawn Yang",title:"Apache Fury PPMC Member",url:"https://github.com/chaokunyang",imageURL:"https://github.com/chaokunyang.png",key:"chaokunyang"}],frontMatter:{slug:"fury_0_8_0_release",title:"Fury v0.8.0 Released",authors:["chaokunyang"],tags:["fury"]},unlisted:!1,nextItem:{title:"Fury v0.7.1 Released",permalink:"/zh-CN/blog/fury_0_7_1_release"}},s={authorsImageUrls:[void 0]},c=[{value:"Highlights",id:"highlights",level:3},{value:"Features",id:"features",level:3},{value:"Bug Fix",id:"bug-fix",level:2},{value:"Other Improvements",id:"other-improvements",level:2},{value:"New Contributors",id:"new-contributors",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}];function u(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,h.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:["The Apache Fury team is pleased to announce the 0.8.0 release. This is a major release that includes ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/compare/v0.7.1...v0.8.0",children:"23 PR"})," from 7 distinct contributors. See the ",(0,i.jsx)(a.a,{href:"https://fury.apache.org/docs/start/install",children:"Install"})," Page to learn how to get the libraries for your platform."]}),"\n",(0,i.jsx)(a.h3,{id:"highlights",children:"Highlights"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Support graalvm 17/21/22 native image"}),"\n",(0,i.jsx)(a.li,{children:"Release fury optimized serializers for scala collection"}),"\n",(0,i.jsx)(a.li,{children:"Reduce scala collection classname serialization cost using dict encoding"}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["refactor(rust): simplify error handle by @jiacai2050 in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1823",children:"https://github.com/apache/fury/pull/1823"})]}),"\n",(0,i.jsxs)(a.li,{children:["feat(java): support graalvm 17/21/22 by @chaokunyang in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1845",children:"https://github.com/apache/fury/pull/1845"})]}),"\n",(0,i.jsxs)(a.li,{children:["perf(java): inline same element invoke in jit by @chaokunyang in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1851",children:"https://github.com/apache/fury/pull/1851"})]}),"\n",(0,i.jsxs)(a.li,{children:["perf(java): optimize read classdef perf by @chaokunyang in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1852",children:"https://github.com/apache/fury/pull/1852"})]}),"\n",(0,i.jsxs)(a.li,{children:["feat(scala): optimize scala class serialization by @chaokunyang in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1853",children:"https://github.com/apache/fury/pull/1853"})]}),"\n",(0,i.jsxs)(a.li,{children:["feat(java): implement sublist serializers by @chaokunyang in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1856",children:"https://github.com/apache/fury/pull/1856"})]}),"\n",(0,i.jsxs)(a.li,{children:["feat(java): use SubListViewSerializer only when tracking ref by @chaokunyang in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1858",children:"https://github.com/apache/fury/pull/1858"})]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["fix(java): DeserializationException#getMessage call by @yoohaemin in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1830",children:"https://github.com/apache/fury/pull/1830"})]}),"\n",(0,i.jsxs)(a.li,{children:["fix(java): fix collection view serialization by @chaokunyang in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1833",children:"https://github.com/apache/fury/pull/1833"})]}),"\n",(0,i.jsxs)(a.li,{children:["fix(java): fix long type name meta string encoding by @chaokunyang in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1837",children:"https://github.com/apache/fury/pull/1837"})]}),"\n",(0,i.jsxs)(a.li,{children:["fix(java): fix serializer factory getSerializerClass by @chaokunyang in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1836",children:"https://github.com/apache/fury/pull/1836"})]}),"\n",(0,i.jsxs)(a.li,{children:["fix(rust): replace ",(0,i.jsx)(a.code,{children:"(value << 8) | (value >> 8)"})," with ",(0,i.jsx)(a.code,{children:"value.rotate_right(8)"})," by @chaokunyang in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1841",children:"https://github.com/apache/fury/pull/1841"})]}),"\n",(0,i.jsxs)(a.li,{children:["fix(java): Fix for maximum size of java arrays by @fink-arthur in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1843",children:"https://github.com/apache/fury/pull/1843"})]}),"\n",(0,i.jsxs)(a.li,{children:["fix(java): Fix max Java array size for reader by @fink-arthur in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1844",children:"https://github.com/apache/fury/pull/1844"})]}),"\n",(0,i.jsxs)(a.li,{children:["fix(java): fix jdk proxy serialization when proxy writeReplace method by @chaokunyang in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1857",children:"https://github.com/apache/fury/pull/1857"})]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"other-improvements",children:"Other Improvements"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["chore(java): fix default value doc for metaShareEnabled/scopedMetaShareEnabled by @chaokunyang in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1826",children:"https://github.com/apache/fury/pull/1826"})]}),"\n",(0,i.jsxs)(a.li,{children:["chore(doc): fix 'how to upgrade fury' link in README by @sh-cho in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1846",children:"https://github.com/apache/fury/pull/1846"})]}),"\n",(0,i.jsxs)(a.li,{children:["build(deps): bump com.google.protobuf",":protobuf-java"," from 3.16.3 to 3.25.5 in /java/benchmark by @dependabot in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1847",children:"https://github.com/apache/fury/pull/1847"})]}),"\n",(0,i.jsxs)(a.li,{children:["chore(java): simplify generated codec name by @chaokunyang in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1850",children:"https://github.com/apache/fury/pull/1850"})]}),"\n",(0,i.jsxs)(a.li,{children:["ci: only run sync job if the repo is apache/fury by @pjfanning in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1860",children:"https://github.com/apache/fury/pull/1860"})]}),"\n",(0,i.jsxs)(a.li,{children:["feat(scala): upgrade sbt and sbt-apache-sonatype by @pjfanning in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1859",children:"https://github.com/apache/fury/pull/1859"})]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"new-contributors",children:"New Contributors"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["@yoohaemin made their first contribution in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1830",children:"https://github.com/apache/fury/pull/1830"})]}),"\n",(0,i.jsxs)(a.li,{children:["@fink-arthur made their first contribution in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1843",children:"https://github.com/apache/fury/pull/1843"})]}),"\n",(0,i.jsxs)(a.li,{children:["@sh-cho made their first contribution in ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1846",children:"https://github.com/apache/fury/pull/1846"})]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Full Changelog"}),": ",(0,i.jsx)(a.a,{href:"https://github.com/apache/fury/compare/v0.7.1...v0.8.0",children:"https://github.com/apache/fury/compare/v0.7.1...v0.8.0"})]}),"\n",(0,i.jsx)(a.h2,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,i.jsx)(a.p,{children:"Thanks @@jiacai2050 @fink-arthur @sh-cho @pjfanning @chaokunyang @yoohaemin"}),"\n",(0,i.jsx)(a.p,{children:"A big thank you to all our contributors who have worked hard on this release. Your contributions, whether through code,\ndocumentation, or issue reporting, are really appreciated."})]})}function o(e={}){const{wrapper:a}={...(0,h.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>l,a:()=>n});var i=t(67294);const h={},r=i.createContext(h);function n(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(h):e.components||h:n(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);
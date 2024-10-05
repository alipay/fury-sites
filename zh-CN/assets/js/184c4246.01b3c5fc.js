"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[6872],{10073:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>o,frontMatter:()=>h,metadata:()=>l,toc:()=>u});var i=a(85893),r=a(11151);const h={slug:"fury_0_7_1_release",title:"Fury v0.7.1 Released",authors:["chaokunyang"],tags:["fury"]},n=void 0,l={permalink:"/zh-CN/blog/fury_0_7_1_release",editUrl:"https://github.com/apache/fury-site/tree/main/i18n/zh-CN/docusaurus-plugin-content-blog/2024-09-12-fury_0_7_1_release.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2024-09-12-fury_0_7_1_release.md",title:"Fury v0.7.1 Released",description:"The Apache Fury team is pleased to announce the 0.7.1 release. This is a major release that includes 20 PR from 8 distinct contributors. See the Install Page to learn how to get the libraries for your platform.",date:"2024-09-12T00:00:00.000Z",formattedDate:"2024\u5e749\u670812\u65e5",tags:[{label:"fury",permalink:"/zh-CN/blog/tags/fury"}],readingTime:1.79,hasTruncateMarker:!1,authors:[{name:"Shawn Yang",title:"Apache Fury PPMC Member",url:"https://github.com/chaokunyang",imageURL:"https://github.com/chaokunyang.png",key:"chaokunyang"}],frontMatter:{slug:"fury_0_7_1_release",title:"Fury v0.7.1 Released",authors:["chaokunyang"],tags:["fury"]},unlisted:!1,prevItem:{title:"Fury v0.8.0 Released",permalink:"/zh-CN/blog/fury_0_8_0_release"},nextItem:{title:"Fury v0.7.0 Released",permalink:"/zh-CN/blog/fury_0_7_0_release"}},s={authorsImageUrls:[void 0]},u=[{value:"Features",id:"features",level:2},{value:"Bug Fix",id:"bug-fix",level:2},{value:"Other Improvements",id:"other-improvements",level:2},{value:"New Contributors",id:"new-contributors",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}];function c(e){const t={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The Apache Fury team is pleased to announce the 0.7.1 release. This is a major release that includes ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/compare/v0.7.0...v0.7.1",children:"20 PR"})," from 8 distinct contributors. See the ",(0,i.jsx)(t.a,{href:"https://fury.apache.org/docs/start/install",children:"Install"})," Page to learn how to get the libraries for your platform."]}),"\n",(0,i.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["feat(javascript): Added MetaString Class for Unicode Encoding/Decoding in Type.Object Code Generation by @Forchapeatl in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1774",children:"https://github.com/apache/fury/pull/1774"})]}),"\n",(0,i.jsxs)(t.li,{children:["feat(Rust): Refine Code Structure &  Prepare for Future Compatibility Features by @theweipeng in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1787",children:"https://github.com/apache/fury/pull/1787"})]}),"\n",(0,i.jsxs)(t.li,{children:["feat(java): ThreadSafeFury add getClassResolver method by @funky-eyes in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1780",children:"https://github.com/apache/fury/pull/1780"})]}),"\n",(0,i.jsxs)(t.li,{children:["feat(Rust): Implement TypeMeta part of the compatibility features by @theweipeng in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1789",children:"https://github.com/apache/fury/pull/1789"})]}),"\n",(0,i.jsxs)(t.li,{children:["feat(Rust): Support polymorphism by @theweipeng in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1795",children:"https://github.com/apache/fury/pull/1795"})]}),"\n",(0,i.jsxs)(t.li,{children:["feat(java): Support copy capabilities for some classes without no-argument constructors by @zhaommmmomo in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1794",children:"https://github.com/apache/fury/pull/1794"})]}),"\n",(0,i.jsxs)(t.li,{children:["feat(java): support jdk9+ java.util.ImmutableCollections copy by @zhaommmmomo in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1800",children:"https://github.com/apache/fury/pull/1800"})]}),"\n",(0,i.jsxs)(t.li,{children:["feat(rust): support enum serialization by @jiacai2050 in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1817",children:"https://github.com/apache/fury/pull/1817"})]}),"\n",(0,i.jsx)(t.li,{children:"refine fury website and add chinese documents by @yuluo-yx and  @LofiSu"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["ci: fix rust ci failed by @LiangliangSui in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1783",children:"https://github.com/apache/fury/pull/1783"})]}),"\n",(0,i.jsxs)(t.li,{children:["fix(java): fix classloader get npe by @chaokunyang in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1792",children:"https://github.com/apache/fury/pull/1792"})]}),"\n",(0,i.jsxs)(t.li,{children:["fix(scala): fix nested type serialization in scala object type by @chaokunyang in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1809",children:"https://github.com/apache/fury/pull/1809"})]}),"\n",(0,i.jsxs)(t.li,{children:["fix(java): Fix replace resolver serializaiton by @chaokunyang in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1812",children:"https://github.com/apache/fury/pull/1812"})]}),"\n",(0,i.jsxs)(t.li,{children:["fix(java): fix reserved keyword conflict by @chaokunyang in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1819",children:"https://github.com/apache/fury/pull/1819"})]}),"\n",(0,i.jsxs)(t.li,{children:["fix(java): fix nested map field value serialization by private map serializer by @chaokunyang in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1820",children:"https://github.com/apache/fury/pull/1820"})]}),"\n",(0,i.jsxs)(t.li,{children:["fix(rust): use iter to avoid reallocate by @jiacai2050 in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1821",children:"https://github.com/apache/fury/pull/1821"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"other-improvements",children:"Other Improvements"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["chore(java): Disallow writing meta classdef when obj is null by @LiangliangSui in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1686",children:"https://github.com/apache/fury/pull/1686"})]}),"\n",(0,i.jsxs)(t.li,{children:["chore(infra): optimize github tmpl & update actions/checkout version to 4.1.7 by @yuluo-yx in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1807",children:"https://github.com/apache/fury/pull/1807"})]}),"\n",(0,i.jsxs)(t.li,{children:["chore(infra): remove redundant bug reporting options by @yuluo-yx in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1810",children:"https://github.com/apache/fury/pull/1810"})]}),"\n",(0,i.jsxs)(t.li,{children:["docs: add check lint ci & fix md lint by @yuluo-yx in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1811",children:"https://github.com/apache/fury/pull/1811"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"new-contributors",children:"New Contributors"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["@Forchapeatl made their first contribution in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1774",children:"https://github.com/apache/fury/pull/1774"})]}),"\n",(0,i.jsxs)(t.li,{children:["@funky-eyes made their first contribution in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1780",children:"https://github.com/apache/fury/pull/1780"})]}),"\n",(0,i.jsxs)(t.li,{children:["@yuluo-yx made their first contribution in ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1807",children:"https://github.com/apache/fury/pull/1807"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Full Changelog"}),": ",(0,i.jsx)(t.a,{href:"https://github.com/apache/fury/compare/v0.7.0...v0.7.1",children:"https://github.com/apache/fury/compare/v0.7.0...v0.7.1"})]}),"\n",(0,i.jsx)(t.h2,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,i.jsx)(t.p,{children:"Thanks @jiacai2050 @chaokunyang @theweipeng @funky-eyes @Forchapeatl @zhaommmmomo @yuluo-yx @LiangliangSui @LofiSu"}),"\n",(0,i.jsx)(t.p,{children:"A big thank you to all our contributors who have worked hard on this release. Your contributions, whether through code,\ndocumentation, or issue reporting, are really appreciated."})]})}function o(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>n});var i=a(67294);const r={},h=i.createContext(r);function n(e){const t=i.useContext(h);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),i.createElement(h.Provider,{value:t},e.children)}}}]);
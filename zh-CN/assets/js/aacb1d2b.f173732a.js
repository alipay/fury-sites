"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[7382],{313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>n,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=r(5893),i=r(1151);const l={slug:"fury_0_4_1_release",title:"Fury 0.4.1 Released",authors:["chaokunyang"],tags:["fury"]},n=void 0,s={permalink:"/zh-CN/blog/fury_0_4_1_release",source:"@site/blog/2023-12-09-fury_0_4_1_release.md",title:"Fury 0.4.1 Released",description:"This release was made before Fury joined the Apache Incubator and thus it's a non-ASF release.",date:"2023-12-09T00:00:00.000Z",formattedDate:"2023\u5e7412\u67089\u65e5",tags:[{label:"fury",permalink:"/zh-CN/blog/tags/fury"}],readingTime:1.71,hasTruncateMarker:!1,authors:[{name:"Shawn Yang",title:"Apache Fury PPMC Member",url:"https://github.com/chaokunyang",imageURL:"https://github.com/chaokunyang.png",key:"chaokunyang"}],frontMatter:{slug:"fury_0_4_1_release",title:"Fury 0.4.1 Released",authors:["chaokunyang"],tags:["fury"]},unlisted:!1,prevItem:{title:"Apache Fury: A blazing fast multi-language serialization framework powered by JIT and zero-copy",permalink:"/zh-CN/blog/fury_blazing_fast_multiple_language_serialization_framework"},nextItem:{title:"Fury 0.4.0 Released",permalink:"/zh-CN/blog/fury_0_4_0_release"}},h={authorsImageUrls:[void 0]},u=[{value:"Highlight",id:"highlight",level:2},{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"New Contributors",id:"new-contributors",level:2}];function o(e){const t={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"This release was made before Fury joined the Apache Incubator and thus it's a non-ASF release."})})}),"\n",(0,a.jsxs)(t.p,{children:["I'm pleased to announce the 0.4.1 release of the Fury: ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/releases/tag/v0.4.1",children:"https://github.com/alipay/fury/releases/tag/v0.4.1"}),". With this release, Fury support rust row format now. C++ row format has been enhanced too, now iterable types can be encoded to fury row format. Please try it out and share your feedbacks with us."]}),"\n",(0,a.jsxs)(t.p,{children:["Author: ",(0,a.jsx)(t.a,{href:"https://github.com/chaokunyang",children:"chaokunyang"})]}),"\n",(0,a.jsxs)(t.p,{children:["I'm pleased to announce the 0.4.1 release of the Fury: ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/releases/tag/v0.4.1",children:"https://github.com/alipay/fury/releases/tag/v0.4.1"}),". With this release, Fury support rust row format now. C++ row format has been enhanced too, now iterable types can be encoded to fury row format too."]}),"\n",(0,a.jsx)(t.h2,{id:"highlight",children:"Highlight"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"[Rust] Support row format"}),"\n",(0,a.jsx)(t.li,{children:"[C++] Support iterable types for RowEncoder"}),"\n",(0,a.jsx)(t.li,{children:"[JavaScript] Support partial record"}),"\n",(0,a.jsx)(t.li,{children:"[Java] Fix JIT error in corner case, now Fury can generate serializer for every class"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"whats-changed",children:"What's Changed"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["[Doc] Refine issue template by a yaml form by @chaokunyang in ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/pull/1185",children:"https://github.com/alipay/fury/pull/1185"})]}),"\n",(0,a.jsxs)(t.li,{children:["[C++] Fix ownership problem for children writers by visitor by @PragmaTwice in ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/pull/1193",children:"https://github.com/alipay/fury/pull/1193"})]}),"\n",(0,a.jsxs)(t.li,{children:["[C++] Remove useless fields and macro in logging by @PragmaTwice in ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/pull/1195",children:"https://github.com/alipay/fury/pull/1195"})]}),"\n",(0,a.jsxs)(t.li,{children:["[Doc] add docs for java FuryBuilder #1188 by @mof-dev-3 in ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/pull/1192",children:"https://github.com/alipay/fury/pull/1192"})]}),"\n",(0,a.jsxs)(t.li,{children:["[Rust] support row format by @wangweipeng2 in ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/pull/1196",children:"https://github.com/alipay/fury/pull/1196"})]}),"\n",(0,a.jsxs)(t.li,{children:["[C++] Add RowEncoder wrapper to RowEncodeTrait by @PragmaTwice in ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/pull/1200",children:"https://github.com/alipay/fury/pull/1200"})]}),"\n",(0,a.jsxs)(t.li,{children:["[Rust] Row support more types by @wangweipeng2 in ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/pull/1202",children:"https://github.com/alipay/fury/pull/1202"})]}),"\n",(0,a.jsxs)(t.li,{children:["[Rust] Support row map by @wangweipeng2 in ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/pull/1206",children:"https://github.com/alipay/fury/pull/1206"})]}),"\n",(0,a.jsxs)(t.li,{children:["[C++] update bazel version from 4.2 to 6.3.2 by @chaokunyang in ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/pull/1204",children:"https://github.com/alipay/fury/pull/1204"})]}),"\n",(0,a.jsxs)(t.li,{children:["[JavaScript] Support partial record by @wangweipeng2 in ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/pull/1208",children:"https://github.com/alipay/fury/pull/1208"})]}),"\n",(0,a.jsxs)(t.li,{children:["[Java] fix package access level class accessor jit by @chaokunyang in ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/pull/1210",children:"https://github.com/alipay/fury/pull/1210"})]}),"\n",(0,a.jsxs)(t.li,{children:["[JavaScript] Fix register a description twice will get undefined serializer by @bytemain in ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/pull/1211",children:"https://github.com/alipay/fury/pull/1211"})]}),"\n",(0,a.jsxs)(t.li,{children:["[C++] Support iterable types in RowEncodeTrait by @PragmaTwice in ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/pull/1212",children:"https://github.com/alipay/fury/pull/1212"})]}),"\n",(0,a.jsxs)(t.li,{children:["[C++] Support iterable types for RowEncoder by @PragmaTwice in ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/pull/1215",children:"https://github.com/alipay/fury/pull/1215"})]}),"\n",(0,a.jsxs)(t.li,{children:["[Python] Refine py register class method by @chaokunyang in ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/pull/1218",children:"https://github.com/alipay/fury/pull/1218"})]}),"\n",(0,a.jsxs)(t.li,{children:["[Java] Clear extRegistry.getClassCtx if generate serializer class failed in ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/pull/1221",children:"https://github.com/alipay/fury/pull/1221"})]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"new-contributors",children:"New Contributors"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["@bytemain made their first contribution in ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/pull/1211",children:"https://github.com/alipay/fury/pull/1211"})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Full Changelog"}),": ",(0,a.jsx)(t.a,{href:"https://github.com/alipay/fury/compare/v0.4.0...v0.4.1",children:"https://github.com/alipay/fury/compare/v0.4.0...v0.4.1"})]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>n});var a=r(7294);const i={},l=a.createContext(i);function n(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[188],{4603:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var a=r(5893),t=r(1151);const n={id:"benchmark",title:"Benchmark",sidebar_position:2},s=void 0,o={id:"introduction/benchmark",title:"Benchmark",description:"Different serialization frameworks are suitable for different scenarios, and benchmark results here are for reference only.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/introduction/benchmark.md",sourceDirName:"introduction",slug:"/introduction/benchmark",permalink:"/zh-CN/docs/introduction/benchmark",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/fury-site/tree/main/i18n/zh-CN/docusaurus-plugin-content-docs/introduction/benchmark.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"benchmark",title:"Benchmark",sidebar_position:2},sidebar:"introductionSidebar",previous:{title:"Introduction",permalink:"/zh-CN/docs/introduction/"},next:{title:"Features",permalink:"/zh-CN/docs/introduction/features"}},c={},l=[{value:"Java Serialization",id:"java-serialization",level:3},{value:"Java Deserialization",id:"java-deserialization",level:3},{value:"JavaScript",id:"javascript",level:3}];function d(e){const i={a:"a",h3:"h3",p:"p",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"Different serialization frameworks are suitable for different scenarios, and benchmark results here are for reference only."}),"\n",(0,a.jsx)(i.p,{children:"If you need to benchmark for your specific scenario, make sure all serialization frameworks are appropriately configured for that scenario."}),"\n",(0,a.jsx)(i.p,{children:"Dynamic serialization frameworks supports polymorphism and reference, which has more cost compared\nto static serialization frameworks, unless it uses the jit techniques as fury did.\nSince fury will generate code at runtime, please warm up before collecting benchmark statistics."}),"\n",(0,a.jsx)(i.h3,{id:"java-serialization",children:"Java Serialization"}),"\n",(0,a.jsx)("img",{width:"33%",alt:"",src:"/img/benchmarks/serialization/bench_serialize_compatible_STRUCT_to_directBuffer_tps.png"}),"\n",(0,a.jsx)("img",{width:"33%",alt:"",src:"/img/benchmarks/serialization/bench_serialize_compatible_MEDIA_CONTENT_to_array_tps.png"}),"\n",(0,a.jsx)("img",{width:"33%",alt:"",src:"/img/benchmarks/serialization/bench_serialize_MEDIA_CONTENT_to_array_tps.png"}),"\n",(0,a.jsx)("img",{width:"33%",alt:"",src:"/img/benchmarks/serialization/bench_serialize_SAMPLE_to_array_tps.png"}),"\n",(0,a.jsx)(i.h3,{id:"java-deserialization",children:"Java Deserialization"}),"\n",(0,a.jsx)("img",{width:"33%",alt:"",src:"/img/benchmarks/deserialization/bench_deserialize_compatible_STRUCT_from_directBuffer_tps.png"}),"\n",(0,a.jsx)("img",{width:"33%",alt:"",src:"/img/benchmarks/deserialization/bench_deserialize_compatible_MEDIA_CONTENT_from_array_tps.png"}),"\n",(0,a.jsx)("img",{width:"33%",alt:"",src:"/img/benchmarks/deserialization/bench_deserialize_MEDIA_CONTENT_from_array_tps.png"}),"\n",(0,a.jsx)("img",{width:"33%",alt:"",src:"/img/benchmarks/deserialization/bench_deserialize_SAMPLE_from_array_tps.png"}),"\n",(0,a.jsxs)(i.p,{children:["See ",(0,a.jsx)(i.a,{href:"https://github.com/apache/fury/tree/main/docs/benchmarks",children:"benchmarks"})," for more benchmarks about type forward/backward compatibility, off-heap support, zero-copy serialization."]}),"\n",(0,a.jsx)(i.h3,{id:"javascript",children:"JavaScript"}),"\n",(0,a.jsx)("img",{width:"33%",alt:"",src:"/img/benchmarks/javascript/complex_object.jpg"}),"\n",(0,a.jsx)(i.p,{children:"The data used for this bar graph includes a complex object that has many kinds of field types, and the size of the JSON data is 3KB."}),"\n",(0,a.jsxs)(i.p,{children:["See ",(0,a.jsx)(i.a,{href:"https://github.com/apache/fury/blob/main/javascript/benchmark/index.js",children:"benchmarks"})," for the benchmark code."]})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,i,r)=>{r.d(i,{Z:()=>o,a:()=>s});var a=r(7294);const t={},n=a.createContext(t);function s(e){const i=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(n.Provider,{value:i},e.children)}}}]);
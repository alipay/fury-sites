"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[6973],{9292:(i,a,l)=>{l.r(a),l.d(a,{assets:()=>u,contentTitle:()=>n,default:()=>c,frontMatter:()=>e,metadata:()=>h,toc:()=>s});var t=l(5893),r=l(1151);const e={slug:"fury_0_2_0_release",title:"Fury v0.2.0 released",authors:["chaokunyang"],tags:["fury"]},n=void 0,h={permalink:"/blog/fury_0_2_0_release",editUrl:"https://github.com/apache/fury-site/tree/main/i18n/eu-US/docusaurus-plugin-content-blog/2023-10-09-fury_0_2_0_release.md",source:"@site/i18n/eu-US/docusaurus-plugin-content-blog/2023-10-09-fury_0_2_0_release.md",title:"Fury v0.2.0 released",description:"This release was made before Fury joined the Apache Incubator and thus it's a non-ASF release.",date:"2023-10-09T00:00:00.000Z",formattedDate:"2023(e)ko urriaren 9(a)",tags:[{label:"fury",permalink:"/blog/tags/fury"}],readingTime:7.015,hasTruncateMarker:!0,authors:[{name:"Shawn Yang",title:"Apache Fury PPMC Member",url:"https://github.com/chaokunyang",imageURL:"https://github.com/chaokunyang.png",key:"chaokunyang"}],frontMatter:{slug:"fury_0_2_0_release",title:"Fury v0.2.0 released",authors:["chaokunyang"],tags:["fury"]},unlisted:!1,prevItem:{title:"Fury v0.2.1 released",permalink:"/blog/fury_0_2_1_release"},nextItem:{title:"Fury v0.1.2 released",permalink:"/blog/fury_0_1_2_release"}},u={authorsImageUrls:[void 0]},s=[{value:"Highlights",id:"highlights",level:2},{value:"Java",id:"java",level:3},{value:"Python",id:"python",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Golang",id:"golang",level:3},{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"New Contributors",id:"new-contributors",level:2}];function p(i){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"This release was made before Fury joined the Apache Incubator and thus it's a non-ASF release."})})}),"\n",(0,t.jsxs)(a.p,{children:["I'm so excited to announce the 0.2.0 release of the Fury. This a very exciting version of fury. With this version, we have 1X speedup, ",(0,t.jsx)(a.code,{children:"30%~50%"})," smaller serialized size. And now we are the fastest serialization framework in the ",(0,t.jsx)(a.a,{href:"https://github.com/eishay/jvm-serializers/wiki",children:"JVM-Serializers"}),". At the same time, fury has fully support for JDK17/21, I supported JDK17+ record JIT serialization, JDK9+ ImmutableList JIT serialization. The serialization is blazing fast, please try it out. And we also open sourced Fury GO, the first golang serialization framework which supports circular reference and interface polymorphismm, feel free to try it out and let me know if you have any issues."]}),"\n",(0,t.jsxs)(a.p,{children:["Author: ",(0,t.jsx)(a.a,{href:"https://github.com/chaokunyang",children:"chaokunyang"})]}),"\n",(0,t.jsxs)(a.p,{children:["I'm so excited to announce the 0.2.0 release of the Fury. This a very exciting version of fury. With this version, we have 1X speedup, 30%~50% smaller serialized size. And now we are the fastest serialization framework in the ",(0,t.jsx)(a.a,{href:"https://github.com/eishay/jvm-serializers/wiki",children:"JVM-Serializers"}),". At the same time, fury has fully support for JDK17/21, I supported JDK17+ record JIT serialization, JDK9+ ImmutableList JIT serialization. The serialization is blazing fast, please try it out. And we also open sourced Fury GO, the first golang serialization framework which supports circular reference and interface polymorphismm, feel free to try it out and let me know if you have any issues."]}),"\n",(0,t.jsx)(a.h2,{id:"highlights",children:"Highlights"}),"\n",(0,t.jsx)(a.h3,{id:"java",children:"Java"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Support JDK17+ record JIT/Interpreter serialization"}),"\n",(0,t.jsx)(a.li,{children:"Support JDK17+ record JIT/Interpreter serialization backward/forward compatibility"}),"\n",(0,t.jsx)(a.li,{children:"Support jdk9+ Immutable Collections JIT/Interpreter mode serialization, much faster compared to other frameworks"}),"\n",(0,t.jsx)(a.li,{children:"New collection serialization protocol by homogenization, 1.5x speed up, 2X space saving."}),"\n",(0,t.jsx)(a.li,{children:"Desgined and implemented a new long compression algorithm, with performance cost less than 10% but give 50% compresstion ratio"}),"\n",(0,t.jsx)(a.li,{children:"Support configuring compress int/long independently, enable int/long compression by default"}),"\n",(0,t.jsx)(a.li,{children:"Add class checker API and Whitelist/Blacklist based implementation to enhance security"}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"python",children:"Python"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Support pyarrow6 bazel build"}),"\n",(0,t.jsx)(a.li,{children:"Support python 3.10"}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"javascript",children:"JavaScript"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"[JavaScript] support fury for browser"}),"\n",(0,t.jsx)(a.li,{children:"[JavaScript] support polymorphism"}),"\n",(0,t.jsx)(a.li,{children:"[JavaScript] enhancement performance"}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"golang",children:"Golang"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Implement Golang serialization framework, which support reference, pointer, data serialization"}),"\n",(0,t.jsx)(a.li,{children:"Implement serializers for string/numbers/slice/map/slice/struct/pointer"}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"whats-changed",children:"What's Changed"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["[JavaScript] enhancement performance and bugfix by @wangweipeng2 in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/811",children:"https://github.com/alipay/fury/pull/811"})]}),"\n",(0,t.jsxs)(a.li,{children:["[JavaScript] support polymorphism by @wangweipeng2 in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/814",children:"https://github.com/alipay/fury/pull/814"})]}),"\n",(0,t.jsxs)(a.li,{children:["Create SECURITY.md by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/817",children:"https://github.com/alipay/fury/pull/817"})]}),"\n",(0,t.jsxs)(a.li,{children:["[JavaScript] fix bug #703 by @wangweipeng2 in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/819",children:"https://github.com/alipay/fury/pull/819"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] fix isSecure check for xlang in java by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/822",children:"https://github.com/alipay/fury/pull/822"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Doc] add  protocol wire format wip by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/823",children:"https://github.com/alipay/fury/pull/823"})]}),"\n",(0,t.jsxs)(a.li,{children:["[JavaScript] write tag hash by @wangweipeng2 in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/825",children:"https://github.com/alipay/fury/pull/825"})]}),"\n",(0,t.jsxs)(a.li,{children:["[JavaScript] support browser by @wangweipeng2 in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/830",children:"https://github.com/alipay/fury/pull/830"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] register empty object by default by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/829",children:"https://github.com/alipay/fury/pull/829"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] upgrade guava for CVE-2023-2976 by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/831",children:"https://github.com/alipay/fury/pull/831"})]}),"\n",(0,t.jsxs)(a.li,{children:["[JavaScript]  detect platform wrong by @wangweipeng2 in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/832",children:"https://github.com/alipay/fury/pull/832"})]}),"\n",(0,t.jsxs)(a.li,{children:["[JavaScript] add test by @wangweipeng2 in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/836",children:"https://github.com/alipay/fury/pull/836"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] Add compatible ci for JDK8/11/13/15/17 by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/835",children:"https://github.com/alipay/fury/pull/835"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] use java.lang.ClassValue to cache Lookup by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/844",children:"https://github.com/alipay/fury/pull/844"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] Refactor integration tests by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/845",children:"https://github.com/alipay/fury/pull/845"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] suppress maven download logs by --no-transfer-progress by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/846",children:"https://github.com/alipay/fury/pull/846"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] add missing jdk primitive function by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/848",children:"https://github.com/alipay/fury/pull/848"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] make getter lambda functions by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/849",children:"https://github.com/alipay/fury/pull/849"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] add record utils by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/850",children:"https://github.com/alipay/fury/pull/850"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] Support access record field value by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/851",children:"https://github.com/alipay/fury/pull/851"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] interpreter mode support for record serialization by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/852",children:"https://github.com/alipay/fury/pull/852"})]}),"\n",(0,t.jsxs)(a.li,{children:["[CI] Fix checkstyle by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/853",children:"https://github.com/alipay/fury/pull/853"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] Support jdk record forward/backward interpreter serialization by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/854",children:"https://github.com/alipay/fury/pull/854"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] Support jdk record metashare mode by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/855",children:"https://github.com/alipay/fury/pull/855"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] move record utils to record pkg by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/856",children:"https://github.com/alipay/fury/pull/856"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] move inner functions outside by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/857",children:"https://github.com/alipay/fury/pull/857"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Python] Support pyarrow6 bazel build by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/859",children:"https://github.com/alipay/fury/pull/859"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Python] add missing shared lib for python by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/862",children:"https://github.com/alipay/fury/pull/862"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Python] fix python deploy by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/863",children:"https://github.com/alipay/fury/pull/863"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] Jdk record compatible jit by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/864",children:"https://github.com/alipay/fury/pull/864"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] JIT serialization for JDK record  by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/866",children:"https://github.com/alipay/fury/pull/866"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] support private record jit by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/869",children:"https://github.com/alipay/fury/pull/869"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] optimize buffer copy by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/870",children:"https://github.com/alipay/fury/pull/870"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Doc] Fix row format doc by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/873",children:"https://github.com/alipay/fury/pull/873"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] Support compress int long independently by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/875",children:"https://github.com/alipay/fury/pull/875"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] fix ofHashMap by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/877",children:"https://github.com/alipay/fury/pull/877"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] add jdk tools.jar for tests by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/881",children:"https://github.com/alipay/fury/pull/881"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] register common exception by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/879",children:"https://github.com/alipay/fury/pull/879"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] Fix lazy bean serializer by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/883",children:"https://github.com/alipay/fury/pull/883"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] print exception for fury creation by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/885",children:"https://github.com/alipay/fury/pull/885"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] remove getCurrentFury API by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/887",children:"https://github.com/alipay/fury/pull/887"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] Add fury map iterator api by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/889",children:"https://github.com/alipay/fury/pull/889"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] Add class checker API by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/890",children:"https://github.com/alipay/fury/pull/890"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Python] Fix python linux deploy missing shared library files by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/892",children:"https://github.com/alipay/fury/pull/892"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] refine AllowListChecker by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/893",children:"https://github.com/alipay/fury/pull/893"})]}),"\n",(0,t.jsxs)(a.li,{children:["Update README.md by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/894",children:"https://github.com/alipay/fury/pull/894"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] support immutable collection/map jit and generics optimization by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/895",children:"https://github.com/alipay/fury/pull/895"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] cache generated guava constructor by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/897",children:"https://github.com/alipay/fury/pull/897"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] Optimize jdk9+ immutable collection serialization  by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/900",children:"https://github.com/alipay/fury/pull/900"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] add jdk20 tests by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/901",children:"https://github.com/alipay/fury/pull/901"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] optimize duplicate fields utils by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/905",children:"https://github.com/alipay/fury/pull/905"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] fix jit error for package-level field with private type by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/907",children:"https://github.com/alipay/fury/pull/907"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] update blacklist by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/913",children:"https://github.com/alipay/fury/pull/913"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Python] Use cloudpickle for local function serialization by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/914",children:"https://github.com/alipay/fury/pull/914"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Python] fix row format getter by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/915",children:"https://github.com/alipay/fury/pull/915"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] disable class check by default by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/917",children:"https://github.com/alipay/fury/pull/917"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] refine java docs by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/918",children:"https://github.com/alipay/fury/pull/918"})]}),"\n",(0,t.jsxs)(a.li,{children:["Update blacklist.txt by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/920",children:"https://github.com/alipay/fury/pull/920"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] Skip ",(0,t.jsx)(a.code,{children:"toString"})," in annotation invocation handler ",(0,t.jsx)(a.code,{children:"readObject"})," by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/922",children:"https://github.com/alipay/fury/pull/922"})]}),"\n",(0,t.jsxs)(a.li,{children:["Optimize StringBuilder/StringBuffer serialization by @pandalee99 in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/908",children:"https://github.com/alipay/fury/pull/908"})]}),"\n",(0,t.jsxs)(a.li,{children:["Bump release versin to 0.1.2 by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/924",children:"https://github.com/alipay/fury/pull/924"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Doc] add basic type java format doc by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/928",children:"https://github.com/alipay/fury/pull/928"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] speed test codegen speed by avoid duplicate codegen by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/929",children:"https://github.com/alipay/fury/pull/929"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] Optimize collection serialization protocol by homogenization by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/923",children:"https://github.com/alipay/fury/pull/923"})]}),"\n",(0,t.jsxs)(a.li,{children:["Bump org.apache.avro",":avro"," from 1.11.1 to 1.11.3 in /java/fury-benchmark by @dependabot in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/931",children:"https://github.com/alipay/fury/pull/931"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] Rename classinfocache to classinfoholder by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/933",children:"https://github.com/alipay/fury/pull/933"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] put together all primitive serializers by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/934",children:"https://github.com/alipay/fury/pull/934"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] Fix jvm crash caused by varint out-of-bound writing by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/937",children:"https://github.com/alipay/fury/pull/937"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] enable int compression by default by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/935",children:"https://github.com/alipay/fury/pull/935"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] put together all fury related config classes into ",(0,t.jsx)(a.code,{children:"config"})," package by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/940",children:"https://github.com/alipay/fury/pull/940"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] Add SLI(small long as int) long encoding algorithm by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/942",children:"https://github.com/alipay/fury/pull/942"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] use raw type serializer for getSerialzier in jit by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/943",children:"https://github.com/alipay/fury/pull/943"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] use varint for class id encoding to reduce space cost by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/945",children:"https://github.com/alipay/fury/pull/945"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] Fix Collection/Map jit/interpreter protocol inconsisitency for generics instantiated subclass by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/947",children:"https://github.com/alipay/fury/pull/947"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Go] add fury go util and ci tests by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/950",children:"https://github.com/alipay/fury/pull/950"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Go] add fury go buffer implementation by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/952",children:"https://github.com/alipay/fury/pull/952"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Go] add fury go serialization framework by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/954",children:"https://github.com/alipay/fury/pull/954"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Go] add serializers for common go types by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/956",children:"https://github.com/alipay/fury/pull/956"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] fix varint writeindex grow for jit by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/957",children:"https://github.com/alipay/fury/pull/957"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Go] add fury go map serializer by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/959",children:"https://github.com/alipay/fury/pull/959"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Go] add slice serializer for fury go by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/961",children:"https://github.com/alipay/fury/pull/961"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Go] add set serializer for fury go by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/963",children:"https://github.com/alipay/fury/pull/963"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Go] Add struct serializer for fury go  by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/965",children:"https://github.com/alipay/fury/pull/965"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Go] add ref tracking tests by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/967",children:"https://github.com/alipay/fury/pull/967"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Go] add fury type dispatch tests by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/969",children:"https://github.com/alipay/fury/pull/969"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Go] add fury serialization tests by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/971",children:"https://github.com/alipay/fury/pull/971"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Go] Add fury xlang tests by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/973",children:"https://github.com/alipay/fury/pull/973"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Go] rename Reference to Ref by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/975",children:"https://github.com/alipay/fury/pull/975"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] add jdk 21 tests by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/977",children:"https://github.com/alipay/fury/pull/977"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] add jdk 21 tests ci by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/978",children:"https://github.com/alipay/fury/pull/978"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] Optimize sli long read/write by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/981",children:"https://github.com/alipay/fury/pull/981"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Doc] upgrade docs by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/985",children:"https://github.com/alipay/fury/pull/985"}),"  ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/986",children:"https://github.com/alipay/fury/pull/986"})," ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/987",children:"https://github.com/alipay/fury/pull/987"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] add serializeJavaObject API to ThreadSafeFury by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/988",children:"https://github.com/alipay/fury/pull/988"})]}),"\n",(0,t.jsxs)(a.li,{children:["[Java] fix jdk17/21 ci latest_jdk_tests skip by @chaokunyang in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/989",children:"https://github.com/alipay/fury/pull/989"})]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"new-contributors",children:"New Contributors"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["@pandalee99 made their first contribution in ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/pull/908",children:"https://github.com/alipay/fury/pull/908"})]}),"\n",(0,t.jsxs)(a.li,{children:["@ilxqx made their first contribution in ",(0,t.jsx)(a.a,{href:"https://github.com/fury-project/dubbo-serialization-fury/pull/1",children:"https://github.com/fury-project/dubbo-serialization-fury/pull/1"})]}),"\n",(0,t.jsxs)(a.li,{children:["@T-baby made their first contribution in ",(0,t.jsx)(a.a,{href:"https://github.com/fury-project/dubbo-serialization-fury/pull/13",children:"https://github.com/fury-project/dubbo-serialization-fury/pull/13"})]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Full Changelog"}),": ",(0,t.jsx)(a.a,{href:"https://github.com/alipay/fury/compare/v0.1.0...v0.2.0",children:"https://github.com/alipay/fury/compare/v0.1.0...v0.2.0"})]})]})}function c(i={}){const{wrapper:a}={...(0,r.a)(),...i.components};return a?(0,t.jsx)(a,{...i,children:(0,t.jsx)(p,{...i})}):p(i)}},1151:(i,a,l)=>{l.d(a,{Z:()=>h,a:()=>n});var t=l(7294);const r={},e=t.createContext(r);function n(i){const a=t.useContext(e);return t.useMemo((function(){return"function"==typeof i?i(a):{...a,...i}}),[a,i])}function h(i){let a;return a=i.disableParentContext?"function"==typeof i.components?i.components(r):i.components||r:n(i.components),t.createElement(e.Provider,{value:a},i.children)}}}]);
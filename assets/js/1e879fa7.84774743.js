"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[4375],{574:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var r=n(5893),l=n(1151);const a={slug:"fury_0_5_0_release",title:"Fury v0.5.0 Released",authors:["chaokunyang"],tags:["fury"]},t=void 0,s={permalink:"/blog/fury_0_5_0_release",editUrl:"https://github.com/apache/fury-site/tree/main/blog/2024-05-03-fury_0_5_0_release.md",source:"@site/blog/2024-05-03-fury_0_5_0_release.md",title:"Fury v0.5.0 Released",description:"We're excited to announce the release of Fury v0.5.0. This release incorporates a myriad of improvements, bug fixes, and new features across multiple languages including Java, Golang, Python and JavaScript. It further refines Fury's performance, compatibility, and developer experience.",date:"2024-05-03T00:00:00.000Z",formattedDate:"May 3, 2024",tags:[{label:"fury",permalink:"/blog/tags/fury"}],readingTime:5.06,hasTruncateMarker:!1,authors:[{name:"Shawn Yang",title:"Apache Fury PPMC Member",url:"https://github.com/chaokunyang",imageURL:"https://github.com/chaokunyang.png",key:"chaokunyang"}],frontMatter:{slug:"fury_0_5_0_release",title:"Fury v0.5.0 Released",authors:["chaokunyang"],tags:["fury"]},unlisted:!1,prevItem:{title:"Meta String: A 37.5% space efficient string encoding than UTF-8 in Fury serialization",permalink:"/blog/fury_meta_string_37_5_percent_space_efficient_encoding_than_utf8"},nextItem:{title:"Apache Fury: A blazing fast multi-language serialization framework powered by JIT and zero-copy",permalink:"/blog/fury_blazing_fast_multiple_language_serialization_framework"}},c={authorsImageUrls:[void 0]},o=[{value:"New Features",id:"new-features",level:2},{value:"Specification",id:"specification",level:3},{value:"Java",id:"java",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"C++",id:"c",level:3},{value:"Golang",id:"golang",level:3},{value:"Enhancements",id:"enhancements",level:2},{value:"Java",id:"java-1",level:3},{value:"JavaScript",id:"javascript-1",level:3},{value:"Python",id:"python",level:3},{value:"Bug Fix",id:"bug-fix",level:3},{value:"Java",id:"java-2",level:4},{value:"Rust",id:"rust",level:4},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"New Contributors",id:"new-contributors",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}];function h(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"We're excited to announce the release of Fury v0.5.0. This release incorporates a myriad of improvements, bug fixes, and new features across multiple languages including Java, Golang, Python and JavaScript. It further refines Fury's performance, compatibility, and developer experience."}),"\n",(0,r.jsx)(i.h2,{id:"new-features",children:"New Features"}),"\n",(0,r.jsx)(i.h3,{id:"specification",children:"Specification"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Introduced fury cross-language serialization specification (#1413, #1508)"}),"\n",(0,r.jsx)(i.li,{children:"Introduced xlang type mapping (#1468)"}),"\n",(0,r.jsx)(i.li,{children:"Introduced fury java specification (#1240)"}),"\n",(0,r.jsx)(i.li,{children:"Introduced meta string encoding specification (#1565, #1513, #1517)"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"java",children:"Java"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Support for compatible mode with GraalVM (#1586, #1587)."}),"\n",(0,r.jsx)(i.li,{children:"Support unexisted array/enum classes and enabled deserializeUnexistedClass by default (#1569, #1575)."}),"\n",(0,r.jsx)(i.li,{children:"meta string encoding algorithm in java (#1514, #1568, #1516, #1565)"}),"\n",(0,r.jsx)(i.li,{children:"Support meta string encoding for classname and package name (#1527)"}),"\n",(0,r.jsx)(i.li,{children:"native streaming mode deserialization (#1451, #1551)"}),"\n",(0,r.jsx)(i.li,{children:"native channel stream reader (#1483)"}),"\n",(0,r.jsx)(i.li,{children:"Support registration in thread safe fury (#1280)"}),"\n",(0,r.jsx)(i.li,{children:"Implement fury logger and remove slf4j library (#1485, #1494, #1506, #1492)"}),"\n",(0,r.jsx)(i.li,{children:"Support adjust logger level dynamically (#1557)"}),"\n",(0,r.jsx)(i.li,{children:"Support jdk proxy serialization for graalvm (#1379)"}),"\n",(0,r.jsx)(i.li,{children:"Specify JPMS module names (#1343)"}),"\n",(0,r.jsx)(i.li,{children:"Align string array to collection protocol v2 (#1228)"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"javascript",children:"JavaScript"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Align implementation to new Xlang protocol (#1487)"}),"\n",(0,r.jsx)(i.li,{children:"Implement Xlang map (#1549)"}),"\n",(0,r.jsx)(i.li,{children:"Implemented xlang map code generator (#1571)"}),"\n",(0,r.jsx)(i.li,{children:"Added magic number feature for better serialization control (#1550)."}),"\n",(0,r.jsx)(i.li,{children:"Support oneof (#1348)"}),"\n",(0,r.jsx)(i.li,{children:"create zero-copy buffer when convert (#1386)"}),"\n",(0,r.jsx)(i.li,{children:"Implement the collection protocol (#1337)"}),"\n",(0,r.jsx)(i.li,{children:"Implement Enum (#1321)"}),"\n",(0,r.jsx)(i.li,{children:"compress numbers (#1290)"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"c",children:"C++"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Support optional fields/elements in RowEncoder (#1223)"}),"\n",(0,r.jsx)(i.li,{children:"Support mapping types for RowEncodeTrait (#1247)"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"golang",children:"Golang"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Implemented Fury meta string encoding algorithm (#1566)."}),"\n",(0,r.jsx)(i.li,{children:"concat meta string len with flags (#1517)"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"enhancements",children:"Enhancements"}),"\n",(0,r.jsx)(i.h3,{id:"java-1",children:"Java"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Improved buffer growth strategy to support larger data sizes for serialization (#1582)."}),"\n",(0,r.jsx)(i.li,{children:"Performance optimizations for MetaStringDecoder and various serialization processes (#1568, #1511, #1493)."}),"\n",(0,r.jsx)(i.li,{children:"concat write classname flag with package name (#1523)"}),"\n",(0,r.jsx)(i.li,{children:"concat meta string len with flags (#1517)"}),"\n",(0,r.jsxs)(i.li,{children:["fastpath for read/write small varint in range ",(0,r.jsx)(i.code,{children:"[0,127]"})," (#1503)"]}),"\n",(0,r.jsx)(i.li,{children:"optimize read float/double for jvm jit inline (#1472)"}),"\n",(0,r.jsx)(i.li,{children:"replace Guava's TypeToken with self-made (#1553)"}),"\n",(0,r.jsx)(i.li,{children:"Remove basic guava API usage (#1244)"}),"\n",(0,r.jsx)(i.li,{children:"optimize fury creation speed (#1511)"}),"\n",(0,r.jsx)(i.li,{children:"optimize string serialization by concat coder and length (#1486)"}),"\n",(0,r.jsx)(i.li,{children:"carry read objects when deserialization fail for better trouble shooting (#1420)"}),"\n",(0,r.jsx)(i.li,{children:"implement define_class insteadof using javaassist (#1422)"}),"\n",(0,r.jsx)(i.li,{children:"avoid recompilation when gc happens for memory pressure (#1411, #1585)"}),"\n",(0,r.jsx)(i.li,{children:"Fix immutable collection ref tracking (#1403)"}),"\n",(0,r.jsx)(i.li,{children:"reduce fury caller stack (#1496)"}),"\n",(0,r.jsx)(i.li,{children:"Extract BaseFury interface (#1382)"}),"\n",(0,r.jsx)(i.li,{children:"refine collection builder util (#1334)"}),"\n",(0,r.jsx)(i.li,{children:"disable async compilation for graalvm (#1222)"}),"\n",(0,r.jsx)(i.li,{children:"refine endian check code size in buffer (#1501)"}),"\n",(0,r.jsx)(i.li,{children:"generate list fori loop instead of iterator loop for list serialization (#1493)"}),"\n",(0,r.jsx)(i.li,{children:"Reduce unsafeWritePositiveVarLong bytecode size. (#1491)"}),"\n",(0,r.jsx)(i.li,{children:"Reduce unsafePutPositiveVarInt bytecode size. (#1490, #1489)"}),"\n",(0,r.jsx)(i.li,{children:"optimize read char/short jvm jit inline (#1471)"}),"\n",(0,r.jsx)(i.li,{children:"reduce code size of read long to optimize jvm jit inline (#1470)"}),"\n",(0,r.jsx)(i.li,{children:"reduce readInt/readVarInt code size for for jvm jit inline (#1469)"}),"\n",(0,r.jsx)(i.li,{children:"refactor readVarUint32 algorithm (#1462)"}),"\n",(0,r.jsx)(i.li,{children:"rewrite readVarUint64 algorithm (#1463)"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"javascript-1",children:"JavaScript"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Make PlatformBuffer available if has Buffer polyfill (#1373)"}),"\n",(0,r.jsx)(i.li,{children:"enhance performance 64bits number (#1320)"}),"\n",(0,r.jsx)(i.li,{children:"Refactor & Compress Long (#1313)"}),"\n",(0,r.jsx)(i.li,{children:"Improve tag write performance (#1241)"}),"\n",(0,r.jsx)(i.li,{children:"Add more methods for BinaryReader (#1231)"}),"\n",(0,r.jsx)(i.li,{children:"Implements tuple serializer (#1216)"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"python",children:"Python"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"concat meta string len with flags (#1517)"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,r.jsx)(i.h4,{id:"java-2",children:"Java"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Fix bytebuffer no such method error (#1580)"}),"\n",(0,r.jsx)(i.li,{children:"Prevent exception in ObjectArray.clearObjectArray() (#1573)"}),"\n",(0,r.jsx)(i.li,{children:"Fix slf4j on graalvm (#1432)"}),"\n",(0,r.jsx)(i.li,{children:"Fix illegal classname caused by negative hash (#1436)"}),"\n",(0,r.jsx)(i.li,{children:"Fix BigDecimal serializer (#1431)"}),"\n",(0,r.jsx)(i.li,{children:"Fix BigInteger serialization (#1479)"}),"\n",(0,r.jsx)(i.li,{children:"Fix type conflict in method split (#1371)"}),"\n",(0,r.jsx)(i.li,{children:"Fix CodeGen Name conflicts when omitting java.lang prefix #1363 (#1366)"}),"\n",(0,r.jsx)(i.li,{children:"Fix ClassLoader npe in loadOrGenCodecClass (#1346)"}),"\n",(0,r.jsx)(i.li,{children:"Fix big buffer trunc (#1402)"}),"\n",(0,r.jsx)(i.li,{children:"Make Blacklist detection is also performed when the Class is registered. (#1398)"}),"\n",(0,r.jsx)(i.li,{children:"avoid big object graph cause buffer take up too much memory (#1397)"}),"\n",(0,r.jsx)(i.li,{children:"Fix get static field by unsafe (#1380)"}),"\n",(0,r.jsx)(i.li,{children:"Fix javax package for accessor codegen (#1388)"}),"\n",(0,r.jsx)(i.li,{children:"Fix nested collection cast for scala/java (#1333)"}),"\n",(0,r.jsx)(i.li,{children:"Fix References within InvocationHandler (#1365)"}),"\n",(0,r.jsxs)(i.li,{children:["Allow partial read of serialized size from ",(0,r.jsx)(i.code,{children:"InputStream"})," (#1391)"]}),"\n",(0,r.jsx)(i.li,{children:"add potential missing bean class-loader (#1381)"}),"\n",(0,r.jsx)(i.li,{children:"Fix polymorphic array serialization (#1324)"}),"\n",(0,r.jsx)(i.li,{children:"Fix nested collection num elements (#1306)"}),"\n",(0,r.jsx)(i.li,{children:"Fix collection init size typo (#1342)"}),"\n",(0,r.jsx)(i.li,{children:"Clear extRegistry.getClassCtx if generate serializer class failed (#1221)"}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"rust",children:"Rust"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Fix memory errors caused by casting (#1372)"}),"\n",(0,r.jsx)(i.li,{children:"Fix incorrect cast (#1345)"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"miscellaneous",children:"Miscellaneous"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Numerous code cleanups, refactorings, and internal improvements across all supported languages to enhance code quality\nand maintainability."}),"\n",(0,r.jsx)(i.li,{children:"Moved various utilities into more appropriate packages to improve code organization and readability (#1584, #1583,\n#1578)."}),"\n",(0,r.jsx)(i.li,{children:"rename MemoryBuffer read/write/put/getType with read/write/put/getTypeNumber  (#1480, #1464, #1505, #1500)"}),"\n",(0,r.jsx)(i.li,{children:"extract public Fury methods to BaseFury (#1467)"}),"\n",(0,r.jsx)(i.li,{children:"Optimize Class ID allocation. (#1406)"}),"\n",(0,r.jsx)(i.li,{children:"refine Collection util data structure (#1287) (#1288)"}),"\n",(0,r.jsx)(i.li,{children:"Improve Status by using unique_ptr (#1234)"}),"\n",(0,r.jsx)(i.li,{children:"Improve FormatTimePoint by removing sstream (#1233)"}),"\n",(0,r.jsx)(i.li,{children:"Drop optional chaining expression (#1338)"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"new-contributors",children:"New Contributors"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["@nandakumar131 made their first contribution in ",(0,r.jsx)(i.a,{href:"https://github.com/apache/fury/pull/1244",children:"https://github.com/apache/fury/pull/1244"})]}),"\n",(0,r.jsxs)(i.li,{children:["@vesense made their first contribution in ",(0,r.jsx)(i.a,{href:"https://github.com/apache/fury/pull/1260",children:"https://github.com/apache/fury/pull/1260"})]}),"\n",(0,r.jsxs)(i.li,{children:["@LiangliangSui made their first contribution in ",(0,r.jsx)(i.a,{href:"https://github.com/apache/fury/pull/1294",children:"https://github.com/apache/fury/pull/1294"})]}),"\n",(0,r.jsxs)(i.li,{children:["@liuxiaocs7 made their first contribution in ",(0,r.jsx)(i.a,{href:"https://github.com/apache/fury/pull/1312",children:"https://github.com/apache/fury/pull/1312"})]}),"\n",(0,r.jsxs)(i.li,{children:["@mtf90 made their first contribution in ",(0,r.jsx)(i.a,{href:"https://github.com/apache/fury/pull/1343",children:"https://github.com/apache/fury/pull/1343"})]}),"\n",(0,r.jsxs)(i.li,{children:["@bowin made their first contribution in ",(0,r.jsx)(i.a,{href:"https://github.com/apache/fury/pull/1353",children:"https://github.com/apache/fury/pull/1353"})]}),"\n",(0,r.jsxs)(i.li,{children:["@cn-at-osmit made their first contribution in ",(0,r.jsx)(i.a,{href:"https://github.com/apache/fury/pull/1366",children:"https://github.com/apache/fury/pull/1366"})]}),"\n",(0,r.jsxs)(i.li,{children:["@Maurice-Betzel made their first contribution in ",(0,r.jsx)(i.a,{href:"https://github.com/apache/fury/pull/1381",children:"https://github.com/apache/fury/pull/1381"})]}),"\n",(0,r.jsxs)(i.li,{children:["@phogh made their first contribution in ",(0,r.jsx)(i.a,{href:"https://github.com/apache/fury/pull/1391",children:"https://github.com/apache/fury/pull/1391"})]}),"\n",(0,r.jsxs)(i.li,{children:["@laglangyue made their first contribution in ",(0,r.jsx)(i.a,{href:"https://github.com/apache/fury/pull/1415",children:"https://github.com/apache/fury/pull/1415"})]}),"\n",(0,r.jsxs)(i.li,{children:["@Munoon made their first contribution in ",(0,r.jsx)(i.a,{href:"https://github.com/apache/fury/pull/1467",children:"https://github.com/apache/fury/pull/1467"})]}),"\n",(0,r.jsxs)(i.li,{children:["@pixeeai made their first contribution in ",(0,r.jsx)(i.a,{href:"https://github.com/apache/fury/pull/1559",children:"https://github.com/apache/fury/pull/1559"})]}),"\n",(0,r.jsxs)(i.li,{children:["@huisman6 made their first contribution in ",(0,r.jsx)(i.a,{href:"https://github.com/apache/fury/pull/1572",children:"https://github.com/apache/fury/pull/1572"})]}),"\n",(0,r.jsxs)(i.li,{children:["@tommyettinger made their first contribution in ",(0,r.jsx)(i.a,{href:"https://github.com/apache/fury/pull/1573",children:"https://github.com/apache/fury/pull/1573"})]}),"\n",(0,r.jsxs)(i.li,{children:["@qingoba made their first contribution in ",(0,r.jsx)(i.a,{href:"https://github.com/apache/fury/pull/1566",children:"https://github.com/apache/fury/pull/1566"})]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,r.jsx)(i.p,{children:"Thanks @chaokunyang @theweipeng @PragmaTwice @LiangliangSui @nandakumar131 @Munoon @qingoba @vesense @liuxiaocs7 @mtf90 @bowin @cn-at-osmit @Maurice-Betzel @phogh @laglangyue @tommyettinger @huisman6 @pixeeai"}),"\n",(0,r.jsx)(i.p,{children:"A big thank you to all our contributors who have worked hard on this release. Your contributions, whether through code,\ndocumentation, or issue reporting, are really appreciated."}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Full Changelog"}),": ",(0,r.jsx)(i.a,{href:"https://github.com/apache/fury/compare/v0.4.1...v0.5.0",children:"https://github.com/apache/fury/compare/v0.4.1...v0.5.0"})]})]})}function d(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>s,a:()=>t});var r=n(7294);const l={},a=r.createContext(l);function t(e){const i=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(a.Provider,{value:i},e.children)}}}]);
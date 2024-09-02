"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[4919],{37923:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>t});var r=a(85893),l=a(11151);const i={title:"Scala \u5e8f\u5217\u5316\u6307\u5357",sidebar_position:4,id:"scala_guide"},s=void 0,c={id:"guide/scala_guide",title:"Scala \u5e8f\u5217\u5316\u6307\u5357",description:"Apache Fury \u652f\u6301\u6240\u6709 Scala \u5bf9\u8c61\u5e8f\u5217\u5316\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guide/scala_guide.md",sourceDirName:"guide",slug:"/guide/scala_guide",permalink:"/zh-CN/docs/guide/scala_guide",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/fury-site/tree/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/guide/scala_guide.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Scala \u5e8f\u5217\u5316\u6307\u5357",sidebar_position:4,id:"scala_guide"},sidebar:"guideSidebar",previous:{title:"\u591a\u8bed\u8a00\u5e8f\u5217\u5316\u7684\u7c7b\u578b\u6620\u5c04",permalink:"/zh-CN/docs/guide/xlang_type_mapping"},next:{title:"GraalVM \u6307\u5357",permalink:"/zh-CN/docs/guide/graalvm_guide"}},d={},t=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"Fury \u5bf9\u8c61\u521b\u5efa",id:"fury-\u5bf9\u8c61\u521b\u5efa",level:2},{value:"\u5e8f\u5217\u5316 case \u5bf9\u8c61",id:"\u5e8f\u5217\u5316-case-\u5bf9\u8c61",level:2},{value:"\u5e8f\u5217\u5316 pojo",id:"\u5e8f\u5217\u5316-pojo",level:2},{value:"\u5e8f\u5217\u5316\u5bf9\u8c61\u5355\u4f8b",id:"\u5e8f\u5217\u5316\u5bf9\u8c61\u5355\u4f8b",level:2},{value:"\u5e8f\u5217\u5316\u96c6\u5408",id:"\u5e8f\u5217\u5316\u96c6\u5408",level:2},{value:"\u5e8f\u5217\u5316\u5143\u7ec4",id:"\u5e8f\u5217\u5316\u5143\u7ec4",level:2},{value:"\u5e8f\u5217\u5316\u679a\u4e3e",id:"\u5e8f\u5217\u5316\u679a\u4e3e",level:2},{value:"Scala3 \u679a\u4e3e",id:"scala3-\u679a\u4e3e",level:3},{value:"Scala2 \u679a\u4e3e",id:"scala2-\u679a\u4e3e",level:3},{value:"\u5e8f\u5217\u5316 Option \u7c7b\u578b",id:"\u5e8f\u5217\u5316-option-\u7c7b\u578b",level:2},{value:"\u6027\u80fd",id:"\u6027\u80fd",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Apache Fury \u652f\u6301\u6240\u6709 Scala \u5bf9\u8c61\u5e8f\u5217\u5316\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"case"})," \u652f\u6301\u7c7b\u5e8f\u5217\u5316\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pojo/bean"})," \u652f\u6301\u7c7b\u5e8f\u5217\u5316\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"object"})," \u652f\u6301\u5355\u4f8b\u5e8f\u5217\u5316\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"collection"})," \u652f\u6301\u5e8f\u5217\u5316\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5176\u4ed6\u7c7b\u578b\uff08\u5982 ",(0,r.jsx)(n.code,{children:"tuple/either"})," AND BASIC \u7c7b\u578b\uff09\u4e5f\u90fd\u53d7\u652f\u6301\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Scala 2 \u548c 3 \u5747\u652f\u6301\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sbt",children:'libraryDependencies += "org.apache.fury" % "fury-core" % "0.7.0"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"fury-\u5bf9\u8c61\u521b\u5efa",children:"Fury \u5bf9\u8c61\u521b\u5efa"}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u4f7f\u7528 Apache Fury \u8fdb\u884c Scala \u5e8f\u5217\u5316\u65f6\uff0c\u60a8\u5e94\u8be5\u81f3\u5c11\u4f7f\u7528\u4ee5\u4e0b\u9009\u9879\u521b\u5efa Fury \u5bf9\u8c61\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:"val fury = Fury.builder()\n  .withScalaOptimizationEnabled(true)\n  .requireClassRegistration(true)\n  .withRefTracking(true)\n  .build()\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6839\u636e\u60a8\u5e8f\u5217\u5316\u7684\u5bf9\u8c61\u7c7b\u578b\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u6ce8\u518c\u4e00\u4e9b Scala \u7684\u5185\u90e8\u7c7b\u578b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'fury.register(Class.forName("scala.collection.generic.DefaultSerializationProxy"))\nfury.register(Class.forName("scala.Enumeration.Val"))\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u8981\u907f\u514d\u6b64\u7c7b\u6ce8\u518c\uff0c\u53ef\u4ee5\u901a\u8fc7\u7981\u7528\u7c7b ",(0,r.jsx)(n.code,{children:"FuryBuilder#requireClassRegistration(false)"})," \u6765\u5b8c\u6210\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\uff1a\u6b64\u9009\u9879\u53ef\u4ee5\u53cd\u5e8f\u5217\u5316\u672a\u77e5\u7684\u5bf9\u8c61\u7c7b\u578b\uff0c\u4f7f\u7528\u66f4\u7075\u6d3b\u3002\u4f46\u5982\u679c\u7c7b\u5305\u542b\u4efb\u4f55\u7684\u6076\u610f\u4ee3\u7801\uff0c\u4f1a\u6709\u5b89\u5168\u98ce\u9669\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5faa\u73af\u5f15\u7528\u5728 Scala \u4e2d\u5f88\u5e38\u89c1\uff0c",(0,r.jsx)(n.code,{children:"Reference tracking"})," \u5e94\u8be5\u7531 ",(0,r.jsx)(n.code,{children:"FuryBuilder#withRefTracking(true)"})," \u914d\u7f6e\u9009\u9879\u5f00\u542f\u3002\u5982\u679c\u4e0d\u542f\u7528 ",(0,r.jsx)(n.code,{children:"Reference tracking"}),"\uff0c\u5219\u5728\u5e8f\u5217\u5316 Scala Enumeration \u65f6\uff0c\u67d0\u4e9b Scala \u7248\u672c\u53ef\u80fd\u4f1a\u53d1\u751f ",(0,r.jsx)(n.a,{href:"https://github.com/apache/fury/issues/1032",children:"StackOverflowError \u9519\u8bef"}),"\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff1aFury \u5b9e\u4f8b\u5e94\u8be5\u5728\u591a\u4e2a\u5e8f\u5217\u5316\u4e4b\u95f4\u5171\u4eab\uff0c\u521b\u5efa Fury \u5b9e\u4f8b\u5f00\u9500\u5f88\u5927\uff0c\u5e94\u8be5\u5c3d\u91cf\u590d\u7528\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u5728\u591a\u4e2a\u7ebf\u7a0b\u4e2d\u4f7f\u7528\u5171\u4eab\u7684 Fury \u5b9e\u4f8b\uff0c\u60a8\u5e94\u8be5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"ThreadSafeFury"})," \u4ee3\u66ff ",(0,r.jsx)(n.code,{children:"FuryBuilder#buildThreadSafeFury()"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5e8f\u5217\u5316-case-\u5bf9\u8c61",children:"\u5e8f\u5217\u5316 case \u5bf9\u8c61"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'case class Person(github: String, age: Int, id: Long)\nval p = Person("https://github.com/chaokunyang", 18, 1)\nprintln(fury.deserialize(fury.serialize(p)))\nprintln(fury.deserializeJavaObject(fury.serializeJavaObject(p)))\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u5e8f\u5217\u5316-pojo",children:"\u5e8f\u5217\u5316 pojo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'class Foo(f1: Int, f2: String) {\n  override def toString: String = s"Foo($f1, $f2)"\n}\nprintln(fury.deserialize(fury.serialize(Foo(1, "chaokunyang"))))\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u5e8f\u5217\u5316\u5bf9\u8c61\u5355\u4f8b",children:"\u5e8f\u5217\u5316\u5bf9\u8c61\u5355\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:"object singleton {\n}\nval o1 = fury.deserialize(fury.serialize(singleton))\nval o2 = fury.deserialize(fury.serialize(singleton))\nprintln(o1 == o2)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5e8f\u5217\u5316\u96c6\u5408",children:"\u5e8f\u5217\u5316\u96c6\u5408"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'val seq = Seq(1,2)\nval list = List("a", "b")\nval map = Map("a" -> 1, "b" -> 2)\nprintln(fury.deserialize(fury.serialize(seq)))\nprintln(fury.deserialize(fury.serialize(list)))\nprintln(fury.deserialize(fury.serialize(map)))\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u5e8f\u5217\u5316\u5143\u7ec4",children:"\u5e8f\u5217\u5316\u5143\u7ec4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'val tuple = Tuple2(100, 10000L)\nprintln(fury.deserialize(fury.serialize(tuple)))\nval tuple = Tuple4(100, 10000L, 10000L, "str")\nprintln(fury.deserialize(fury.serialize(tuple)))\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u5e8f\u5217\u5316\u679a\u4e3e",children:"\u5e8f\u5217\u5316\u679a\u4e3e"}),"\n",(0,r.jsx)(n.h3,{id:"scala3-\u679a\u4e3e",children:"Scala3 \u679a\u4e3e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:"enum Color { case Red, Green, Blue }\nprintln(fury.deserialize(fury.serialize(Color.Green)))\n"})}),"\n",(0,r.jsx)(n.h3,{id:"scala2-\u679a\u4e3e",children:"Scala2 \u679a\u4e3e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:"object ColorEnum extends Enumeration {\n  type ColorEnum = Value\n  val Red, Green, Blue = Value\n}\nprintln(fury.deserialize(fury.serialize(ColorEnum.Green)))\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5e8f\u5217\u5316-option-\u7c7b\u578b",children:"\u5e8f\u5217\u5316 Option \u7c7b\u578b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:"val opt: Option[Long] = Some(100)\nprintln(fury.deserialize(fury.serialize(opt)))\nval opt1: Option[Long] = None\nprintln(fury.deserialize(fury.serialize(opt1)))\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6027\u80fd",children:"\u6027\u80fd"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"pojo/bean/case/object"})," Scala \u5bf9 Apache Fury JIT \u7684\u652f\u6301\u5f88\u597d\uff0c\u6027\u80fd\u4e0e Apache Fury Java \u4e00\u6837\u4f18\u5f02\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"Scala \u96c6\u5408\u548c\u6cdb\u578b\u4e0d\u9075\u5faa Java \u96c6\u5408\u6846\u67b6\uff0c\u5e76\u4e14\u672a\u4e0e\u5f53\u524d\u53d1\u884c\u7248\u4e2d\u7684 Apache Fury JIT \u5b8c\u5168\u96c6\u6210\u3002\u6027\u80fd\u4e0d\u4f1a\u50cf Java \u7684 Fury collections \u5e8f\u5217\u5316\u90a3\u4e48\u597d\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["scala \u96c6\u5408\u7684\u6267\u884c\u5c06\u8c03\u7528 Java \u5e8f\u5217\u5316 API ",(0,r.jsx)(n.code,{children:"writeObject/readObject/writeReplace/readResolve/readObjectNoData/Externalizable"})," \u548c Fury ",(0,r.jsx)(n.code,{children:"ObjectStream"})," \u5b9e\u73b0\u3002\u867d\u7136 ",(0,r.jsx)(n.code,{children:"org.apache.fury.serializer.ObjectStreamSerializer"})," \u6bd4 JDK ",(0,r.jsx)(n.code,{children:"ObjectOutputStream/ObjectInputStream"})," \u5feb\u5f88\u591a\uff0c\u4f46\u5b83\u4ecd\u7136\u4e0d\u77e5\u9053\u5982\u4f55\u4f7f\u7528 Scala \u96c6\u5408\u6cdb\u578b\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u672a\u6765\u6211\u4eec\u8ba1\u5212\u4e3a Scala \u7c7b\u578b\u63d0\u4f9b\u66f4\u591a\u4f18\u5316\uff0c\u656c\u8bf7\u671f\u5f85\uff0c\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u770b ",(0,r.jsx)(n.a,{href:"https://github.com/apache/fury/issues/682",children:"#682"}),"\uff01"]}),"\n",(0,r.jsxs)(n.p,{children:["Scala \u96c6\u5408\u5e8f\u5217\u5316\u5df2\u5728 ",(0,r.jsx)(n.a,{href:"https://github.com/apache/fury/pull/1073",children:"#1073"})," \u5b8c\u6210 \uff0c\u5982\u679c\u60a8\u60f3\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\uff0c\u8bf7\u4f7f\u7528 Apache Fury snapshot \u7248\u672c\u3002"]})]})}function o(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>s});var r=a(67294);const l={},i=r.createContext(l);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
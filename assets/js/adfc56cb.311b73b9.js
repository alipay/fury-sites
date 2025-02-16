"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[1462],{55343:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>o});var n=a(85893),l=a(11151);const r={title:"Scala Serialization Guide",sidebar_position:4,id:"scala_guide"},s=void 0,t={id:"guide/scala_guide",title:"Scala Serialization Guide",description:"Fury supports all scala object serialization:",source:"@site/docs/guide/scala_guide.md",sourceDirName:"guide",slug:"/guide/scala_guide",permalink:"/docs/guide/scala_guide",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/fury-site/tree/main/docs/guide/scala_guide.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Scala Serialization Guide",sidebar_position:4,id:"scala_guide"},sidebar:"guideSidebar",previous:{title:"Type Mapping of Xlang Serialization",permalink:"/docs/guide/xlang_type_mapping"},next:{title:"GraalVM Guide",permalink:"/docs/guide/graalvm_guide"}},c={},o=[{value:"Install",id:"install",level:2},{value:"Quict Start",id:"quict-start",level:2},{value:"Fury creation",id:"fury-creation",level:2},{value:"Serialize case object",id:"serialize-case-object",level:2},{value:"Serialize pojo",id:"serialize-pojo",level:2},{value:"Serialize object singleton",id:"serialize-object-singleton",level:2},{value:"Serialize collection",id:"serialize-collection",level:2},{value:"Serialize Tuple",id:"serialize-tuple",level:2},{value:"Serialize Enum",id:"serialize-enum",level:2},{value:"Scala3 Enum",id:"scala3-enum",level:3},{value:"Scala2 Enum",id:"scala2-enum",level:3},{value:"Serialize Option",id:"serialize-option",level:2}];function u(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"Fury supports all scala object serialization:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"case"})," class serialization supported"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"pojo/bean"})," class serialization supported"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"object"})," singleton serialization supported"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"collection"})," serialization supported"]}),"\n",(0,n.jsxs)(i.li,{children:["other types such as ",(0,n.jsx)(i.code,{children:"tuple/either"})," and basic types are all supported too."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Scala 2 and 3 are both supported."}),"\n",(0,n.jsx)(i.h2,{id:"install",children:"Install"}),"\n",(0,n.jsx)(i.p,{children:"To add a dependency on Fury scala for scala 2 with sbt, use the following:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sbt",children:'libraryDependencies += "org.apache.fury" % "fury-scala_2.13" % "0.10.0"\n'})}),"\n",(0,n.jsx)(i.p,{children:"To add a dependency on Fury scala for scala 3 with sbt, use the following:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sbt",children:'libraryDependencies += "org.apache.fury" % "fury-scala_3" % "0.10.0"\n'})}),"\n",(0,n.jsx)(i.h2,{id:"quict-start",children:"Quict Start"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-scala",children:'case class Person(name: String, id: Long, github: String)\ncase class Point(x : Int, y : Int, z : Int)\n\nobject ScalaExample {\n  val fury: Fury = Fury.builder().withScalaOptimizationEnabled(true).build()\n  // Register optimized fury serializers for scala\n  ScalaSerializers.registerSerializers(fury)\n  fury.register(classOf[Person])\n  fury.register(classOf[Point])\n\n  def main(args: Array[String]): Unit = {\n    val p = Person("Shawn Yang", 1, "https://github.com/chaokunyang")\n    println(fury.deserialize(fury.serialize(p)))\n    println(fury.deserialize(fury.serialize(Point(1, 2, 3))))\n  }\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"fury-creation",children:"Fury creation"}),"\n",(0,n.jsx)(i.p,{children:"When using fury for scala serialization, you should create fury at least with following options:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-scala",children:"import org.apache.fury.Fury\nimport org.apache.fury.serializer.scala.ScalaSerializers\n\nval fury = Fury.builder().withScalaOptimizationEnabled(true).build()\n\n// Register optimized fury serializers for scala\nScalaSerializers.registerSerializers(fury)\n"})}),"\n",(0,n.jsx)(i.p,{children:"Depending on the object types you serialize, you may need to register some scala internal types:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-scala",children:'fury.register(Class.forName("scala.Enumeration.Val"))\n'})}),"\n",(0,n.jsxs)(i.p,{children:["If you want to avoid such registration, you can disable class registration by ",(0,n.jsx)(i.code,{children:"FuryBuilder#requireClassRegistration(false)"}),".\nNote that this option allow to deserialize objects unknown types, more flexible but may be insecure if the classes contains malicious code."]}),"\n",(0,n.jsxs)(i.p,{children:["And circular references are common in scala, ",(0,n.jsx)(i.code,{children:"Reference tracking"})," should be enabled by ",(0,n.jsx)(i.code,{children:"FuryBuilder#withRefTracking(true)"}),". If you don't enable reference tracking, ",(0,n.jsx)(i.a,{href:"https://github.com/apache/fury/issues/1032",children:"StackOverflowError"})," may happen for some scala versions when serializing scala Enumeration."]}),"\n",(0,n.jsx)(i.p,{children:"Note that fury instance should be shared between multiple serialization, the creation of fury instance is not cheap."}),"\n",(0,n.jsxs)(i.p,{children:["If you use shared fury instance across multiple threads, you should create ",(0,n.jsx)(i.code,{children:"ThreadSafeFury"})," instead by ",(0,n.jsx)(i.code,{children:"FuryBuilder#buildThreadSafeFury()"})," instead."]}),"\n",(0,n.jsx)(i.h2,{id:"serialize-case-object",children:"Serialize case object"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-scala",children:'case class Person(github: String, age: Int, id: Long)\nval p = Person("https://github.com/chaokunyang", 18, 1)\nprintln(fury.deserialize(fury.serialize(p)))\nprintln(fury.deserializeJavaObject(fury.serializeJavaObject(p)))\n'})}),"\n",(0,n.jsx)(i.h2,{id:"serialize-pojo",children:"Serialize pojo"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-scala",children:'class Foo(f1: Int, f2: String) {\n  override def toString: String = s"Foo($f1, $f2)"\n}\nprintln(fury.deserialize(fury.serialize(Foo(1, "chaokunyang"))))\n'})}),"\n",(0,n.jsx)(i.h2,{id:"serialize-object-singleton",children:"Serialize object singleton"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-scala",children:"object singleton {\n}\nval o1 = fury.deserialize(fury.serialize(singleton))\nval o2 = fury.deserialize(fury.serialize(singleton))\nprintln(o1 == o2)\n"})}),"\n",(0,n.jsx)(i.h2,{id:"serialize-collection",children:"Serialize collection"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-scala",children:'val seq = Seq(1,2)\nval list = List("a", "b")\nval map = Map("a" -> 1, "b" -> 2)\nprintln(fury.deserialize(fury.serialize(seq)))\nprintln(fury.deserialize(fury.serialize(list)))\nprintln(fury.deserialize(fury.serialize(map)))\n'})}),"\n",(0,n.jsx)(i.h2,{id:"serialize-tuple",children:"Serialize Tuple"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-scala",children:'val tuple = Tuple2(100, 10000L)\nprintln(fury.deserialize(fury.serialize(tuple)))\nval tuple = Tuple4(100, 10000L, 10000L, "str")\nprintln(fury.deserialize(fury.serialize(tuple)))\n'})}),"\n",(0,n.jsx)(i.h2,{id:"serialize-enum",children:"Serialize Enum"}),"\n",(0,n.jsx)(i.h3,{id:"scala3-enum",children:"Scala3 Enum"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-scala",children:"enum Color { case Red, Green, Blue }\nprintln(fury.deserialize(fury.serialize(Color.Green)))\n"})}),"\n",(0,n.jsx)(i.h3,{id:"scala2-enum",children:"Scala2 Enum"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-scala",children:"object ColorEnum extends Enumeration {\n  type ColorEnum = Value\n  val Red, Green, Blue = Value\n}\nprintln(fury.deserialize(fury.serialize(ColorEnum.Green)))\n"})}),"\n",(0,n.jsx)(i.h2,{id:"serialize-option",children:"Serialize Option"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-scala",children:"val opt: Option[Long] = Some(100)\nprintln(fury.deserialize(fury.serialize(opt)))\nval opt1: Option[Long] = None\nprintln(fury.deserialize(fury.serialize(opt1)))\n"})})]})}function d(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,i,a)=>{a.d(i,{Z:()=>t,a:()=>s});var n=a(67294);const l={},r=n.createContext(l);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);
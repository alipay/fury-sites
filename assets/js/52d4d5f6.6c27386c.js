"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[4404],{3075:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(5893),a=n(1151);const s={title:"GraalVM Guide",sidebar_position:6,id:"graalvm_guide"},t=void 0,l={id:"guide/graalvm_guide",title:"GraalVM Guide",description:"GraalVM Native Image",source:"@site/docs/guide/graalvm_guide.md",sourceDirName:"guide",slug:"/guide/graalvm_guide",permalink:"/docs/guide/graalvm_guide",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/fury-site/tree/main/docs/guide/graalvm_guide.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"GraalVM Guide",sidebar_position:6,id:"graalvm_guide"},sidebar:"guideSidebar",previous:{title:"Scala Serialization Guide",permalink:"/docs/guide/scala_guide"},next:{title:"Development",permalink:"/docs/guide/development"}},o={},c=[{value:"GraalVM Native Image",id:"graalvm-native-image",level:2},{value:"Not thread-safe Fury",id:"not-thread-safe-fury",level:2},{value:"Thread-safe Fury",id:"thread-safe-fury",level:2},{value:"Framework Integration",id:"framework-integration",level:2},{value:"Benchmark",id:"benchmark",level:2},{value:"Struct Benchmark",id:"struct-benchmark",level:3},{value:"Class Fields",id:"class-fields",level:4},{value:"Benchmark Results",id:"benchmark-results",level:4},{value:"Pojo Benchmark",id:"pojo-benchmark",level:3},{value:"Class Fields",id:"class-fields-1",level:4},{value:"Benchmark Results",id:"benchmark-results-1",level:4}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"graalvm-native-image",children:"GraalVM Native Image"}),"\n",(0,i.jsxs)(r.p,{children:["GraalVM ",(0,i.jsx)(r.code,{children:"native image"})," can compile java code into native code ahead to build faster, smaller, leaner applications.\nThe native image doesn't have a JIT compiler to compile bytecode into machine code, and doesn't support\nreflection unless configure reflection file."]}),"\n",(0,i.jsxs)(r.p,{children:["Fury runs on GraalVM native image pretty well. Fury generates all serializer code for ",(0,i.jsx)(r.code,{children:"Fury JIT framework"})," and ",(0,i.jsx)(r.code,{children:"MethodHandle/LambdaMetafactory"})," at graalvm build time. Then use those generated code for serialization at runtime without\nany extra cost, the performance is great."]}),"\n",(0,i.jsxs)(r.p,{children:["In order to use Fury on graalvm native image, you must create Fury as an ",(0,i.jsx)(r.strong,{children:"static"})," field of a class, and ",(0,i.jsx)(r.strong,{children:"register"})," all classes at\nthe enclosing class initialize time. Then configure ",(0,i.jsx)(r.code,{children:"native-image.properties"})," under\n",(0,i.jsx)(r.code,{children:"resources/META-INF/native-image/$xxx/native-image.propertie"})," to tell graalvm to init the class at native image\nbuild time. For example, here we configure ",(0,i.jsx)(r.code,{children:"org.apache.fury.graalvm.Example"})," class be init at build time:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-properties",children:"Args = --initialize-at-build-time=org.apache.fury.graalvm.Example\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Another benefit using fury is that you don't have to configure ",(0,i.jsx)(r.a,{href:"https://www.graalvm.org/latest/reference-manual/native-image/metadata/#specifying-reflection-metadata-in-json",children:"reflection json"})," and\n",(0,i.jsx)(r.a,{href:"https://www.graalvm.org/latest/reference-manual/native-image/metadata/#serialization",children:"serialization json"}),", which is\nvery tedious, cumbersome and inconvenient. When using fury, you just need to invoke\n",(0,i.jsx)(r.code,{children:"org.apache.fury.Fury.register(Class<?>, boolean)"})," for every type you want to serialize."]}),"\n",(0,i.jsxs)(r.p,{children:["Note that Fury ",(0,i.jsx)(r.code,{children:"asyncCompilationEnabled"})," option will be disabled automatically for graalvm native image since graalvm\nnative image doesn't support JIT at the image run time."]}),"\n",(0,i.jsx)(r.h2,{id:"not-thread-safe-fury",children:"Not thread-safe Fury"}),"\n",(0,i.jsx)(r.p,{children:"Example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'import org.apache.fury.Fury;\nimport org.apache.fury.util.Preconditions;\n\nimport java.util.List;\nimport java.util.Map;\n\npublic class Example {\n  public record Record (\n    int f1,\n    String f2,\n    List<String> f3,\n    Map<String, Long> f4) {\n  }\n\n  static Fury fury;\n\n  static {\n    fury = Fury.builder().build();\n    // register and generate serializer code.\n    fury.register(Record.class, true);\n  }\n\n  public static void main(String[] args) {\n    Record record = new Record(10, "abc", List.of("str1", "str2"), Map.of("k1", 10L, "k2", 20L));\n    System.out.println(record);\n    byte[] bytes = fury.serialize(record);\n    Object o = fury.deserialize(bytes);\n    System.out.println(o);\n    Preconditions.checkArgument(record.equals(o));\n  }\n}\n'})}),"\n",(0,i.jsxs)(r.p,{children:["Then add ",(0,i.jsx)(r.code,{children:"org.apache.fury.graalvm.Example"})," build time init to ",(0,i.jsx)(r.code,{children:"native-image.properties"})," configuration:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-properties",children:"Args = --initialize-at-build-time=org.apache.fury.graalvm.Example\n"})}),"\n",(0,i.jsx)(r.h2,{id:"thread-safe-fury",children:"Thread-safe Fury"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'import org.apache.fury.Fury;\nimport org.apache.fury.ThreadLocalFury;\nimport org.apache.fury.ThreadSafeFury;\nimport org.apache.fury.util.Preconditions;\n\nimport java.util.List;\nimport java.util.Map;\n\npublic class ThreadSafeExample {\n  public record Foo (\n    int f1,\n    String f2,\n    List<String> f3,\n    Map<String, Long> f4) {\n  }\n\n  static ThreadSafeFury fury;\n\n  static {\n    fury = new ThreadLocalFury(classLoader -> {\n      Fury f = Fury.builder().build();\n      // register and generate serializer code.\n      f.register(Foo.class, true);\n      return f;\n    });\n  }\n\n  public static void main(String[] args) {\n    System.out.println(fury.deserialize(fury.serialize("abc")));\n    System.out.println(fury.deserialize(fury.serialize(List.of(1,2,3))));\n    System.out.println(fury.deserialize(fury.serialize(Map.of("k1", 1, "k2", 2))));\n    Foo foo = new Foo(10, "abc", List.of("str1", "str2"), Map.of("k1", 10L, "k2", 20L));\n    System.out.println(foo);\n    byte[] bytes = fury.serialize(foo);\n    Object o = fury.deserialize(bytes);\n    System.out.println(o);\n  }\n}\n'})}),"\n",(0,i.jsxs)(r.p,{children:["Then add ",(0,i.jsx)(r.code,{children:"org.apache.fury.graalvm.ThreadSafeExample"})," build time init to ",(0,i.jsx)(r.code,{children:"native-image.properties"})," configuration:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-properties",children:"Args = --initialize-at-build-time=org.apache.fury.graalvm.ThreadSafeExample\n"})}),"\n",(0,i.jsx)(r.h2,{id:"framework-integration",children:"Framework Integration"}),"\n",(0,i.jsxs)(r.p,{children:["For framework developers, if you want to integrate fury for serialization, you can provided a configuration file to let\nthe users to list all the classes they want to serialize, then you can load those classes and invoke\n",(0,i.jsx)(r.code,{children:"org.apache.fury.Fury.register(Class<?>, boolean)"})," to register those classes in your Fury integration class, and configure that\nclass be initialized at graalvm native image build time."]}),"\n",(0,i.jsx)(r.h2,{id:"benchmark",children:"Benchmark"}),"\n",(0,i.jsx)(r.p,{children:"Here we give two class benchmarks between Fury and Graalvm Serialization."}),"\n",(0,i.jsx)(r.p,{children:"When Fury compression is disabled:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Struct: Fury is ",(0,i.jsx)(r.code,{children:"46x speed, 43% size"})," compared to JDK."]}),"\n",(0,i.jsxs)(r.li,{children:["Pojo: Fury is ",(0,i.jsx)(r.code,{children:"12x speed, 56% size"})," compared to JDK."]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"When Fury compression is enabled:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Struct: Fury is ",(0,i.jsx)(r.code,{children:"24x speed, 31% size"})," compared to JDK."]}),"\n",(0,i.jsxs)(r.li,{children:["Pojo: Fury is ",(0,i.jsx)(r.code,{children:"12x speed, 48% size"})," compared to JDK."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["See [",(0,i.jsx)(r.a,{href:"https://github.com/apache/fury/blob/main/integration_tests/graalvm_tests/src/main/java/org/apache/fury/graalvm/Benchmark.java",children:"Benchmark.java"}),"] for benchmark code."]}),"\n",(0,i.jsx)(r.h3,{id:"struct-benchmark",children:"Struct Benchmark"}),"\n",(0,i.jsx)(r.h4,{id:"class-fields",children:"Class Fields"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:"public class Struct implements Serializable {\n  public int f1;\n  public long f2;\n  public float f3;\n  public double f4;\n  public int f5;\n  public long f6;\n  public float f7;\n  public double f8;\n  public int f9;\n  public long f10;\n  public float f11;\n  public double f12;\n}\n"})}),"\n",(0,i.jsx)(r.h4,{id:"benchmark-results",children:"Benchmark Results"}),"\n",(0,i.jsx)(r.p,{children:"No compression:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"Benchmark repeat number: 400000\nObject type: class org.apache.fury.graalvm.Struct\nCompress number: false\nFury size: 76.0\nJDK size: 178.0\nFury serialization took mills: 49\nJDK serialization took mills: 2254\nCompare speed: Fury is 45.70x speed of JDK\nCompare size: Fury is 0.43x size of JDK\n"})}),"\n",(0,i.jsx)(r.p,{children:"Compress number:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"Benchmark repeat number: 400000\nObject type: class org.apache.fury.graalvm.Struct\nCompress number: true\nFury size: 55.0\nJDK size: 178.0\nFury serialization took mills: 130\nJDK serialization took mills: 3161\nCompare speed: Fury is 24.16x speed of JDK\nCompare size: Fury is 0.31x size of JDK\n"})}),"\n",(0,i.jsx)(r.h3,{id:"pojo-benchmark",children:"Pojo Benchmark"}),"\n",(0,i.jsx)(r.h4,{id:"class-fields-1",children:"Class Fields"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:"public class Foo implements Serializable {\n  int f1;\n  String f2;\n  List<String> f3;\n  Map<String, Long> f4;\n}\n"})}),"\n",(0,i.jsx)(r.h4,{id:"benchmark-results-1",children:"Benchmark Results"}),"\n",(0,i.jsx)(r.p,{children:"No compression:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"Benchmark repeat number: 400000\nObject type: class org.apache.fury.graalvm.Foo\nCompress number: false\nFury size: 541.0\nJDK size: 964.0\nFury serialization took mills: 1663\nJDK serialization took mills: 16266\nCompare speed: Fury is 12.19x speed of JDK\nCompare size: Fury is 0.56x size of JDK\n"})}),"\n",(0,i.jsx)(r.p,{children:"Compress number:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"Benchmark repeat number: 400000\nObject type: class org.apache.fury.graalvm.Foo\nCompress number: true\nFury size: 459.0\nJDK size: 964.0\nFury serialization took mills: 1289\nJDK serialization took mills: 15069\nCompare speed: Fury is 12.11x speed of JDK\nCompare size: Fury is 0.48x size of JDK\n"})})]})}function u(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>t});var i=n(7294);const a={},s=i.createContext(a);function t(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);
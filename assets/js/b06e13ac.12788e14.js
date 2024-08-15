"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[3434],{2390:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=a(5893),r=a(1151);const s={id:"usage",title:"Usage",sidebar_position:1},i=void 0,l={id:"start/usage",title:"Usage",description:"Java Serialization",source:"@site/docs/start/usage.md",sourceDirName:"start",slug:"/start/usage",permalink:"/docs/start/usage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"usage",title:"Usage",sidebar_position:1},sidebar:"startSidebar",previous:{title:"Install",permalink:"/docs/start/install"}},o={},u=[{value:"Java Serialization",id:"java-serialization",level:2},{value:"CrossLanguage Serialization",id:"crosslanguage-serialization",level:2},{value:"Java",id:"java",level:3},{value:"Python",id:"python",level:3},{value:"Golang",id:"golang",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Rust",id:"rust",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"java-serialization",children:"Java Serialization"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"import java.util.List;\nimport java.util.Arrays;\nimport io.fury.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    SomeClass object = new SomeClass();\n    // Note that Fury instances should be reused between\n    // multiple serializations of different objects.\n    Fury fury = Fury.builder().withLanguage(Language.JAVA)\n      // Allow to deserialize objects unknown types,\n      // more flexible but less secure.\n      // .withSecureMode(false)\n      .build();\n    // Registering types can reduce class name serialization overhead, but not mandatory.\n    // If secure mode enabled, all custom types must be registered.\n    fury.register(SomeClass.class);\n    byte[] bytes = fury.serialize(object);\n    System.out.println(fury.deserialize(bytes));\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"crosslanguage-serialization",children:"CrossLanguage Serialization"}),"\n",(0,t.jsx)(n.h3,{id:"java",children:"Java"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import com.google.common.collect.ImmutableMap;\nimport io.fury.*;\n\nimport java.util.Map;\n\npublic class ReferenceExample {\n  public static class SomeClass {\n    SomeClass f1;\n    Map<String, String> f2;\n    Map<String, String> f3;\n  }\n\n  public static Object createObject() {\n    SomeClass obj = new SomeClass();\n    obj.f1 = obj;\n    obj.f2 = ImmutableMap.of("k1", "v1", "k2", "v2");\n    obj.f3 = obj.f2;\n    return obj;\n  }\n\n  // mvn exec:java -Dexec.mainClass="io.fury.examples.ReferenceExample"\n  public static void main(String[] args) {\n    Fury fury = Fury.builder().withLanguage(Language.XLANG)\n      .withRefTracking(true).build();\n    fury.register(SomeClass.class, "example.SomeClass");\n    byte[] bytes = fury.serialize(createObject());\n    // bytes can be data serialized by other languages.\n    System.out.println(fury.deserialize(bytes));\n    ;\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"python",children:"Python"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from typing import Dict\nimport pyfury\n\nclass SomeClass:\n    f1: "SomeClass"\n    f2: Dict[str, str]\n    f3: Dict[str, str]\n\nfury = pyfury.Fury(ref_tracking=True)\nfury.register_class(SomeClass, "example.SomeClass")\nobj = SomeClass()\nobj.f2 = {"k1": "v1", "k2": "v2"}\nobj.f1, obj.f3 = obj, obj.f2\ndata = fury.serialize(obj)\n# bytes can be data serialized by other languages.\nprint(fury.deserialize(data))\n'})}),"\n",(0,t.jsx)(n.h3,{id:"golang",children:"Golang"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n "fmt"\n furygo "github.com/apache/fury/go/fury"\n)\n\nfunc main() {\n type SomeClass struct {\n  F1 *SomeClass\n  F2 map[string]string\n  F3 map[string]string\n }\n fury := furygo.NewFury(true)\n if err := fury.RegisterTagType("example.SomeClass", SomeClass{}); err != nil {\n  panic(err)\n }\n value := &SomeClass{F2: map[string]string{"k1": "v1", "k2": "v2"}}\n value.F3 = value.F2\n value.F1 = value\n bytes, err := fury.Marshal(value)\n if err != nil {\n }\n var newValue interface{}\n // bytes can be data serialized by other languages.\n if err := fury.Unmarshal(bytes, &newValue); err != nil {\n  panic(err)\n }\n fmt.Println(newValue)\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"javascript",children:"JavaScript"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import Fury, { Type } from '@furyjs/fury';\n\n/**\n * @furyjs/hps use v8's fast-calls-api that can be called directly by jit, ensure that the version of Node is 20 or above.\n * Experimental feature, installation success cannot be guaranteed at this moment\n * If you are unable to install the module, replace it with `const hps = null;`\n **/\nimport hps from '@furyjs/hps';\n\n// Now we describe data structures using JSON, but in the future, we will use more ways.\nconst description = Type.object('example.foo', {\n  foo: Type.string(),\n});\nconst fury = new Fury({ hps });\nconst { serialize, deserialize } = fury.registerSerializer(description);\nconst input = serialize({ foo: 'hello fury' });\nconst result = deserialize(input);\nconsole.log(result);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"rust",children:"Rust"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use fury::{from_buffer, to_buffer, Fury};\n\n#[derive(Fury, Debug, PartialEq)]\n#[tag("example.foo")]\nstruct Animal {\n    name: String,\n    category: String,\n}\n\n#[derive(Fury, Debug, PartialEq)]\n#[tag("example.bar")]\nstruct Person {\n    name: String,\n    age: u32,\n    pets: Vec<Animal>,\n}\n\nfn main() {\n    let penson = Person {\n        name: "hello".to_string(),\n        age: 12,\n        pets: vec![\n            Animal {\n                name: "world1".to_string(),\n                category: "cat".to_string(),\n            },\n            Animal {\n                name: "world2".to_string(),\n                category: "dog".to_string(),\n            },\n        ],\n    };\n    let bin = to_buffer(&penson);\n    let obj: Person = from_buffer(&bin).expect("should success");\n    assert_eq!(obj, penson);\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>i});var t=a(7294);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
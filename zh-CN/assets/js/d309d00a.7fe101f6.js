"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[7484],{6897:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(5893),t=r(1151);const i={title:"Xlang Serialization Guide",sidebar_position:2,id:"xlang_object_graph_guide"},s=void 0,o={id:"guide/xlang_object_graph_guide",title:"Xlang Serialization Guide",description:"Cross-language object graph serialization",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guide/xlang_serialization_guide.md",sourceDirName:"guide",slug:"/guide/xlang_object_graph_guide",permalink:"/zh-CN/docs/guide/xlang_object_graph_guide",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/fury-site/tree/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/guide/xlang_serialization_guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Xlang Serialization Guide",sidebar_position:2,id:"xlang_object_graph_guide"},sidebar:"guideSidebar",previous:{title:"row format \u6307\u5357",permalink:"/zh-CN/docs/guide/row_format_guide"},next:{title:"Type Mapping of Xlang Serialization",permalink:"/zh-CN/docs/guide/xlang_type_mapping"}},l={},c=[{value:"Cross-language object graph serialization",id:"cross-language-object-graph-serialization",level:2},{value:"Serialize built-in types",id:"serialize-built-in-types",level:3},{value:"Serialize custom types",id:"serialize-custom-types",level:3},{value:"Serialize Shared Reference and Circular Reference",id:"serialize-shared-reference-and-circular-reference",level:3},{value:"Zero-Copy Serialization",id:"zero-copy-serialization",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"cross-language-object-graph-serialization",children:"Cross-language object graph serialization"}),"\n",(0,a.jsx)(n.h3,{id:"serialize-built-in-types",children:"Serialize built-in types"}),"\n",(0,a.jsx)(n.p,{children:"Common types can be serialized automatically: primitive numeric types, string, binary, array, list, map and so on."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Java"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import org.apache.fury.*;\nimport org.apache.fury.config.*;\n\nimport java.util.*;\n\npublic class Example1 {\n  public static void main(String[] args) {\n    Fury fury = Fury.builder().withLanguage(Language.XLANG).build();\n    List<Object> list = ofArrayList(true, false, "str", -1.1, 1, new int[100], new double[20]);\n    byte[] bytes = fury.serialize(list);\n    // bytes can be data serialized by other languages.\n    fury.deserialize(bytes);\n    Map<Object, Object> map = new HashMap<>();\n    map.put("k1", "v1");\n    map.put("k2", list);\n    map.put("k3", -1);\n    bytes = fury.serialize(map);\n    // bytes can be data serialized by other languages.\n    fury.deserialize(bytes);\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Python"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import pyfury\nimport numpy as np\n\nfury = pyfury.Fury()\nobject_list = [True, False, "str", -1.1, 1,\n               np.full(100, 0, dtype=np.int32), np.full(20, 0.0, dtype=np.double)]\ndata = fury.serialize(object_list)\n# bytes can be data serialized by other languages.\nnew_list = fury.deserialize(data)\nobject_map = {"k1": "v1", "k2": object_list, "k3": -1}\ndata = fury.serialize(object_map)\n# bytes can be data serialized by other languages.\nnew_map = fury.deserialize(data)\nprint(new_map)\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Golang"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport furygo "github.com/apache/fury/fury/go/fury"\nimport "fmt"\n\nfunc main() {\n list := []interface{}{true, false, "str", -1.1, 1, make([]int32, 10), make([]float64, 20)}\n fury := furygo.NewFury()\n bytes, err := fury.Marshal(list)\n if err != nil {\n  panic(err)\n }\n var newValue interface{}\n // bytes can be data serialized by other languages.\n if err := fury.Unmarshal(bytes, &newValue); err != nil {\n  panic(err)\n }\n fmt.Println(newValue)\n dict := map[string]interface{}{\n  "k1": "v1",\n  "k2": list,\n  "k3": -1,\n }\n bytes, err = fury.Marshal(dict)\n if err != nil {\n  panic(err)\n }\n // bytes can be data serialized by other languages.\n if err := fury.Unmarshal(bytes, &newValue); err != nil {\n  panic(err)\n }\n fmt.Println(newValue)\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"JavaScript"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import Fury from '@furyjs/fury';\n\n/**\n * @furyjs/hps use v8's fast-calls-api that can be called directly by jit, ensure that the version of Node is 20 or above.\n * Experimental feature, installation success cannot be guaranteed at this moment\n * If you are unable to install the module, replace it with `const hps = null;`\n **/\nimport hps from '@furyjs/hps';\n\nconst fury = new Fury({ hps });\nconst input = fury.serialize('hello fury');\nconst result = fury.deserialize(input);\nconsole.log(result);\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Rust"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'use chrono::{NaiveDate, NaiveDateTime};\nuse fury::{from_buffer, to_buffer, Fury};\nuse std::collections::HashMap;\n\nfn run() {\n    let bin: Vec<u8> = to_buffer(&"hello".to_string());\n    let obj: String = from_buffer(&bin).expect("should success");\n    assert_eq!("hello".to_string(), obj);\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"serialize-custom-types",children:"Serialize custom types"}),"\n",(0,a.jsx)(n.p,{children:"Serializing user-defined types needs registering the custom type using the register API to establish the mapping relationship between the type in different languages."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Java"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import org.apache.fury.*;\nimport org.apache.fury.config.*;\nimport java.util.*;\n\npublic class Example2 {\n  public static class SomeClass1 {\n    Object f1;\n    Map<Byte, Integer> f2;\n  }\n\n  public static class SomeClass2 {\n    Object f1;\n    String f2;\n    List<Object> f3;\n    Map<Byte, Integer> f4;\n    Byte f5;\n    Short f6;\n    Integer f7;\n    Long f8;\n    Float f9;\n    Double f10;\n    short[] f11;\n    List<Short> f12;\n  }\n\n  public static Object createObject() {\n    SomeClass1 obj1 = new SomeClass1();\n    obj1.f1 = true;\n    obj1.f2 = ofHashMap((byte) -1, 2);\n    SomeClass2 obj = new SomeClass2();\n    obj.f1 = obj1;\n    obj.f2 = "abc";\n    obj.f3 = ofArrayList("abc", "abc");\n    obj.f4 = ofHashMap((byte) 1, 2);\n    obj.f5 = Byte.MAX_VALUE;\n    obj.f6 = Short.MAX_VALUE;\n    obj.f7 = Integer.MAX_VALUE;\n    obj.f8 = Long.MAX_VALUE;\n    obj.f9 = 1.0f / 2;\n    obj.f10 = 1 / 3.0;\n    obj.f11 = new short[]{(short) 1, (short) 2};\n    obj.f12 = ofArrayList((short) -1, (short) 4);\n    return obj;\n  }\n\n  // mvn exec:java -Dexec.mainClass="org.apache.fury.examples.Example2"\n  public static void main(String[] args) {\n    Fury fury = Fury.builder().withLanguage(Language.XLANG).build();\n    fury.register(SomeClass1.class, "example.SomeClass1");\n    fury.register(SomeClass2.class, "example.SomeClass2");\n    byte[] bytes = fury.serialize(createObject());\n    // bytes can be data serialized by other languages.\n    System.out.println(fury.deserialize(bytes));\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Python"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from dataclasses import dataclass\nfrom typing import List, Dict, Any\nimport pyfury, array\n\n\n@dataclass\nclass SomeClass1:\n    f1: Any\n    f2: Dict[pyfury.Int8Type, pyfury.Int32Type]\n\n\n@dataclass\nclass SomeClass2:\n    f1: Any = None\n    f2: str = None\n    f3: List[str] = None\n    f4: Dict[pyfury.Int8Type, pyfury.Int32Type] = None\n    f5: pyfury.Int8Type = None\n    f6: pyfury.Int16Type = None\n    f7: pyfury.Int32Type = None\n    # int type will be taken as `pyfury.Int64Type`.\n    # use `pyfury.Int32Type` for type hint if peer\n    # are more narrow type.\n    f8: int = None\n    f9: pyfury.Float32Type = None\n    # float type will be taken as `pyfury.Float64Type`\n    f10: float = None\n    f11: pyfury.Int16ArrayType = None\n    f12: List[pyfury.Int16Type] = None\n\n\nif __name__ == "__main__":\n    f = pyfury.Fury()\n    f.register_class(SomeClass1, type_tag="example.SomeClass1")\n    f.register_class(SomeClass2, type_tag="example.SomeClass2")\n    obj1 = SomeClass1(f1=True, f2={-1: 2})\n    obj = SomeClass2(\n        f1=obj1,\n        f2="abc",\n        f3=["abc", "abc"],\n        f4={1: 2},\n        f5=2 ** 7 - 1,\n        f6=2 ** 15 - 1,\n        f7=2 ** 31 - 1,\n        f8=2 ** 63 - 1,\n        f9=1.0 / 2,\n        f10=1 / 3.0,\n        f11=array.array("h", [1, 2]),\n        f12=[-1, 4],\n    )\n    data = f.serialize(obj)\n    # bytes can be data serialized by other languages.\n    print(f.deserialize(data))\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Golang"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport furygo "github.com/apache/fury/fury/go/fury"\nimport "fmt"\n\nfunc main() {\n type SomeClass1 struct {\n  F1  interface{}\n  F2  string\n  F3  []interface{}\n  F4  map[int8]int32\n  F5  int8\n  F6  int16\n  F7  int32\n  F8  int64\n  F9  float32\n  F10 float64\n  F11 []int16\n  F12 fury.Int16Slice\n }\n\n type SomeClas2 struct {\n  F1 interface{}\n  F2 map[int8]int32\n }\n fury := furygo.NewFury()\n if err := fury.RegisterTagType("example.SomeClass1", SomeClass1{}); err != nil {\n  panic(err)\n }\n if err := fury.RegisterTagType("example.SomeClass2", SomeClass2{}); err != nil {\n  panic(err)\n }\n obj1 := &SomeClass1{}\n obj1.F1 = true\n obj1.F2 = map[int8]int32{-1: 2}\n obj := &SomeClass1{}\n obj.F1 = obj1\n obj.F2 = "abc"\n obj.F3 = []interface{}{"abc", "abc"}\n f4 := map[int8]int32{1: 2}\n obj.F4 = f4\n obj.F5 = fury.MaxInt8\n obj.F6 = fury.MaxInt16\n obj.F7 = fury.MaxInt32\n obj.F8 = fury.MaxInt64\n obj.F9 = 1.0 / 2\n obj.F10 = 1 / 3.0\n obj.F11 = []int16{1, 2}\n obj.F12 = []int16{-1, 4}\n bytes, err := fury.Marshal(obj);\n if err != nil {\n  panic(err)\n }\n var newValue interface{}\n // bytes can be data serialized by other languages.\n if err := fury.Unmarshal(bytes, &newValue); err != nil {\n  panic(err)\n }\n fmt.Println(newValue)\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"JavaScript"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import Fury, { Type, InternalSerializerType } from '@furyjs/fury';\n\n/**\n * @furyjs/hps use v8's fast-calls-api that can be called directly by jit, ensure that the version of Node is 20 or above.\n * Experimental feature, installation success cannot be guaranteed at this moment\n * If you are unable to install the module, replace it with `const hps = null;`\n **/\nimport hps from '@furyjs/hps';\n\n// Now we describe data structures using JSON, but in the future, we will use more ways.\nconst description = Type.object('example.foo', {\n  foo: Type.string(),\n});\nconst fury = new Fury({ hps });\nconst { serialize, deserialize } = fury.registerSerializer(description);\nconst input = serialize({ foo: 'hello fury' });\nconst result = deserialize(input);\nconsole.log(result);\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Rust"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'use chrono::{NaiveDate, NaiveDateTime};\nuse fury::{from_buffer, to_buffer, Fury};\nuse std::collections::HashMap;\n\n#[test]\nfn complex_struct() {\n    #[derive(Fury, Debug, PartialEq)]\n    #[tag("example.foo2")]\n    struct Animal {\n        category: String,\n    }\n\n    #[derive(Fury, Debug, PartialEq)]\n    #[tag("example.foo")]\n    struct Person {\n        c1: Vec<u8>,  // binary\n        c2: Vec<i16>, // primitive array\n        animal: Vec<Animal>,\n        c3: Vec<Vec<u8>>,\n        name: String,\n        c4: HashMap<String, String>,\n        age: u16,\n        op: Option<String>,\n        op2: Option<String>,\n        date: NaiveDate,\n        time: NaiveDateTime,\n        c5: f32,\n        c6: f64,\n    }\n    let person: Person = Person {\n        c1: vec![1, 2, 3],\n        c2: vec![5, 6, 7],\n        c3: vec![vec![1, 2], vec![1, 3]],\n        animal: vec![Animal {\n            category: "Dog".to_string(),\n        }],\n        c4: HashMap::from([\n            ("hello1".to_string(), "hello2".to_string()),\n            ("hello2".to_string(), "hello3".to_string()),\n        ]),\n        age: 12,\n        name: "helo".to_string(),\n        op: Some("option".to_string()),\n        op2: None,\n        date: NaiveDate::from_ymd_opt(2025, 12, 12).unwrap(),\n        time: NaiveDateTime::from_timestamp_opt(1689912359, 0).unwrap(),\n        c5: 2.0,\n        c6: 4.0,\n    };\n\n    let bin: Vec<u8> = to_buffer(&person);\n    let obj: Person = from_buffer(&bin).expect("should success");\n    assert_eq!(person, obj);\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"serialize-shared-reference-and-circular-reference",children:"Serialize Shared Reference and Circular Reference"}),"\n",(0,a.jsx)(n.p,{children:"Shared reference and circular reference can be serialized automatically, no duplicate data or recursion error."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Java"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import org.apache.fury.*;\nimport org.apache.fury.config.*;\nimport java.util.*;\n\npublic class ReferenceExample {\n  public static class SomeClass {\n    SomeClass f1;\n    Map<String, String> f2;\n    Map<String, String> f3;\n  }\n\n  public static Object createObject() {\n    SomeClass obj = new SomeClass();\n    obj.f1 = obj;\n    obj.f2 = ofHashMap("k1", "v1", "k2", "v2");\n    obj.f3 = obj.f2;\n    return obj;\n  }\n\n  // mvn exec:java -Dexec.mainClass="org.apache.fury.examples.ReferenceExample"\n  public static void main(String[] args) {\n    Fury fury = Fury.builder().withLanguage(Language.XLANG)\n      .withRefTracking(true).build();\n    fury.register(SomeClass.class, "example.SomeClass");\n    byte[] bytes = fury.serialize(createObject());\n    // bytes can be data serialized by other languages.\n    System.out.println(fury.deserialize(bytes));\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Python"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from typing import Dict\nimport pyfury\n\nclass SomeClass:\n    f1: "SomeClass"\n    f2: Dict[str, str]\n    f3: Dict[str, str]\n\nfury = pyfury.Fury(ref_tracking=True)\nfury.register_class(SomeClass, type_tag="example.SomeClass")\nobj = SomeClass()\nobj.f2 = {"k1": "v1", "k2": "v2"}\nobj.f1, obj.f3 = obj, obj.f2\ndata = fury.serialize(obj)\n# bytes can be data serialized by other languages.\nprint(fury.deserialize(data))\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Golang"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport furygo "github.com/apache/fury/fury/go/fury"\nimport "fmt"\n\nfunc main() {\n type SomeClass struct {\n  F1 *SomeClass\n  F2 map[string]string\n  F3 map[string]string\n }\n fury := furygo.NewFury(true)\n if err := fury.RegisterTagType("example.SomeClass", SomeClass{}); err != nil {\n  panic(err)\n }\n value := &SomeClass{F2: map[string]string{"k1": "v1", "k2": "v2"}}\n value.F3 = value.F2\n value.F1 = value\n bytes, err := fury.Marshal(value)\n if err != nil {\n }\n var newValue interface{}\n // bytes can be data serialized by other languages.\n if err := fury.Unmarshal(bytes, &newValue); err != nil {\n  panic(err)\n }\n fmt.Println(newValue)\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"JavaScript"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import Fury, { Type } from '@furyjs/fury';\n/**\n * @furyjs/hps use v8's fast-calls-api that can be called directly by jit, ensure that the version of Node is 20 or above.\n * Experimental feature, installation success cannot be guaranteed at this moment\n * If you are unable to install the module, replace it with `const hps = null;`\n **/\nimport hps from '@furyjs/hps';\n\nconst description = Type.object('example.foo', {\n  foo: Type.string(),\n  bar: Type.object('example.foo'),\n});\n\nconst fury = new Fury({ hps });\nconst { serialize, deserialize } = fury.registerSerializer(description);\nconst data: any = {\n  foo: 'hello fury',\n};\ndata.bar = data;\nconst input = serialize(data);\nconst result = deserialize(input);\nconsole.log(result.bar.foo === result.foo);\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JavaScript"}),"\nReference cannot be implemented because of rust ownership restrictions"]}),"\n",(0,a.jsx)(n.h3,{id:"zero-copy-serialization",children:"Zero-Copy Serialization"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Java"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import org.apache.fury.*;\nimport org.apache.fury.config.*;\nimport org.apache.fury.serializers.BufferObject;\nimport org.apache.fury.memory.MemoryBuffer;\n\nimport java.util.*;\nimport java.util.stream.Collectors;\n\npublic class ZeroCopyExample {\n  // mvn exec:java -Dexec.mainClass="io.ray.fury.examples.ZeroCopyExample"\n  public static void main(String[] args) {\n    Fury fury = Fury.builder().withLanguage(Language.XLANG).build();\n    List<Object> list = ofArrayList("str", new byte[1000], new int[100], new double[100]);\n    Collection<BufferObject> bufferObjects = new ArrayList<>();\n    byte[] bytes = fury.serialize(list, e -> !bufferObjects.add(e));\n    // bytes can be data serialized by other languages.\n    List<MemoryBuffer> buffers = bufferObjects.stream()\n      .map(BufferObject::toBuffer).collect(Collectors.toList());\n    System.out.println(fury.deserialize(bytes, buffers));\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Python"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import array\nimport pyfury\nimport numpy as np\n\nfury = pyfury.Fury()\nlist_ = ["str", bytes(bytearray(1000)),\n         array.array("i", range(100)), np.full(100, 0.0, dtype=np.double)]\nserialized_objects = []\ndata = fury.serialize(list_, buffer_callback=serialized_objects.append)\nbuffers = [o.to_buffer() for o in serialized_objects]\n# bytes can be data serialized by other languages.\nprint(fury.deserialize(data, buffers=buffers))\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Golang"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport furygo "github.com/apache/fury/fury/go/fury"\nimport "fmt"\n\nfunc main() {\n fury := furygo.NewFury()\n list := []interface{}{"str", make([]byte, 1000)}\n buf := fury.NewByteBuffer(nil)\n var bufferObjects []fury.BufferObject\n fury.Serialize(buf, list, func(o fury.BufferObject) bool {\n  bufferObjects = append(bufferObjects, o)\n  return false\n })\n var newList []interface{}\n var buffers []*fury.ByteBuffer\n for _, o := range bufferObjects {\n  buffers = append(buffers, o.ToBuffer())\n }\n if err := fury.Deserialize(buf, &newList, buffers); err != nil {\n  panic(err)\n }\n fmt.Println(newList)\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"JavaScript"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"// Coming soon\n"})})]})}function f(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var a=r(7294);const t={},i=a.createContext(t);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);
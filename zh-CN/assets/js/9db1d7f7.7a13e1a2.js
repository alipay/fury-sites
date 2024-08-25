"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[3940],{6534:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var o=n(5893),a=n(1151);const t={title:"row format \u6307\u5357",sidebar_position:1,id:"row_format_guide"},i=void 0,c={id:"guide/row_format_guide",title:"row format \u6307\u5357",description:"Row format protocol",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guide/row_format_guide.md",sourceDirName:"guide",slug:"/guide/row_format_guide",permalink:"/zh-CN/docs/guide/row_format_guide",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/fury-site/tree/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/guide/row_format_guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"row format \u6307\u5357",sidebar_position:1,id:"row_format_guide"},sidebar:"guideSidebar",previous:{title:"Java \u5e8f\u5217\u5316\u6307\u5357",permalink:"/zh-CN/docs/guide/java_object_graph_guide"},next:{title:"Xlang Serialization Guide",permalink:"/zh-CN/docs/guide/xlang_object_graph_guide"}},s={},d=[{value:"Row format protocol",id:"row-format-protocol",level:2},{value:"Java",id:"java",level:3},{value:"Python",id:"python",level:3},{value:"Apache Arrow \u652f\u6301",id:"apache-arrow-\u652f\u6301",level:3}];function f(r){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...r.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"row-format-protocol",children:"Row format protocol"}),"\n",(0,o.jsx)(e.h3,{id:"java",children:"Java"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'public class Bar {\n  String f1;\n  List<Long> f2;\n}\n\npublic class Foo {\n  int f1;\n  List<Integer> f2;\n  Map<String, Integer> f3;\n  List<Bar> f4;\n}\n\nRowEncoder<Foo> encoder = Encoders.bean(Foo.class);\nFoo foo = new Foo();\nfoo.f1 = 10;\nfoo.f2 = IntStream.range(0, 1000000).boxed().collect(Collectors.toList());\nfoo.f3 = IntStream.range(0, 1000000).boxed().collect(Collectors.toMap(i -> "k"+i, i->i));\nList<Bar> bars = new ArrayList<>(1000000);\nfor (int i = 0; i < 1000000; i++) {\n  Bar bar = new Bar();\n  bar.f1 = "s"+i;\n  bar.f2 = LongStream.range(0, 10).boxed().collect(Collectors.toList());\n  bars.add(bar);\n}\nfoo.f4 = bars;\n// Can be zero-copy read by python\nBinaryRow binaryRow = encoder.toRow(foo);\n// can be data from python\nFoo newFoo = encoder.fromRow(binaryRow);\n// zero-copy read List<Integer> f2\nBinaryArray binaryArray2 = binaryRow.getArray(1);\n// zero-copy read List<Bar> f4\nBinaryArray binaryArray4 = binaryRow.getArray(3);\n// zero-copy read 11th element of `readList<Bar> f4`\nBinaryRow barStruct = binaryArray4.getStruct(10);\n\n// zero-copy read 6th of f2 of 11th element of `readList<Bar> f4`\nbarStruct.getArray(1).getInt64(5);\nRowEncoder<Bar> barEncoder = Encoders.bean(Bar.class);\n// deserialize part of data.\nBar newBar = barEncoder.fromRow(barStruct);\nBar newBar2 = barEncoder.fromRow(binaryArray4.getStruct(20));\n'})}),"\n",(0,o.jsx)(e.h3,{id:"python",children:"Python"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'@dataclass\nclass Bar:\n    f1: str\n    f2: List[pa.int64]\n@dataclass\nclass Foo:\n    f1: pa.int32\n    f2: List[pa.int32]\n    f3: Dict[str, pa.int32]\n    f4: List[Bar]\n\nencoder = pyfury.encoder(Foo)\nfoo = Foo(f1=10, f2=list(range(1000_000)),\n         f3={f"k{i}": i for i in range(1000_000)},\n         f4=[Bar(f1=f"s{i}", f2=list(range(10))) for i in range(1000_000)])\nbinary: bytes = encoder.to_row(foo).to_bytes()\nprint(f"start: {datetime.datetime.now()}")\nfoo_row = pyfury.RowData(encoder.schema, binary)\nprint(foo_row.f2[100000], foo_row.f4[100000].f1, foo_row.f4[200000].f2[5])\nprint(f"end: {datetime.datetime.now()}")\n\nbinary = pickle.dumps(foo)\nprint(f"pickle start: {datetime.datetime.now()}")\nnew_foo = pickle.loads(binary)\nprint(new_foo.f2[100000], new_foo.f4[100000].f1, new_foo.f4[200000].f2[5])\nprint(f"pickle end: {datetime.datetime.now()}")\n'})}),"\n",(0,o.jsx)(e.h3,{id:"apache-arrow-\u652f\u6301",children:"Apache Arrow \u652f\u6301"}),"\n",(0,o.jsx)(e.p,{children:"Apache Fury Format \u8fd8\u652f\u6301\u4ece Arrow Table/RecordBatch \u81ea\u52a8\u8f6c\u6362\u3002"}),"\n",(0,o.jsx)(e.p,{children:"Java\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"Schema schema = TypeInference.inferSchema(BeanA.class);\nArrowWriter arrowWriter = ArrowUtils.createArrowWriter(schema);\nEncoder<BeanA> encoder = Encoders.rowEncoder(BeanA.class);\nfor (int i = 0; i < 10; i++) {\n  BeanA beanA = BeanA.createBeanA(2);\n  arrowWriter.write(encoder.toRow(beanA));\n}\nreturn arrowWriter.finishAsRecordBatch();\n"})}),"\n",(0,o.jsx)(e.p,{children:"Python\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"import pyfury\nencoder = pyfury.encoder(Foo)\nencoder.to_arrow_record_batch([foo] * 10000)\nencoder.to_arrow_table([foo] * 10000)\n"})}),"\n",(0,o.jsx)(e.p,{children:"C++:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-c++",children:"std::shared_ptr<ArrowWriter> arrow_writer;\nEXPECT_TRUE(\n    ArrowWriter::Make(schema, ::arrow::default_memory_pool(), &arrow_writer)\n        .ok());\nfor (auto &row : rows) {\n  EXPECT_TRUE(arrow_writer->Write(row).ok());\n}\nstd::shared_ptr<::arrow::RecordBatch> record_batch;\nEXPECT_TRUE(arrow_writer->Finish(&record_batch).ok());\nEXPECT_TRUE(record_batch->Validate().ok());\nEXPECT_EQ(record_batch->num_columns(), schema->num_fields());\nEXPECT_EQ(record_batch->num_rows(), row_nums);\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"Schema schema = TypeInference.inferSchema(BeanA.class);\nArrowWriter arrowWriter = ArrowUtils.createArrowWriter(schema);\nEncoder<BeanA> encoder = Encoders.rowEncoder(BeanA.class);\nfor (int i = 0; i < 10; i++) {\n  BeanA beanA = BeanA.createBeanA(2);\n  arrowWriter.write(encoder.toRow(beanA));\n}\nreturn arrowWriter.finishAsRecordBatch();\n"})})]})}function l(r={}){const{wrapper:e}={...(0,a.a)(),...r.components};return e?(0,o.jsx)(e,{...r,children:(0,o.jsx)(f,{...r})}):f(r)}},1151:(r,e,n)=>{n.d(e,{Z:()=>c,a:()=>i});var o=n(7294);const a={},t=o.createContext(a);function i(r){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function c(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(a):r.components||a:i(r.components),o.createElement(t.Provider,{value:e},r.children)}}}]);
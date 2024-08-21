"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[7047],{3603:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=t(5893),r=t(1151);const i={slug:"fury_meta_string_37_5_percent_space_efficient_encoding_than_utf8",title:"Meta String: A 37.5% space efficient string encoding than UTF-8 in Fury serialization",authors:["chaokunyang"],tags:["fury"]},c=void 0,a={permalink:"/zh-CN/blog/fury_meta_string_37_5_percent_space_efficient_encoding_than_utf8",editUrl:"https://github.com/apache/fury-site/tree/main/i18n/zh-CN/docusaurus-plugin-content-blog/2024-05-06-metastring-space-efficient_encoding_for_string.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2024-05-06-metastring-space-efficient_encoding_for_string.md",title:"Meta String: A 37.5% space efficient string encoding than UTF-8 in Fury serialization",description:"Background",date:"2024-05-06T00:00:00.000Z",formattedDate:"2024\u5e745\u67086\u65e5",tags:[{label:"fury",permalink:"/zh-CN/blog/tags/fury"}],readingTime:6.805,hasTruncateMarker:!1,authors:[{name:"Shawn Yang",title:"Apache Fury PPMC Member",url:"https://github.com/chaokunyang",imageURL:"https://github.com/chaokunyang.png",key:"chaokunyang"}],frontMatter:{slug:"fury_meta_string_37_5_percent_space_efficient_encoding_than_utf8",title:"Meta String: A 37.5% space efficient string encoding than UTF-8 in Fury serialization",authors:["chaokunyang"],tags:["fury"]},unlisted:!1,prevItem:{title:"Fury 0.5.1 Released",permalink:"/zh-CN/blog/fury_0_5_1_release"},nextItem:{title:"Fury v0.5.0 Released",permalink:"/zh-CN/blog/fury_0_5_0_release"}},d={authorsImageUrls:[void 0]},o=[{value:"Background",id:"background",level:2},{value:"Meta String Introduction",id:"meta-string-introduction",level:2},{value:"Encoding Algorithms",id:"encoding-algorithms",level:2},{value:"Select Best Encoding",id:"select-best-encoding",level:2},{value:"Encoding Flags and Data jointly",id:"encoding-flags-and-data-jointly",level:2},{value:"Benchmark",id:"benchmark",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,s.jsxs)(n.p,{children:["In rpc/serialization systems, we often need to send ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"namespace/path/filename/fieldName/packageName/moduleName/className/enumValue"})})," string between processes."]}),"\n",(0,s.jsx)(n.p,{children:"Those strings are mostly ascii strings. In order to transfer between processes, we encode such strings using utf-8 encodings. Such encoding\nwill take one byte for every char, which is not space efficient actually."}),"\n",(0,s.jsxs)(n.p,{children:["If we take a deeper look, we will found that most chars are ",(0,s.jsxs)(n.strong,{children:["lowercase chars,  ",(0,s.jsx)(n.code,{children:"."}),", ",(0,s.jsx)(n.code,{children:"$"})," and ",(0,s.jsx)(n.code,{children:"_"})]}),", which can be expressed in a much\nsmaller range ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"0~32"})}),". But one byte can represent range ",(0,s.jsx)(n.code,{children:"0~255"}),", the significant bits are wasted, and this cost is not ignorable. In a dynamic serialization\nframework, such meta will take considerable cost compared to actual data."]}),"\n",(0,s.jsxs)(n.p,{children:["So we proposed a new string encoding algorithm which we called ",(0,s.jsx)(n.strong,{children:"meta string encoding"})," in Fury. It will encode most chars using ",(0,s.jsx)(n.code,{children:"5"})," bits instead of ",(0,s.jsx)(n.code,{children:"8"})," bits in utf-8 encoding, which can bring ",(0,s.jsx)(n.strong,{children:"37.5% space cost savings"})," compared to utf-8 encoding."]}),"\n",(0,s.jsx)(n.h2,{id:"meta-string-introduction",children:"Meta String Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["Meta string encoding algorithm is mainly used to encode meta strings such as ",(0,s.jsx)(n.strong,{children:"field names, namespace, packageName, className, path and filename"}),".\nSuch a string is enumerated and limited, so the encoding performance is not important since we can cache the encoding result."]}),"\n",(0,s.jsxs)(n.p,{children:["Meta string encoding uses ",(0,s.jsx)(n.code,{children:"5/6"})," bits instead of ",(0,s.jsx)(n.code,{children:"8"})," bits in utf-8 encoding for every chars. Since it uses less bits than utf8, it can bring\n",(0,s.jsx)(n.strong,{children:"37.5% space cost savings"})," compared to utf-8 and has a smaller encoded binary size, which uses less storage and makes the network transfer faster."]}),"\n",(0,s.jsxs)(n.p,{children:["More details about meta string spec can be found in ",(0,s.jsx)(n.a,{href:"https://fury.apache.org/docs/specification/fury_xlang_serialization_spec/#meta-string",children:"Fury xlang serialization specification"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"encoding-algorithms",children:"Encoding Algorithms"}),"\n",(0,s.jsx)(n.p,{children:"String binary encoding algorithm:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Algorithm"}),(0,s.jsx)(n.th,{children:"Pattern"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOWER_SPECIAL"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"a-z._$|"})}),(0,s.jsxs)(n.td,{children:["every char is written using 5 bits, ",(0,s.jsx)(n.code,{children:"a-z"}),": ",(0,s.jsx)(n.code,{children:"0b00000~0b11001"}),", ",(0,s.jsx)(n.code,{children:"._$|"}),": ",(0,s.jsx)(n.code,{children:"0b11010~0b11101"}),", prepend one bit at the start to indicate whether strip last char since last byte may have 7 redundant bits(1 indicates strip last char)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOWER_UPPER_DIGIT_SPECIAL"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"a-zA-Z0~9._"})}),(0,s.jsxs)(n.td,{children:["every char is written using 6 bits, ",(0,s.jsx)(n.code,{children:"a-z"}),": ",(0,s.jsx)(n.code,{children:"0b00000~0b11001"}),", ",(0,s.jsx)(n.code,{children:"A-Z"}),": ",(0,s.jsx)(n.code,{children:"0b11010~0b110011"}),", ",(0,s.jsx)(n.code,{children:"0~9"}),": ",(0,s.jsx)(n.code,{children:"0b110100~0b111101"}),", ",(0,s.jsx)(n.code,{children:"._"}),": ",(0,s.jsx)(n.code,{children:"0b111110~0b111111"}),",  prepend one bit at the start to indicate whether strip last char since last byte may have 7 redundant bits(1 indicates strip last char)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UTF-8"}),(0,s.jsx)(n.td,{children:"any chars"}),(0,s.jsx)(n.td,{children:"UTF-8 encoding"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["If we use ",(0,s.jsx)(n.code,{children:"LOWER_SPECIAL/LOWER_UPPER_DIGIT_SPECIAL"}),", we must add a strip last char flag in encoded data. This is because every char will be encoded using ",(0,s.jsx)(n.code,{children:"5/6"})," bits, and the last char may have ",(0,s.jsx)(n.code,{children:"1~7"})," bits which are unused by encoding, such bits may cause an extra char to be read, which we must strip off."]}),"\n",(0,s.jsxs)(n.p,{children:["Here is encoding code snippet in java, see ",(0,s.jsx)(n.a,{href:"https://github.com/apache/fury/blob/93800888595065b2690fec093ab0cbfd6ac7dedc/java/fury-core/src/main/java/org/apache/fury/meta/MetaStringEncoder.java#L235",children:(0,s.jsx)(n.code,{children:"org.apache.fury.meta.MetaStringEncoder#encodeGeneric(char[], int)"})})," for more details:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"private byte[] encodeGeneric(char[] chars, int bitsPerChar) {\n  int totalBits = chars.length * bitsPerChar + 1;\n  int byteLength = (totalBits + 7) / 8; // Calculate number of needed bytes\n  byte[] bytes = new byte[byteLength];\n  int currentBit = 1;\n  for (char c : chars) {\n    int value =\n        (bitsPerChar == 5) ? charToValueLowerSpecial(c) : charToValueLowerUpperDigitSpecial(c);\n    // Encode the value in bitsPerChar bits\n    for (int i = bitsPerChar - 1; i >= 0; i--) {\n      if ((value & (1 << i)) != 0) {\n        // Set the bit in the byte array\n        int bytePos = currentBit / 8;\n        int bitPos = currentBit % 8;\n        bytes[bytePos] |= (byte) (1 << (7 - bitPos));\n      }\n      currentBit++;\n    }\n  }\n  boolean stripLastChar = bytes.length * 8 >= totalBits + bitsPerChar;\n  if (stripLastChar) {\n    bytes[0] = (byte) (bytes[0] | 0x80);\n  }\n  return bytes;\n}\n\nprivate int charToValueLowerSpecial(char c) {\n  if (c >= 'a' && c <= 'z') {\n    return c - 'a';\n  } else if (c == '.') {\n    return 26;\n  } else if (c == '_') {\n    return 27;\n  } else if (c == '$') {\n    return 28;\n  } else if (c == '|') {\n    return 29;\n  } else {\n    throw new IllegalArgumentException(\"Unsupported character for LOWER_SPECIAL encoding: \" + c);\n  }\n}\n\nprivate int charToValueLowerUpperDigitSpecial(char c) {\n  if (c >= 'a' && c <= 'z') {\n    return c - 'a';\n  } else if (c >= 'A' && c <= 'Z') {\n    return 26 + (c - 'A');\n  } else if (c >= '0' && c <= '9') {\n    return 52 + (c - '0');\n  } else if (c == specialChar1) {\n    return 62;\n  } else if (c == specialChar2) {\n    return 63;\n  } else {\n    throw new IllegalArgumentException(\n        \"Unsupported character for LOWER_UPPER_DIGIT_SPECIAL encoding: \" + c);\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Here is decoding code snippet in golang, see ",(0,s.jsx)(n.a,{href:"https://github.com/apache/fury/blob/93800888595065b2690fec093ab0cbfd6ac7dedc/go/fury/meta/meta_string_decoder.go#L70",children:(0,s.jsx)(n.code,{children:"go/fury/meta/meta_string_decoder.go:70"})})," for more details:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'func (d *Decoder) decodeGeneric(data []byte, algorithm Encoding) ([]byte, error) {\n bitsPerChar := 5\n if algorithm == LOWER_UPPER_DIGIT_SPECIAL {\n  bitsPerChar = 6\n }\n // Retrieve 5 bits every iteration from data, convert them to characters, and save them to chars\n // "abc" encodedBytes as [00000] [000,01] [00010] [0, corresponding to three bytes, which are 0, 68, 0\n // Take the highest digit first, then the lower, in order\n\n // here access data[0] before entering the loop, so we had to deal with empty data in Decode method\n // totChars * bitsPerChar <= totBits < (totChars + 1) * bitsPerChar\n stripLastChar := (data[0] & 0x80) >> 7\n totBits := len(data)*8 - 1 - int(stripLastChar)*bitsPerChar\n totChars := totBits / bitsPerChar\n chars := make([]byte, totChars)\n bitPos, bitCount := 6, 1 // first highest bit indicates whether strip last char\n for i := 0; i < totChars; i++ {\n  var val byte = 0\n  for i := 0; i < bitsPerChar; i++ {\n   if data[bitCount/8]&(1<<bitPos) > 0 {\n    val |= 1 << (bitsPerChar - i - 1)\n   }\n   bitPos = (bitPos - 1 + 8) % 8\n   bitCount++\n  }\n  ch, err := d.decodeChar(val, algorithm)\n  if err != nil {\n   return nil, err\n  }\n  chars[i] = ch\n }\n return chars, nil\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"select-best-encoding",children:"Select Best Encoding"}),"\n",(0,s.jsxs)(n.p,{children:["For most lowercase characters, meta string will use ",(0,s.jsx)(n.code,{children:"5"})," bits to encode every char. For string containing uppercase chars, meta string will try to convert the string into a lower case representation by inserting some markers, and compare used bytes with ",(0,s.jsx)(n.code,{children:"6"})," bits encoding, then select the encoding which has smaller encoded size."]}),"\n",(0,s.jsx)(n.p,{children:"Here is the common encoding selection strategy:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Encoding Flag"}),(0,s.jsx)(n.th,{children:"Pattern"}),(0,s.jsx)(n.th,{children:"Encoding Algorithm"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOWER_SPECIAL"}),(0,s.jsxs)(n.td,{children:["every char is in ",(0,s.jsx)(n.code,{children:"a-z._|"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"LOWER_SPECIAL"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"FIRST_TO_LOWER_SPECIAL"}),(0,s.jsxs)(n.td,{children:["every char is in ",(0,s.jsx)(n.code,{children:"a-z._"})," except first char is upper case"]}),(0,s.jsxs)(n.td,{children:["replace first upper case char to lower case, then use ",(0,s.jsx)(n.code,{children:"LOWER_SPECIAL"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ALL_TO_LOWER_SPECIAL"}),(0,s.jsxs)(n.td,{children:["every char is in ",(0,s.jsx)(n.code,{children:"a-zA-Z._"})]}),(0,s.jsxs)(n.td,{children:["replace every upper case char by ",(0,s.jsx)(n.code,{children:"|"})," + ",(0,s.jsx)(n.code,{children:"lower case"}),", then use ",(0,s.jsx)(n.code,{children:"LOWER_SPECIAL"}),", use this encoding if it's smaller than Encoding ",(0,s.jsx)(n.code,{children:"LOWER_UPPER_DIGIT_SPECIAL"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOWER_UPPER_DIGIT_SPECIAL"}),(0,s.jsxs)(n.td,{children:["every char is in ",(0,s.jsx)(n.code,{children:"a-zA-Z._"})]}),(0,s.jsxs)(n.td,{children:["use ",(0,s.jsx)(n.code,{children:"LOWER_UPPER_DIGIT_SPECIAL"})," encoding if it's smaller than Encoding ",(0,s.jsx)(n.code,{children:"FIRST_TO_LOWER_SPECIAL"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UTF8"}),(0,s.jsx)(n.td,{children:"any utf-8 char"}),(0,s.jsxs)(n.td,{children:["use ",(0,s.jsx)(n.code,{children:"UTF-8"})," encoding"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Compression"}),(0,s.jsx)(n.td,{children:"any utf-8 char"}),(0,s.jsx)(n.td,{children:"lossless compression"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["For package name, module name or namespace, ",(0,s.jsx)(n.code,{children:"LOWER_SPECIAL"})," will be used mostly. ",(0,s.jsx)(n.code,{children:"ALL_TO_LOWER_SPECIAL"})," can be used too, since it can represent the same chars as ",(0,s.jsx)(n.code,{children:"LOWER_SPECIAL"})," without using more bits, but also support string with uppercase chars."]}),"\n",(0,s.jsxs)(n.p,{children:["For className, ",(0,s.jsx)(n.code,{children:"FIRST_TO_LOWER_SPECIAL"})," will be used mostly. If there are multiple uppercase chars, then ",(0,s.jsx)(n.code,{children:"ALL_TO_LOWER_SPECIAL"})," will be used instead.\nIf a string contains digits, then ",(0,s.jsx)(n.code,{children:"LOWER_UPPER_DIGIT_SPECIAL"})," will be used."]}),"\n",(0,s.jsxs)(n.p,{children:["Finally, utf8 will be the fallback encoding if the string contains some chars which is not in range ",(0,s.jsx)(n.code,{children:"a-z0-9A-Z"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"encoding-flags-and-data-jointly",children:"Encoding Flags and Data jointly"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Depending on the case, one can choose encoding ",(0,s.jsx)(n.code,{children:"flags + data"})," jointly, using 3 bits of first byte for flags and other bytes for data. This can be useful since there are some holes remaining in last byte, adding flags in data doesn't always increase serialized bytes size."]}),"\n",(0,s.jsxs)(n.li,{children:["Or one can use a header to encode such flags with other meta such as encoded size, this is what Fury does in ",(0,s.jsx)(n.a,{href:"https://github.com/apache/fury/pull/1556",children:"https://github.com/apache/fury/pull/1556"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"benchmark",children:"Benchmark"}),"\n",(0,s.jsxs)(n.p,{children:["utf8 encoding uses ",(0,s.jsx)(n.code,{children:"30"})," bytes for string ",(0,s.jsx)(n.code,{children:"org.apache.fury.benchmark.data"}),", fury meta string uses only ",(0,s.jsx)(n.code,{children:"19"})," bytes.\nutf8 encoding uses ",(0,s.jsx)(n.code,{children:"12"})," bytes for string ",(0,s.jsx)(n.code,{children:"MediaContent"}),", but fury meta string uses only ",(0,s.jsx)(n.code,{children:"9"})," bytes."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'// utf8 use 30 bytes, we use only 19 bytes\nassertEquals(encoder.encode("org.apache.fury.benchmark.data").getBytes().length, 19);\n// utf8 uses 12 bytes, we use only 9 bytes.\nassertEquals(encoder.encode("MediaContent").getBytes().length, 9);\n'})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var s=t(7294);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
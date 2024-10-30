"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[5237],{50510:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var i=n(44996),s=n(67294),r=n(93179),a=n(30703),o=n(85893);function l(){const[e,t]=(0,s.useState)(""),n="import java.util.List;\nimport java.util.Arrays;\nimport org.apache.fury.*;\n\npublic class Example {\n  // Note that Fury instances should be reused between\n  // multiple serializations of different objects.\n  static ThreadSafeFury fury = Fury.builder().withLanguage(Language.JAVA)\n    // Allow to deserialize objects unknown types,\n    // more flexible but less secure.\n    // .withSecureMode(false)\n    .buildThreadSafeFury();\n\n  static {\n    // Registering types can reduce class name serialization\n    // overhead but not mandatory.\n    // If secure mode enabled\n    //all custom types must be registered.\n    fury.register(SomeClass.class);\n  }\n\n  public static void main(String[] args) {\n    SomeClass object = new SomeClass();\n    byte[] bytes = fury.serialize(object);\n    System.out.println(fury.deserialize(bytes));\n  }\n}\n  ",l=(0,i.Z)("/home/programming.svg");return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{style:{display:"flex",margin:"12%",borderRadius:"10px"},children:[(0,o.jsx)("div",{style:{width:"50%",justifyContent:"flex-start",margin:"50px",height:"auto"},children:(0,o.jsx)("img",{src:l,alt:"programming-coding"})}),(0,o.jsxs)("div",{style:{position:"relative",padding:"12px",justifyContent:"flex-end",backgroundColor:"#2d2d2d",borderRadius:"5px",width:"50%",height:"auto"},children:[(0,o.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(n).then((()=>{t("Copied!"),setTimeout((()=>t("")),2e3)}),(e=>{t("Failed to copy!")}))},style:{position:"absolute",top:"10px",right:"10px",backgroundColor:"#444",color:"#fff",border:"none",borderRadius:"5px",padding:"5px 10px",cursor:"pointer"},children:e||"Copy"}),(0,o.jsx)(r.Z,{language:"java",style:a.Z,showLineNumbers:!0,customStyle:{fontSize:"12px"},children:n})]})]})})}}}]);
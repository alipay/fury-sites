"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[911],{23227:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=r(85893),a=r(11151);const i={title:"\u5982\u4f55\u53d1\u5e03",sidebar_position:0,id:"how_to_release"},t=void 0,o={id:"community/how_to_release",title:"\u5982\u4f55\u53d1\u5e03",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u53d1\u5e03\u65b0\u7248\u672c\u7684 Apache Fury\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/community/how_to_release.md",sourceDirName:"community",slug:"/community/how_to_release",permalink:"/zh-CN/docs/community/how_to_release",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/fury-site/tree/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/community/how_to_release.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"\u5982\u4f55\u53d1\u5e03",sidebar_position:0,id:"how_to_release"},sidebar:"communitySidebar",previous:{title:"\u5982\u4f55\u52a0\u5165 Fury \u793e\u533a",permalink:"/zh-CN/docs/community/how_to_join_community"},next:{title:"\u5982\u4f55\u9a8c\u8bc1 Apache Fury",permalink:"/zh-CN/docs/community/how_to_verify"}},c={},l=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"release manager \u7b2c\u4e00\u6b21\u53d1\u5e03",id:"release-manager-\u7b2c\u4e00\u6b21\u53d1\u5e03",level:2},{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:3},{value:"\u51c6\u5907 GPG \u5bc6\u94a5",id:"\u51c6\u5907-gpg-\u5bc6\u94a5",level:3},{value:"\u5b89\u88c5 GPG",id:"\u5b89\u88c5-gpg",level:4},{value:"\u751f\u6210 GPG \u5bc6\u94a5",id:"\u751f\u6210-gpg-\u5bc6\u94a5",level:4},{value:"\u4e0a\u4f20\u516c\u94a5\u81f3 GPG \u5bc6\u94a5\u670d\u52a1\u5668",id:"\u4e0a\u4f20\u516c\u94a5\u81f3-gpg-\u5bc6\u94a5\u670d\u52a1\u5668",level:4},{value:"\u68c0\u67e5\u5bc6\u94a5\u662f\u5426\u521b\u5efa\u6210\u529f",id:"\u68c0\u67e5\u5bc6\u94a5\u662f\u5426\u521b\u5efa\u6210\u529f",level:4},{value:"\u5c06 GPG \u516c\u94a5\u6dfb\u52a0\u5230\u9879\u76ee KEYS \u6587\u4ef6\u4e2d",id:"\u5c06-gpg-\u516c\u94a5\u6dfb\u52a0\u5230\u9879\u76ee-keys-\u6587\u4ef6\u4e2d",level:4},{value:"\u5c06 GPG \u516c\u94a5\u4e0a\u4f20\u5230\u60a8\u7684 GitHub \u5e10\u6237",id:"\u5c06-gpg-\u516c\u94a5\u4e0a\u4f20\u5230\u60a8\u7684-github-\u5e10\u6237",level:4},{value:"\u5ef6\u4f38\u9605\u8bfb",id:"\u5ef6\u4f38\u9605\u8bfb",level:3},{value:"\u5f00\u59cb\u6709\u5173\u53d1\u5e03\u7684\u8ba8\u8bba",id:"\u5f00\u59cb\u6709\u5173\u53d1\u5e03\u7684\u8ba8\u8bba",level:2},{value:"\u51c6\u5907\u53d1\u5e03",id:"\u51c6\u5907\u53d1\u5e03",level:2},{value:"Github \u5206\u652f\u548c\u6807\u7b7e",id:"github-\u5206\u652f\u548c\u6807\u7b7e",level:3},{value:"\u6784\u5efa artifacts \u5e76\u4e0a\u4f20\u5230 SVN dist/dev \u4ed3\u5e93",id:"\u6784\u5efa-artifacts-\u5e76\u4e0a\u4f20\u5230-svn-distdev-\u4ed3\u5e93",level:3},{value:"\u5982\u679c\u51fa\u73b0\u95ee\u9898\u8be5\u600e\u4e48\u529e",id:"\u5982\u679c\u51fa\u73b0\u95ee\u9898\u8be5\u600e\u4e48\u529e",level:3},{value:"\u6295\u7968",id:"\u6295\u7968",level:2},{value:"Fury \u793e\u533a\u6295\u7968",id:"fury-\u793e\u533a\u6295\u7968",level:3},{value:"\u5b75\u5316\u5668\u793e\u533a\u6295\u7968",id:"\u5b75\u5316\u5668\u793e\u533a\u6295\u7968",level:3},{value:"\u5982\u679c\u6295\u7968\u5931\u8d25\u600e\u4e48\u529e",id:"\u5982\u679c\u6295\u7968\u5931\u8d25\u600e\u4e48\u529e",level:3},{value:"\u5b98\u65b9\u53d1\u5e03",id:"\u5b98\u65b9\u53d1\u5e03",level:2},{value:"\u5c06 artifacts \u53d1\u5e03\u5230 SVN \u53d1\u5e03\u76ee\u5f55",id:"\u5c06-artifacts-\u53d1\u5e03\u5230-svn-\u53d1\u5e03\u76ee\u5f55",level:3},{value:"\u66f4\u6539 Fury \u7f51\u7ad9\u4e0b\u8f7d\u94fe\u63a5",id:"\u66f4\u6539-fury-\u7f51\u7ad9\u4e0b\u8f7d\u94fe\u63a5",level:3},{value:"\u53d1\u5e03 Maven artifacts",id:"\u53d1\u5e03-maven-artifacts",level:3},{value:"\u53d1\u9001\u516c\u544a",id:"\u53d1\u9001\u516c\u544a",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u53d1\u5e03\u65b0\u7248\u672c\u7684 Apache Fury\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,s.jsx)(n.p,{children:"\u6e90\u4ee3\u7801\u53d1\u5e03\u662f Apache \u6700\u91cd\u89c6\u4ee5\u53ca\u6700\u91cd\u8981\u7684\u90e8\u5206\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\u8bb8\u53ef\u8bc1\u548c\u53d1\u5e03\u7684\u8f6f\u4ef6\u7b7e\u540d\u95ee\u9898\u3002\u53d1\u5e03\u8f6f\u4ef6\u662f\u4e00\u4ef6\u4e25\u8083\u7684\u4e8b\u60c5\uff0c\u5e76\u4f1a\u4ea7\u751f\u76f8\u5e94\u7684\u6cd5\u5f8b\u540e\u679c\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"release-manager-\u7b2c\u4e00\u6b21\u53d1\u5e03",children:"release manager \u7b2c\u4e00\u6b21\u53d1\u5e03"}),"\n",(0,s.jsx)(n.h3,{id:"\u73af\u5883\u8981\u6c42",children:"\u73af\u5883\u8981\u6c42"}),"\n",(0,s.jsx)(n.p,{children:"\u6b64\u53d1\u5e03\u8fc7\u7a0b\u5728 Ubuntu \u7cfb\u7edf\u4e2d\u8fd0\u884c\uff0c\u9700\u8981\u4ee5\u4e0b\u51e0\u4e2a\u73af\u5883\u4f9d\u8d56\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"JDK 1.8+"}),"\n",(0,s.jsx)(n.li,{children:"Apache Maven 3.x+"}),"\n",(0,s.jsx)(n.li,{children:"Python 3.8"}),"\n",(0,s.jsx)(n.li,{children:"GnuPG 2.x"}),"\n",(0,s.jsx)(n.li,{children:"Git"}),"\n",(0,s.jsx)(n.li,{children:"SVN\uff08Apache \u57fa\u91d1\u4f1a\u4f7f\u7528 svn \u6765\u6258\u7ba1\u9879\u76ee\u53d1\u5e03\uff09"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"}),"\uff1a\u5982\u679c\u60a8\u5728\u4e0d\u540c\u7684\u76ee\u5f55\u4e0b\u914d\u7f6e\u4e86 gpg \u5bc6\u94a5\uff0c\u8bf7\u6267\u884c ",(0,s.jsx)(n.code,{children:"export GNUPGHOME=$(xxx)"})," \u5bfc\u51fa\u73af\u5883\u53d8\u91cf\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u51c6\u5907-gpg-\u5bc6\u94a5",children:"\u51c6\u5907 GPG \u5bc6\u94a5"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u60a8\u662f\u7b2c\u4e00\u6b21\u4f5c\u4e3a\u8f6f\u4ef6\u53d1\u5e03\u8005\uff0c\u60a8\u9700\u8981\u51c6\u5907\u4e00\u4e2a GPG \u5bc6\u94a5\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u53c2\u8003\u8fd9\u91cc\u7684",(0,s.jsx)(n.a,{href:"https://infra.apache.org/openpgp.html",children:"\u5feb\u901f\u5f00\u59cb"}),"\u83b7\u53d6\u4e00\u4e2a GPG \u5bc6\u94a5\u6216\u8005\u83b7\u53d6\u66f4\u591a\u76f8\u5173\u4fe1\u606f\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u5b89\u88c5-gpg",children:"\u5b89\u88c5 GPG"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt install gnupg2\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u751f\u6210-gpg-\u5bc6\u94a5",children:"\u751f\u6210 GPG \u5bc6\u94a5"}),"\n",(0,s.jsx)(n.p,{children:"\u8bf7\u4f7f\u7528\u60a8\u7684 Apache \u540d\u5b57\u548c\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u751f\u6210 GPG \u5bc6\u94a5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ gpg --full-gen-key\ngpg (GnuPG) 2.2.20; Copyright (C) 2020 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\n  (14) Existing key from card\nYour selection? 1 # input 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096 # input 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0) 0 # input 0\nKey does not expire at all\nIs this correct? (y/N) y # input y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: Chaokun Yang                   # input your name\nEmail address: chaokunyang@apache.org     # input your email\nComment: CODE SIGNING KEY                 # input some annotations, optional\nYou selected this USER-ID:\n    \"Chaokun <chaokunyang@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O # input O\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\n\n# Input the security key\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Please enter this passphrase                         \u2502\n\u2502                                                      \u2502\n\u2502 Passphrase: _______________________________          \u2502\n\u2502                                                      \u2502\n\u2502       <OK>                              <Cancel>     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n# key generation will be done after your inputting the key with the following output\ngpg: key E49B00F626B marked as ultimately trusted\ngpg: revocation certificate stored as '/Users/chaokunyang/.gnupg/openpgp-revocs.d/1E2CDAE4C08AD7D694D1CB139D7BE8E45E580BA4.rev'\npublic and secret key created and signed.\n\npub   rsa4096 2022-07-12 [SC]\n      1E2CDAE4C08AD7D694D1CB139D7BE8E45E580BA4\nuid           [ultimate] Chaokun <chaokunyang@apache.org>\nsub   rsa4096 2022-07-12 [E]\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u4e0a\u4f20\u516c\u94a5\u81f3-gpg-\u5bc6\u94a5\u670d\u52a1\u5668",children:"\u4e0a\u4f20\u516c\u94a5\u81f3 GPG \u5bc6\u94a5\u670d\u52a1\u5668"}),"\n",(0,s.jsx)(n.p,{children:"\u9996\u5148\uff0c\u5217\u51fa\u60a8\u6240\u521b\u5efa\u7684 GPG \u5bc6\u94a5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gpg --list-keys\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u76f8\u5173\u547d\u4ee4\u4e4b\u540e\uff0c\u60a8\u5c06\u770b\u5230\u5982\u4e0b\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--------------------------------------------------\npub   rsa4096 2024-03-27 [SC]\n      1E2CDAE4C08AD7D694D1CB139D7BE8E45E580BA4\nuid           [ultimate] chaokunyang (CODE SIGNING KEY) <chaokunyang@apache.org>\nsub   rsa4096 2024-03-27 [E]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u540e\uff0c\u5c06\u60a8\u7684\u5bc6\u94a5 ID \u53d1\u9001\u5230\u5bc6\u94a5\u670d\u52a1\u5668\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gpg --keyserver keys.openpgp.org --send-key <key-id> # e.g., 1E2CDAE4C08AD7D694D1CB139D7BE8E45E580BA4\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c",(0,s.jsx)(n.code,{children:"keys.openpgp.org"})," \u662f\u4e00\u4e2a\u968f\u673a\u9009\u62e9\u7684\u5bc6\u94a5\u670d\u52a1\u5668\uff0c\u53ef\u4ee5\u4f7f\u7528 keyserver.ubuntu.com \u6216\u4efb\u4f55\u5176\u4ed6\u529f\u80fd\u5b8c\u5907\u7684\u5bc6\u94a5\u670d\u52a1\u5668\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u68c0\u67e5\u5bc6\u94a5\u662f\u5426\u521b\u5efa\u6210\u529f",children:"\u68c0\u67e5\u5bc6\u94a5\u662f\u5426\u521b\u5efa\u6210\u529f"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0a\u4f20\u5927\u7ea6\u9700\u8981\u4e00\u5206\u949f\uff1b\u4e4b\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u7535\u5b50\u90ae\u4ef6\u5728\u76f8\u5e94\u7684\u5bc6\u94a5\u670d\u52a1\u5668\u4e0a\u68c0\u67e5\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5c06\u5bc6\u94a5\u4e0a\u4f20\u5230\u5bc6\u94a5\u670d\u52a1\u5668\u7684\u4e3b\u8981\u76ee\u7684\u662f\u4e3a\u4e86\u52a0\u5165\u4e00\u4e2a\u53ef\u4fe1\u7684",(0,s.jsx)(n.a,{href:"https://infra.apache.org/release-signing.html#web-of-trust",children:"\u4fe1\u4efb\u7f51\u7edc"}),"\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u5c06-gpg-\u516c\u94a5\u6dfb\u52a0\u5230\u9879\u76ee-keys-\u6587\u4ef6\u4e2d",children:"\u5c06 GPG \u516c\u94a5\u6dfb\u52a0\u5230\u9879\u76ee KEYS \u6587\u4ef6\u4e2d"}),"\n",(0,s.jsxs)(n.p,{children:["\u53d1\u5e03\u5206\u652f\u7684 svn \u4ed3\u5e93\u662f\uff1a",(0,s.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/release/incubator/fury",children:"https://dist.apache.org/repos/dist/release/incubator/fury"})]}),"\n",(0,s.jsx)(n.p,{children:"\u8bf7\u5728\u53d1\u5e03\u5206\u652f\u7684 KEYS \u4e2d\u6dfb\u52a0\u516c\u94a5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'svn co https://dist.apache.org/repos/dist/release/incubator/fury fury-dist\n# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.\ncd fury-dist\n(gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS # Append your key to the KEYS file\nsvn add .   # It is not needed if the KEYS document exists before.\nsvn ci -m "add gpg key for YOUR_NAME" # Later on, if you are asked to enter a username and password, just use your apache username and password.\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u5c06-gpg-\u516c\u94a5\u4e0a\u4f20\u5230\u60a8\u7684-github-\u5e10\u6237",children:"\u5c06 GPG \u516c\u94a5\u4e0a\u4f20\u5230\u60a8\u7684 GitHub \u5e10\u6237"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u8f93\u5165 ",(0,s.jsx)(n.code,{children:"https://github.com/settings/keys"})," \u4ee5\u6dfb\u52a0\u60a8\u7684 GPG \u5bc6\u94a5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u6dfb\u52a0\u540e\u53d1\u73b0\u201c\u672a\u9a8c\u8bc1\u201d\u5b57\u6837\uff0c\u8bf7\u5c06 GPG \u5bc6\u94a5\u4e2d\u4f7f\u7528\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u7ed1\u5b9a\u5230\u60a8\u7684 GitHub \u5e10\u6237\uff08",(0,s.jsx)(n.a,{href:"https://github.com/settings/emails%EF%BC%89%E3%80%82",children:"https://github.com/settings/emails\uff09\u3002"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5ef6\u4f38\u9605\u8bfb",children:"\u5ef6\u4f38\u9605\u8bfb"}),"\n",(0,s.jsx)(n.p,{children:"\u5efa\u8bae\u60a8\u5728\u53d1\u5e03\u4e4b\u524d\u9605\u8bfb\u4ee5\u4e0b\u6587\u6863\uff0c\u4e86\u89e3\u6709\u5173 Apache \u57fa\u91d1\u4f1a\u53d1\u5e03\u8f6f\u4ef6\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u4f46\u8fd9\u4e0d\u662f\u5fc5\u987b\u7684\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u53d1\u5e03\u653f\u7b56\uff1a",(0,s.jsx)(n.a,{href:"https://www.apache.org/legal/release-policy.html",children:"https://www.apache.org/legal/release-policy.html"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u5b75\u5316\u5668\u53d1\u5e03\uff1a",(0,s.jsx)(n.a,{href:"http://incubator.apache.org/guides/releasemanagement.html",children:"http://incubator.apache.org/guides/releasemanagement.html"})]}),"\n",(0,s.jsxs)(n.li,{children:["TLP \u7248\u672c\uff1a",(0,s.jsx)(n.a,{href:"https://infra.apache.org/release-distribution",children:"https://infra.apache.org/release-distribution"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u53d1\u5e03\u6807\u5fd7\uff1a",(0,s.jsx)(n.a,{href:"https://infra.apache.org/release-signing.html",children:"https://infra.apache.org/release-signing.html"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u53d1\u5e03\u53d1\u5e03\uff1a",(0,s.jsx)(n.a,{href:"https://infra.apache.org/release-publishing.html",children:"https://infra.apache.org/release-publishing.html"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u53d1\u5e03\u4e0b\u8f7d\u9875\u9762\uff1a",(0,s.jsx)(n.a,{href:"https://infra.apache.org/release-download-pages.html",children:"https://infra.apache.org/release-download-pages.html"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u53d1\u5e03 maven artifacts\uff1a",(0,s.jsx)(n.a,{href:"https://infra.apache.org/publishing-maven-artifacts.html",children:"https://infra.apache.org/publishing-maven-artifacts.html"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5f00\u59cb\u6709\u5173\u53d1\u5e03\u7684\u8ba8\u8bba",children:"\u5f00\u59cb\u6709\u5173\u53d1\u5e03\u7684\u8ba8\u8bba"}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u81f3\u4ee5\u4e0b\u5730\u5740\u53d1\u8d77\u6709\u5173\u4e0b\u4e00\u4e2a\u7248\u672c\u7684\u8ba8\u8bba\uff1a",(0,s.jsx)(n.a,{href:"mailto:dev@fury.apache.org",children:"dev@fury.apache.org"}),"\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:"\u6807\u9898\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[DISCUSS] Release Apache Fury(incubating) ${release_version}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5185\u5bb9\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Hello, Apache Fury(incubating) Community,\n\nThis is a call for a discussion to release Apache Fury(incubating) version ${release_version}.\n\nThe change lists about this release:\n\nhttps://github.com/apache/fury/compare/v0.4.1...v0.5.0\n\nPlease leave your comments here about this release plan. We will bump the version in repo and start the release process after the discussion.\n\nThanks,\n\n${name}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u51c6\u5907\u53d1\u5e03",children:"\u51c6\u5907\u53d1\u5e03"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u8ba8\u8bba\u7ed3\u679c\u4e2d\u6ca1\u6709\u51fa\u73b0\u53cd\u5bf9\u58f0\u97f3\uff0c\u60a8\u9700\u8981\u505a\u4e00\u4e9b\u53d1\u5e03\u7248\u672c\u7684\u51c6\u5907\u5de5\u4f5c\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"github-\u5206\u652f\u548c\u6807\u7b7e",children:"Github \u5206\u652f\u548c\u6807\u7b7e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,s.jsx)(n.code,{children:"releases-0.5.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u901a\u8fc7\u6267\u884c\u547d\u4ee4\u5c06\u7248\u672c ",(0,s.jsx)(n.code,{children:"$version"})," \u5347\u7ea7\u5230 ",(0,s.jsx)(n.code,{children:"python ci/release.py -l all -version $version"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u6267\u884c git commit \u5e76\u5c06\u5206\u652f\u63a8\u9001\u5230 ",(0,s.jsx)(n.code,{children:"git@github.com:apache/fury.git"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"git tag v0.5.0-rc1"})," \u521b\u5efa\u4e00\u4e2a\u65b0\u6807\u7b7e\uff0c\u7136\u540e\u5c06\u5176\u63a8\u9001\u5230 ",(0,s.jsx)(n.code,{children:"git@github.com:apache/fury.git"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6784\u5efa-artifacts-\u5e76\u4e0a\u4f20\u5230-svn-distdev-\u4ed3\u5e93",children:"\u6784\u5efa artifacts \u5e76\u4e0a\u4f20\u5230 SVN dist/dev \u4ed3\u5e93"}),"\n",(0,s.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u60a8\u9700\u8981\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"python ci/release.py build -v $version"})," \u6784\u5efa\u9884\u53d1\u5e03 artifacts\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u540e\u60a8\u9700\u8981\u628a\u5b83\u4e0a\u4f20\u5230 svn dist repo\u3002dev \u5206\u652f\u7684 dist \u4ed3\u5e93\u5730\u5740\u662f\uff1a",(0,s.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/dev/incubator/fury",children:"https://dist.apache.org/repos/dist/dev/incubator/fury"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.\nsvn co https://dist.apache.org/repos/dist/dev/incubator/fury fury-dist-dev\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u540e\uff0c\u4e0a\u4f20\u9879\u76ee\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'cd fury-dist-dev\n# create a directory named by version\nmkdir ${release_version}-${rc_version}\n# copy source code and signature package to the versioned directory\ncp ${repo_dir}/dist/* ${release_version}-${rc_version}\n# check svn status\nsvn status\n# add to svn\nsvn add ${release_version}-${rc_version}\n# check svn status\nsvn status\n# commit to SVN remote server\nsvn commit -m "Prepare for fury ${release_version}-${rc_version}"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8bbf\u95ee ",(0,s.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/dev/incubator/fury/",children:"https://dist.apache.org/repos/dist/dev/incubator/fury/"})," \u4ee5\u68c0\u67e5 artifacts \u662f\u5426\u6b63\u786e\u4e0a\u4f20\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5982\u679c\u51fa\u73b0\u95ee\u9898\u8be5\u600e\u4e48\u529e",children:"\u5982\u679c\u51fa\u73b0\u95ee\u9898\u8be5\u600e\u4e48\u529e"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u67d0\u4e9b\u6587\u4ef6\u662f\u610f\u5916\u51fa\u73b0\u6216\u8005\u53d1\u751f\u67d0\u4e9b\u9519\u8bef\uff0c\u5219\u9700\u8981\u5220\u9664\u76f8\u5173\u5185\u5bb9\u5e76\u6267\u884c ",(0,s.jsx)(n.code,{children:"svn delete"}),"\uff0c\u7136\u540e\u91cd\u590d\u4e0a\u8ff0\u4e0a\u4f20\u8fc7\u7a0b\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6295\u7968",children:"\u6295\u7968"}),"\n",(0,s.jsx)(n.p,{children:"\u4f5c\u4e3a\u4e00\u4e2a\u5b75\u5316\u9879\u76ee\uff0c\u65b0\u7248\u672c\u53d1\u5e03\u9700\u8981 Apache Fury \u793e\u533a\u548c\u5b75\u5316\u5668\u793e\u533a\u7684\u6295\u7968\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"release_version\uff1aFury \u7684\u7248\u672c\uff0c\u5982 0.5.0\u3002"}),"\n",(0,s.jsx)(n.li,{children:"release_candidate_version\uff1a\u6295\u7968\u7684\u7248\u672c\uff0c\u5982 0.5.0-rc1\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["maven_artifact_number\uff1aMaven \u6682\u5b58 artifacts \u7684\u6570\u91cf\u3002\u5982 1001. \u5177\u4f53\u6765\u8bf4\uff0c\u53ef\u4ee5\u901a\u8fc7\u641c\u7d22 \u201cfury\u201d \u6765\u627e\u5230 maven_artifact_number ",(0,s.jsx)(n.a,{href:"https://repository.apache.org/#stagingRepositories",children:"https://repository.apache.org/#stagingRepositories"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"fury-\u793e\u533a\u6295\u7968",children:"Fury \u793e\u533a\u6295\u7968"}),"\n",(0,s.jsxs)(n.p,{children:["\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u81f3 Fury Community\uff1a",(0,s.jsx)(n.a,{href:"mailto:dev@fury.apache.org",children:"dev@fury.apache.org"}),"\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:"\u6807\u9898\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[VOTE] Release Apache Fury(incubating) v${release_version}-${rc_version}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5185\u5bb9\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Hello, Apache Fury(incubating) Community:\n\nThis is a call for vote to release Apache Fury(Incubating)\nversion release-0.5.0-rc3.\n\nApache Fury(incubating) - A blazingly fast multi-language serialization\nframework powered by JIT and zero-copy.\n\nThe change lists about this release:\n\nhttps://github.com/apache/fury/compare/v0.4.1...v0.5.0-rc3\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/incubator/fury/0.5.0-rc3/\n\nThe maven staging for this release:\nhttps://repository.apache.org/content/repositories/orgapachefury-1003\n\nGit tag for the release:\nhttps://github.com/apache/fury/releases/tag/v0.5.0-rc3\n\nGit commit for the release:\nhttps://github.com/apache/fury/commit/fae06330edd049bb960536e978a45b97bca66faf\n\nThe artifacts signed with PGP key [5E580BA4], corresponding to\n[chaokunyang@apache.org], that can be found in keys file:\nhttps://downloads.apache.org/incubator/fury/KEYS\n\nThe vote will be open for at least 72 hours until the necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\nTo learn more about Fury, please see https://fury.apache.org/\n\n*Valid check is a requirement for a vote. *Checklist for reference:\n\n[ ] Download Fury is valid.\n[ ] Checksums and PGP signatures are valid.\n[ ] Source code distributions have correct names matching the current release.\n[ ] LICENSE and NOTICE files are correct.\n[ ] All files have license headers if necessary.\n[ ] No compiled archives bundled in source archive.\n[ ] Can compile from source.\n\nMore detail checklist please refer:\nhttps://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist\n\nHow to Build and Test, please refer to: https://github.com/apache/fury/blob/main/docs/guide/DEVELOPMENT.md\n\nThanks,\nChaokun Yang\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u81f3\u5c11\u83b7\u5f97 3 + 1 \u4e14\u5177\u6709\u7ea6\u675f\u529b\u7684\u6295\u7968\uff08\u6765\u81ea Fury Podling PMC \u6210\u5458\u548c\u63d0\u4ea4\u8005\uff09\u5e76\u6ca1\u6709\u6536\u5230\u5426\u51b3\u7968\u4e4b\u540e\uff0c\u53d1\u5e03\u6295\u7968\u7ed3\u679c\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"\u6807\u9898\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[RESULT][VOTE] Release Apache Fury(incubating) v${release_version}-${rc_version}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5185\u5bb9\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Hello, Apache Fury(incubating) Community,\n\nThe vote to release Apache Fury(Incubating) v${release_version}-${rc_version} has passed.\n\nThe vote PASSED with 3 binding +1 and 0 -1 vote:\n\nBinding votes:\n\n- xxx\n- yyy\n- zzz\n\nVote thread: ${vote_thread_url}\n\nThanks,\n\n${name}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5b75\u5316\u5668\u793e\u533a\u6295\u7968",children:"\u5b75\u5316\u5668\u793e\u533a\u6295\u7968"}),"\n",(0,s.jsxs)(n.p,{children:["\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u81f3\uff1a",(0,s.jsx)(n.a,{href:"mailto:general@incubator.apache.org",children:"general@incubator.apache.org"}),"\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:"\u6807\u9898\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[VOTE] Release Apache Fury(incubating) v${release_version}-${rc_version}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5185\u5bb9\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Hello everyone,\n\nThis is a call for the vote to release Apache Fury(Incubating) v${release_version}-${rc_version}.\n\nThe Apache Fury community has voted and approved the release of Apache\nFury(incubating) v${release_version}-${rc_version}. We now kindly request the IPMC members\nreview and vote for this release.\n\nApache Fury(incubating) - A blazingly fast multi-language serialization\nframework powered by JIT and zero-copy.\n\nFury community vote thread:\n${community_vote_thread_url}\n\nVote result thread:\n${community_vote_result_thread_url}\n\nThe release candidate:\nhttps://dist.apache.org/repos/dist/dev/incubator/fury/${release_version}-${rc_version}/\n\nThis release has been signed with a PGP available here:\nhttps://downloads.apache.org/incubator/fury/KEYS\n\nGit tag for the release:\nhttps://github.com/apache/fury/releases/tag/v${release_version}-${rc_version}/\n\nGit commit for the release:\nhttps://github.com/apache/fury/commit/$xxx\n\nMaven staging repo:\nhttps://repository.apache.org/content/repositories/orgapachefury-${maven_artifact_number}/\n\nHow to Build and Test, please refer to:\nhttps://github.com/apache/fury/blob/main/docs/guide/DEVELOPMENT.md\n\nPlease download, verify, and test.\n\nThe VOTE will pass after 3 binding approve.\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\nTo learn more about apache fury, please see https://fury.apache.org/\n\nChecklist for reference:\n\n[ ] Download links are valid.\n[ ] Checksums and signatures.\n[ ] LICENSE/NOTICE files exist\n[ ] No unexpected binary files\n[ ] All source files have ASF headers\n[ ] Can compile from source\n\nThanks,\n\n${name}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u81f3\u5c11 72 \u5c0f\u65f6\u540e\uff0c\u81f3\u5c11\u6709 3 + 1 \u5177\u6709\u7ea6\u675f\u529b\u7684\u6295\u7968\uff08\u6765\u81ea\u5b75\u5316\u5668 PMC \u6210\u5458\uff09\u4e14\u6ca1\u6709\u5426\u51b3\u7968\uff0c\u53d1\u5e03\u6295\u7968\u7ed3\u679c\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"\u6807\u9898\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[RESULT][VOTE] Release Apache Fury(incubating) v${release_version}-${rc_version}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5185\u5bb9\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Hi Incubator PMC,\n\nThe vote to release Apache Fury(incubating) v${release_version}-${rc_version} has passed with\n4 +1 binding and 3 +1 non-binding votes, no +0 or -1 votes.\n\nBinding votes\uff1a\n\n- xxx\n- yyy\n- zzz\n\nNon-Binding votes:\n\n- aaa\n\nVote thread: ${incubator_vote_thread_url}\n\nThanks for reviewing and voting for our release candidate.\n\nWe will proceed with publishing the approved artifacts and sending out the announcement soon.\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5982\u679c\u6295\u7968\u5931\u8d25\u600e\u4e48\u529e",children:"\u5982\u679c\u6295\u7968\u5931\u8d25\u600e\u4e48\u529e"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u6295\u7968\u5931\u8d25\uff0c\u8bf7\u5355\u51fb\u201c\u5220\u9664\u201d\u4ee5\u5220\u9664\u6682\u5b58\u7684 Maven artifacts\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u89e3\u51b3\u63d0\u51fa\u7684\u95ee\u9898\uff0c\u7136\u540e\u518d\u6b21\u63d0\u51fa ",(0,s.jsx)(n.code,{children:"rc_version"})," \u7684\u65b0\u6295\u7968\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5b98\u65b9\u53d1\u5e03",children:"\u5b98\u65b9\u53d1\u5e03"}),"\n",(0,s.jsx)(n.h3,{id:"\u5c06-artifacts-\u53d1\u5e03\u5230-svn-\u53d1\u5e03\u76ee\u5f55",children:"\u5c06 artifacts \u53d1\u5e03\u5230 SVN \u53d1\u5e03\u76ee\u5f55"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"release_version\uff1aFury \u7684\u53d1\u5e03\u7248\u672c\uff0c\u5982 0.5.0"}),"\n",(0,s.jsx)(n.li,{children:"release_candidate_version\uff1a\u6295\u7968\u7248\u672c\uff0c\u5982 0.5.0-rc1"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'svn mv https://dist.apache.org/repos/dist/dev/incubator/fury/${release_version}-${rc_version} https://dist.apache.org/repos/dist/release/incubator/fury/${release_version} -m "Release fury ${release_version}"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u66f4\u6539-fury-\u7f51\u7ad9\u4e0b\u8f7d\u94fe\u63a5",children:"\u66f4\u6539 Fury \u7f51\u7ad9\u4e0b\u8f7d\u94fe\u63a5"}),"\n",(0,s.jsxs)(n.p,{children:["\u63d0\u4ea4 PR \u5230 ",(0,s.jsx)(n.a,{href:"https://github.com/apache/fury-site",children:"https://github.com/apache/fury-site"})," \u4ed3\u5e93\u66f4\u65b0 Fury \u7248\u672c\uff0c",(0,s.jsx)(n.a,{href:"https://fury.apache.org/download",children:"\u4e0b\u8f7d\u9875\u9762"})]}),"\n",(0,s.jsx)(n.h3,{id:"\u53d1\u5e03-maven-artifacts",children:"\u53d1\u5e03 Maven artifacts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"maven_artifact_number\uff1aMaven \u6682\u5b58 artifacts \u7684\u6570\u91cf\u3002\u5982 1001\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u6253\u5f00",(0,s.jsx)(n.a,{href:"https://repository.apache.org/#stagingRepositories",children:"https://repository.apache.org/#stagingRepositories"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["\u627e\u5230 artifacts ",(0,s.jsx)(n.code,{children:"orgapachefury-${maven_artifact_number}"}),"\uff0c\u70b9\u51fb\u201c\u53d1\u5e03\u201d\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u53d1\u9001\u516c\u544a",children:"\u53d1\u9001\u516c\u544a"}),"\n",(0,s.jsxs)(n.p,{children:["\u5c06\u53d1\u5e03\u516c\u544a\u53d1\u9001\u7ed9 ",(0,s.jsx)(n.a,{href:"mailto:dev@fury.apache.org",children:"dev@fury.apache.org"})," \u5e76\u4e14\u6284\u9001\u7ed9 ",(0,s.jsx)(n.a,{href:"mailto:announce@apache.org",children:"announce@apache.org"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6807\u9898\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[ANNOUNCE] Release Apache Fury(incubating) ${release_version}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5185\u5bb9\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Hi all,\n\nThe Apache Fury(incubating) community is pleased to announce\nthat Apache Fury(incubating) {release_version} has been released!\n\nApache Fury(incubating) - A blazingly fast multi-language serialization\nframework powered by JIT and zero-copy.\n\nThe release notes are available here:\nhttps://github.com/apache/fury/releases/tag/v${release_version}\n\nFor the complete list of changes:\nhttps://github.com/apache/fury/compare/v0.5.0...v${release_version}\n\nApache Fury website: https://fury.apache.org/\n\nDownload Links: https://fury.apache.org/download\n\nFury Resources:\n- Fury github repo: https://github.com/apache/fury\n- Issue: https://github.com/apache/fury/issues\n- Mailing list: dev@fury.apache.org\n\nWe are looking to grow our community and welcome new contributors. If\nyou are interested in contributing to Fury, please contact us on the\nmailing list or on GitHub. We will be happy to help you get started.\n\n------------------\nBest Regards,\n${your_name}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u81f3\u6b64\uff0c\u6574\u4e2a\u53d1\u5e03\u6d41\u7a0b\u7ed3\u675f\u3002"})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>t});var s=r(67294);const a={},i=s.createContext(a);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[8440],{3193:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(5893),t=r(1151);const i={title:"How to release",sidebar_position:0,id:"how_to_release"},s=void 0,o={id:"community/how_to_release",title:"How to release",description:"This document mainly introduces how the release manager releases a new version of Apache Fury.",source:"@site/i18n/eu-US/docusaurus-plugin-content-docs/current/community/how_to_release.md",sourceDirName:"community",slug:"/community/how_to_release",permalink:"/docs/community/how_to_release",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/fury-site/tree/main/i18n/eu-US/docusaurus-plugin-content-docs/community/how_to_release.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"How to release",sidebar_position:0,id:"how_to_release"},sidebar:"communitySidebar",previous:{title:"How to join Fury",permalink:"/docs/community/how_to_join_community"},next:{title:"How to verify",permalink:"/docs/community/how_to_verify"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"First-time as a release manager",id:"first-time-as-a-release-manager",level:2},{value:"Environmental requirements",id:"environmental-requirements",level:3},{value:"Prepare GPG Key",id:"prepare-gpg-key",level:3},{value:"Install GPG",id:"install-gpg",level:4},{value:"Generate GPG Key",id:"generate-gpg-key",level:4},{value:"Upload your public key to public GPG keyserver",id:"upload-your-public-key-to-public-gpg-keyserver",level:4},{value:"Check whether the key is created successfully",id:"check-whether-the-key-is-created-successfully",level:4},{value:"Add your GPG public key to the project KEYS file",id:"add-your-gpg-public-key-to-the-project-keys-file",level:4},{value:"Upload the GPG public key to your GitHub account",id:"upload-the-gpg-public-key-to-your-github-account",level:4},{value:"Further reading",id:"further-reading",level:3},{value:"Start discussion about the release",id:"start-discussion-about-the-release",level:2},{value:"Preparing for release",id:"preparing-for-release",level:2},{value:"Github branch and tag",id:"github-branch-and-tag",level:3},{value:"Build and upload artifacts to SVN dist/dev repo",id:"build-and-upload-artifacts-to-svn-distdev-repo",level:3},{value:"What to do if something goes wrong",id:"what-to-do-if-something-goes-wrong",level:3},{value:"Voting",id:"voting",level:2},{value:"Fury Community Vote",id:"fury-community-vote",level:3},{value:"Incubator Community Vote",id:"incubator-community-vote",level:3},{value:"What if vote fail",id:"what-if-vote-fail",level:3},{value:"Official Release",id:"official-release",level:2},{value:"Publish artifacts to SVN Release Directory",id:"publish-artifacts-to-svn-release-directory",level:3},{value:"Change Fury Website download link",id:"change-fury-website-download-link",level:3},{value:"Release Maven artifacts",id:"release-maven-artifacts",level:3},{value:"Send the announcement",id:"send-the-announcement",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This document mainly introduces how the release manager releases a new version of Apache Fury."}),"\n",(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(n.p,{children:"Source Release is the most important part which Apache values."}),"\n",(0,a.jsx)(n.p,{children:"Please pay more attention to license and signing issues.\nPublishing software is a serious thing and has legal consequences."}),"\n",(0,a.jsx)(n.h2,{id:"first-time-as-a-release-manager",children:"First-time as a release manager"}),"\n",(0,a.jsx)(n.h3,{id:"environmental-requirements",children:"Environmental requirements"}),"\n",(0,a.jsx)(n.p,{children:"This release process is operated in the Ubuntu OS, and the following tools are required:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"JDK 1.8"}),"\n",(0,a.jsx)(n.li,{children:"Apache Maven 3.x"}),"\n",(0,a.jsx)(n.li,{children:"Python 3.8"}),"\n",(0,a.jsx)(n.li,{children:"GnuPG 2.x"}),"\n",(0,a.jsx)(n.li,{children:"Git"}),"\n",(0,a.jsx)(n.li,{children:"SVN (apache uses svn to host project releases)"}),"\n",(0,a.jsxs)(n.li,{children:["Pay attention to setting environment variables: if you configure gpg keys under a different directory, please ",(0,a.jsx)(n.code,{children:"export GNUPGHOME=$(xxx)"})]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"prepare-gpg-key",children:"Prepare GPG Key"}),"\n",(0,a.jsx)(n.p,{children:"If you are the first to become a release manager, you need to prepare a gpg key."}),"\n",(0,a.jsxs)(n.p,{children:["Following is a quick setup, you can refer to ",(0,a.jsx)(n.a,{href:"https://infra.apache.org/openpgp.html",children:"Apache openpgp doc"})," for further details."]}),"\n",(0,a.jsx)(n.h4,{id:"install-gpg",children:"Install GPG"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt install gnupg2\n"})}),"\n",(0,a.jsx)(n.h4,{id:"generate-gpg-key",children:"Generate GPG Key"}),"\n",(0,a.jsx)(n.p,{children:"Please use your apache name and email for generate key"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ gpg --full-gen-key\ngpg (GnuPG) 2.2.20; Copyright (C) 2020 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\n  (14) Existing key from card\nYour selection? 1 # input 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096 # input 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0) 0 # input 0\nKey does not expire at all\nIs this correct? (y/N) y # input y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: Chaokun Yang                   # input your name\nEmail address: chaokunyang@apache.org     # input your email\nComment: CODE SIGNING KEY                 # input some annotations, optional\nYou selected this USER-ID:\n    \"Chaokun <chaokunyang@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O # input O\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\n\n# Input the security key\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Please enter this passphrase                         \u2502\n\u2502                                                      \u2502\n\u2502 Passphrase: _______________________________          \u2502\n\u2502                                                      \u2502\n\u2502       <OK>                              <Cancel>     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n# key generation will be done after your inputting the key with the following output\ngpg: key E49B00F626B marked as ultimately trusted\ngpg: revocation certificate stored as '/Users/chaokunyang/.gnupg/openpgp-revocs.d/1E2CDAE4C08AD7D694D1CB139D7BE8E45E580BA4.rev'\npublic and secret key created and signed.\n\npub   rsa4096 2022-07-12 [SC]\n      1E2CDAE4C08AD7D694D1CB139D7BE8E45E580BA4\nuid           [ultimate] Chaokun <chaokunyang@apache.org>\nsub   rsa4096 2022-07-12 [E]\n"})}),"\n",(0,a.jsx)(n.h4,{id:"upload-your-public-key-to-public-gpg-keyserver",children:"Upload your public key to public GPG keyserver"}),"\n",(0,a.jsx)(n.p,{children:"Firstly, list your key:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"gpg --list-keys\n"})}),"\n",(0,a.jsx)(n.p,{children:"The output is like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--------------------------------------------------\npub   rsa4096 2024-03-27 [SC]\n      1E2CDAE4C08AD7D694D1CB139D7BE8E45E580BA4\nuid           [ultimate] chaokunyang (CODE SIGNING KEY) <chaokunyang@apache.org>\nsub   rsa4096 2024-03-27 [E]\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then, send your key id to key server:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"gpg --keyserver keys.openpgp.org --send-key <key-id> # e.g., 1E2CDAE4C08AD7D694D1CB139D7BE8E45E580BA4\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Among them, ",(0,a.jsx)(n.code,{children:"keys.openpgp.org"})," is a randomly selected keyserver, you can use keyserver.ubuntu.com or any other full-featured keyserver."]}),"\n",(0,a.jsx)(n.h4,{id:"check-whether-the-key-is-created-successfully",children:"Check whether the key is created successfully"}),"\n",(0,a.jsx)(n.p,{children:"Uploading takes about one minute; after that, you can check by email at the corresponding keyserver."}),"\n",(0,a.jsxs)(n.p,{children:["Uploading keys to the keyserver is mainly for joining a ",(0,a.jsx)(n.a,{href:"https://infra.apache.org/release-signing.html#web-of-trust",children:"Web of Trust"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"add-your-gpg-public-key-to-the-project-keys-file",children:"Add your GPG public key to the project KEYS file"}),"\n",(0,a.jsxs)(n.p,{children:["The svn repository of the release branch is: ",(0,a.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/release/incubator/fury",children:"https://dist.apache.org/repos/dist/release/incubator/fury"})]}),"\n",(0,a.jsx)(n.p,{children:"Please add the public key to KEYS in the release branch:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'svn co https://dist.apache.org/repos/dist/release/incubator/fury fury-dist\n# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.\ncd fury-dist\n(gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS # Append your key to the KEYS file\nsvn add .   # It is not needed if the KEYS document exists before.\nsvn ci -m "add gpg key for YOUR_NAME" # Later on, if you are asked to enter a username and password, just use your apache username and password.\n'})}),"\n",(0,a.jsx)(n.h4,{id:"upload-the-gpg-public-key-to-your-github-account",children:"Upload the GPG public key to your GitHub account"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Enter ",(0,a.jsx)(n.a,{href:"https://github.com/settings/keys",children:"https://github.com/settings/keys"})," to add your GPG key."]}),"\n",(0,a.jsxs)(n.li,{children:["Please remember to bind the email address used in the GPG key to your GitHub account (",(0,a.jsx)(n.a,{href:"https://github.com/settings/emails",children:"https://github.com/settings/emails"}),') if you find "unverified" after adding it.']}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"further-reading",children:"Further reading"}),"\n",(0,a.jsx)(n.p,{children:"It's recommended but not mandatory to read following documents before making a release to know more details about apache release:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Release policy: ",(0,a.jsx)(n.a,{href:"https://www.apache.org/legal/release-policy.html",children:"https://www.apache.org/legal/release-policy.html"})]}),"\n",(0,a.jsxs)(n.li,{children:["Incubator release: ",(0,a.jsx)(n.a,{href:"http://incubator.apache.org/guides/releasemanagement.html",children:"http://incubator.apache.org/guides/releasemanagement.html"})]}),"\n",(0,a.jsxs)(n.li,{children:["TLP release: ",(0,a.jsx)(n.a,{href:"https://infra.apache.org/release-distribution",children:"https://infra.apache.org/release-distribution"})]}),"\n",(0,a.jsxs)(n.li,{children:["Release sign: ",(0,a.jsx)(n.a,{href:"https://infra.apache.org/release-signing.html",children:"https://infra.apache.org/release-signing.html"})]}),"\n",(0,a.jsxs)(n.li,{children:["Release publish: ",(0,a.jsx)(n.a,{href:"https://infra.apache.org/release-publishing.html",children:"https://infra.apache.org/release-publishing.html"})]}),"\n",(0,a.jsxs)(n.li,{children:["Release download pages: ",(0,a.jsx)(n.a,{href:"https://infra.apache.org/release-download-pages.html",children:"https://infra.apache.org/release-download-pages.html"})]}),"\n",(0,a.jsxs)(n.li,{children:["Publishing maven artifacts: ",(0,a.jsx)(n.a,{href:"https://infra.apache.org/publishing-maven-artifacts.html",children:"https://infra.apache.org/publishing-maven-artifacts.html"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"start-discussion-about-the-release",children:"Start discussion about the release"}),"\n",(0,a.jsxs)(n.p,{children:["Start a discussion about the next release via sending email to: ",(0,a.jsx)(n.a,{href:"mailto:dev@fury.apache.org",children:"dev@fury.apache.org"}),":"]}),"\n",(0,a.jsx)(n.p,{children:"Title:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[DISCUSS] Release Apache Fury(incubating) ${release_version}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hello, Apache Fury(incubating) Community,\n\nThis is a call for a discussion to release Apache Fury(incubating) version ${release_version}.\n\nThe change lists about this release:\n\nhttps://github.com/apache/fury/compare/v0.4.1...v0.5.0\n\nPlease leave your comments here about this release plan. We will bump the version in repo and start the release process after the discussion.\n\nThanks,\n\n${name}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"preparing-for-release",children:"Preparing for release"}),"\n",(0,a.jsx)(n.p,{children:"If the discussion goes positive, you will need to prepare the release artifiacts."}),"\n",(0,a.jsx)(n.h3,{id:"github-branch-and-tag",children:"Github branch and tag"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Create a new branch named ",(0,a.jsx)(n.code,{children:"releases-0.5.0"})]}),"\n",(0,a.jsxs)(n.li,{children:["Bump version to ",(0,a.jsx)(n.code,{children:"$version"})," by executing command ",(0,a.jsx)(n.code,{children:"python ci/release.py -l all -version $version"})]}),"\n",(0,a.jsxs)(n.li,{children:["Make a git commit and push the branch to ",(0,a.jsx)(n.code,{children:"git@github.com:apache/fury.git"})]}),"\n",(0,a.jsxs)(n.li,{children:["Create a new tag by ",(0,a.jsx)(n.code,{children:"git tag v0.5.0-rc1"}),", then push it to ",(0,a.jsx)(n.code,{children:"git@github.com:apache/fury.git"})]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"build-and-upload-artifacts-to-svn-distdev-repo",children:"Build and upload artifacts to SVN dist/dev repo"}),"\n",(0,a.jsxs)(n.p,{children:["First you need to build source release artifacts by ",(0,a.jsx)(n.code,{children:"python ci/release.py build -v $version"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Then you need to upload it to svn dist repo. The dist repo of the dev branch is: ",(0,a.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/dev/incubator/fury",children:"https://dist.apache.org/repos/dist/dev/incubator/fury"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.\nsvn co https://dist.apache.org/repos/dist/dev/incubator/fury fury-dist-dev\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then, upload the artifacts:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'cd fury-dist-dev\n# create a directory named by version\nmkdir ${release_version}-${rc_version}\n# copy source code and signature package to the versioned directory\ncp ${repo_dir}/dist/* ${release_version}-${rc_version}\n# check svn status\nsvn status\n# add to svn\nsvn add ${release_version}-${rc_version}\n# check svn status\nsvn status\n# commit to SVN remote server\nsvn commit -m "Prepare for fury ${release_version}-${rc_version}"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Visit ",(0,a.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/dev/incubator/fury/",children:"https://dist.apache.org/repos/dist/dev/incubator/fury/"})," to check the artifacts are uploaded correctly."]}),"\n",(0,a.jsx)(n.h3,{id:"what-to-do-if-something-goes-wrong",children:"What to do if something goes wrong"}),"\n",(0,a.jsxs)(n.p,{children:["If some files are unexpected, you need to remove by ",(0,a.jsx)(n.code,{children:"svn delete"})," and repeat the above upload process."]}),"\n",(0,a.jsx)(n.h2,{id:"voting",children:"Voting"}),"\n",(0,a.jsx)(n.p,{children:"As an incubating project, Fury requires votes from both the FUry Community and Incubator Community."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"release_version: the version for fury, like 0.5.0."}),"\n",(0,a.jsx)(n.li,{children:"release_candidate_version: the version for voting, like 0.5.0-rc1."}),"\n",(0,a.jsxs)(n.li,{children:['maven_artifact_number: the number for Maven staging artifacts, like 1001. Specifically, the maven_artifact_number can be found by searching "fury" on ',(0,a.jsx)(n.a,{href:"https://repository.apache.org/#stagingRepositories",children:"https://repository.apache.org/#stagingRepositories"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"fury-community-vote",children:"Fury Community Vote"}),"\n",(0,a.jsxs)(n.p,{children:["Send an email to Fury Community: ",(0,a.jsx)(n.a,{href:"mailto:dev@fury.apache.org",children:"dev@fury.apache.org"}),":"]}),"\n",(0,a.jsx)(n.p,{children:"Title:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[VOTE] Release Apache Fury(incubating) v${release_version}-${rc_version}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hello, Apache Fury(incubating) Community:\n\nThis is a call for vote to release Apache Fury(Incubating)\nversion release-0.5.0-rc3.\n\nApache Fury(incubating) - A blazingly fast multi-language serialization\nframework powered by JIT and zero-copy.\n\nThe change lists about this release:\n\nhttps://github.com/apache/fury/compare/v0.4.1...v0.5.0-rc3\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/incubator/fury/0.5.0-rc3/\n\nThe maven staging for this release:\nhttps://repository.apache.org/content/repositories/orgapachefury-1003\n\nGit tag for the release:\nhttps://github.com/apache/fury/releases/tag/v0.5.0-rc3\n\nGit commit for the release:\nhttps://github.com/apache/fury/commit/fae06330edd049bb960536e978a45b97bca66faf\n\nThe artifacts signed with PGP key [5E580BA4], corresponding to\n[chaokunyang@apache.org], that can be found in keys file:\nhttps://downloads.apache.org/incubator/fury/KEYS\n\nThe vote will be open for at least 72 hours until the necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\nTo learn more about Fury, please see https://fury.apache.org/\n\n*Valid check is a requirement for a vote. *Checklist for reference:\n\n[ ] Download Fury is valid.\n[ ] Checksums and PGP signatures are valid.\n[ ] Source code distributions have correct names matching the current release.\n[ ] LICENSE and NOTICE files are correct.\n[ ] All files have license headers if necessary.\n[ ] No compiled archives bundled in source archive.\n[ ] Can compile from source.\n\nMore detail checklist please refer:\nhttps://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist\n\nHow to Build and Test, please refer to: https://github.com/apache/fury/blob/main/docs/guide/DEVELOPMENT.md\n\n\nThanks,\nChaokun Yang\n"})}),"\n",(0,a.jsx)(n.p,{children:"After at least 3 +1 binding vote (from Fury Podling PMC member and committers) and no veto, claim the vote result:"}),"\n",(0,a.jsx)(n.p,{children:"Title:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[RESULT][VOTE] Release Apache Fury(incubating) v${release_version}-${rc_version}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hello, Apache Fury(incubating) Community,\n\nThe vote to release Apache Fury(Incubating) v${release_version}-${rc_version} has passed.\n\nThe vote PASSED with 3 binding +1 and 0 -1 vote:\n\nBinding votes:\n\n- xxx\n- yyy\n- zzz\n\nVote thread: ${vote_thread_url}\n\nThanks,\n\n${name}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"incubator-community-vote",children:"Incubator Community Vote"}),"\n",(0,a.jsxs)(n.p,{children:["Send an email to: ",(0,a.jsx)(n.a,{href:"mailto:general@incubator.apache.org",children:"general@incubator.apache.org"}),":"]}),"\n",(0,a.jsx)(n.p,{children:"Title:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[VOTE] Release Apache Fury(incubating) v${release_version}-${rc_version}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hello everyone,\n\nThis is a call for the vote to release Apache Fury(Incubating) v${release_version}-${rc_version}.\n\nThe Apache Fury community has voted and approved the release of Apache\nFury(incubating) v${release_version}-${rc_version}. We now kindly request the IPMC members\nreview and vote for this release.\n\nApache Fury(incubating) - A blazingly fast multi-language serialization\nframework powered by JIT and zero-copy.\n\nFury community vote thread:\n${community_vote_thread_url}\n\nVote result thread:\n${community_vote_result_thread_url}\n\nThe release candidate:\nhttps://dist.apache.org/repos/dist/dev/incubator/fury/${release_version}-${rc_version}/\n\nThis release has been signed with a PGP available here:\nhttps://downloads.apache.org/incubator/fury/KEYS\n\nGit tag for the release:\nhttps://github.com/apache/fury/releases/tag/v${release_version}-${rc_version}/\n\nGit commit for the release:\nhttps://github.com/apache/fury/commit/$xxx\n\nMaven staging repo:\nhttps://repository.apache.org/content/repositories/orgapachefury-${maven_artifact_number}/\n\nHow to Build and Test, please refer to:\nhttps://github.com/apache/fury/blob/main/docs/guide/DEVELOPMENT.md\n\nPlease download, verify, and test.\n\nThe VOTE will pass after 3 binding approve.\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\nTo learn more about apache fury, please see https://fury.apache.org/\n\nChecklist for reference:\n\n[ ] Download links are valid.\n[ ] Checksums and signatures.\n[ ] LICENSE/NOTICE files exist\n[ ] No unexpected binary files\n[ ] All source files have ASF headers\n[ ] Can compile from source\n\nThanks,\n\n${name}\n"})}),"\n",(0,a.jsx)(n.p,{children:"After at least 72 hours with at least 3 +1 binding vote (from Incubator PMC member) and no veto, claim the vote result:"}),"\n",(0,a.jsx)(n.p,{children:"Title:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[RESULT][VOTE] Release Apache Fury(incubating) v${release_version}-${rc_version}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hi Incubator PMC,\n\nThe vote to release Apache Fury(incubating) v${release_version}-${rc_version} has passed with\n4 +1 binding and 3 +1 non-binding votes, no +0 or -1 votes.\n\nBinding votes\uff1a\n\n- xxx\n- yyy\n- zzz\n\nNon-Binding votes:\n\n- aaa\n\nVote thread: ${incubator_vote_thread_url}\n\nThanks for reviewing and voting for our release candidate.\n\nWe will proceed with publishing the approved artifacts and sending out the announcement soon.\n"})}),"\n",(0,a.jsx)(n.h3,{id:"what-if-vote-fail",children:"What if vote fail"}),"\n",(0,a.jsx)(n.p,{children:'If the vote failed, click "Drop" to drop the staging Maven artifacts.'}),"\n",(0,a.jsxs)(n.p,{children:["Address the raised issues, then bump ",(0,a.jsx)(n.code,{children:"rc_version"})," and file a new vote again."]}),"\n",(0,a.jsx)(n.h2,{id:"official-release",children:"Official Release"}),"\n",(0,a.jsx)(n.h3,{id:"publish-artifacts-to-svn-release-directory",children:"Publish artifacts to SVN Release Directory"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"release_version: the release version for fury, like 0.5.0"}),"\n",(0,a.jsx)(n.li,{children:"release_candidate_version: the version for voting, like 0.5.0-rc1"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'svn mv https://dist.apache.org/repos/dist/dev/incubator/fury/${release_version}-${rc_version} https://dist.apache.org/repos/dist/release/incubator/fury/${release_version} -m "Release fury ${release_version}"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"change-fury-website-download-link",children:"Change Fury Website download link"}),"\n",(0,a.jsxs)(n.p,{children:["Submit a PR to ",(0,a.jsx)(n.a,{href:"https://github.com/apache/fury-site",children:"https://github.com/apache/fury-site"})," to update ",(0,a.jsx)(n.a,{href:"https://fury.apache.org/download",children:"Download page"})]}),"\n",(0,a.jsx)(n.h3,{id:"release-maven-artifacts",children:"Release Maven artifacts"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"maven_artifact_number: the number for Maven staging artifacts, like 1001."}),"\n",(0,a.jsxs)(n.li,{children:["Open ",(0,a.jsx)(n.a,{href:"https://repository.apache.org/#stagingRepositories",children:"https://repository.apache.org/#stagingRepositories"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Find the artifact ",(0,a.jsx)(n.code,{children:"orgapachefury-${maven_artifact_number}"}),', click "Release".']}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"send-the-announcement",children:"Send the announcement"}),"\n",(0,a.jsxs)(n.p,{children:["Send the release announcement to ",(0,a.jsx)(n.a,{href:"mailto:dev@fury.apache.org",children:"dev@fury.apache.org"})," and CC ",(0,a.jsx)(n.a,{href:"mailto:announce@apache.org",children:"announce@apache.org"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Title:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[ANNOUNCE] Release Apache Fury(incubating) ${release_version}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hi all,\n\nThe Apache Fury(incubating) community is pleased to announce\nthat Apache Fury(incubating) {release_version} has been released!\n\nApache Fury(incubating) - A blazingly fast multi-language serialization\nframework powered by JIT and zero-copy.\n\nThe release notes are available here:\nhttps://github.com/apache/fury/releases/tag/v${release_version}\n\nFor the complete list of changes:\nhttps://github.com/apache/fury/compare/v0.5.0...v${release_version}\n\nApache Fury website: https://fury.apache.org/\n\nDownload Links: https://fury.apache.org/download\n\nFury Resources:\n- Fury github repo: https://github.com/apache/fury\n- Issue: https://github.com/apache/fury/issues\n- Mailing list: dev@fury.apache.org\n\nWe are looking to grow our community and welcome new contributors. If\nyou are interested in contributing to Fury, please contact us on the\nmailing list or on GitHub. We will be happy to help you get started.\n\n------------------\nBest Regards,\n${your_name}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var a=r(7294);const t={},i=a.createContext(t);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);
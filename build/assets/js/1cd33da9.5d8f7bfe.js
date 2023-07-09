"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1463],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),d=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),p=a,g=u["".concat(o,".").concat(p)]||u[p]||m[p]||i;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var d=2;d<i;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8384:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:1},s="(S)FTP Verbindung herstellen",l={unversionedId:"gameserver/gameserver-basics/was-ist-eine-domain",id:"gameserver/gameserver-basics/was-ist-eine-domain",title:"(S)FTP Verbindung herstellen",description:"Herstellen einer (S)FTP Verbindung zu deinem Gameserver",source:"@site/docs/gameserver/gameserver-basics/was-ist-eine-domain.md",sourceDirName:"gameserver/gameserver-basics",slug:"/gameserver/gameserver-basics/was-ist-eine-domain",permalink:"/docs/gameserver/gameserver-basics/was-ist-eine-domain",draft:!1,editUrl:"https://github.com/Native-Servers-com/Native-Servers-com.github.io/tree/main/docs/gameserver/gameserver-basics/was-ist-eine-domain.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"gameserversidebar",previous:{title:"Gameserver Basics",permalink:"/docs/category/gameserver-basics"}},o={},d=[{value:"Zugangsdaten abrufen",id:"zugangsdaten-abrufen",level:3},{value:"Automatisch Verbindung via (S)FTP herstellen",id:"automatisch-verbindung-via-sftp-herstellen",level:3},{value:"Manuell eine Verbindung via (S)FTP herstellen",id:"manuell-eine-verbindung-via-sftp-herstellen",level:3}],c={toc:d},u="wrapper";function m(e){let{components:n,...i}=e;return(0,a.kt)(u,(0,r.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sftp-verbindung-herstellen"},"(S)FTP Verbindung herstellen"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Herstellen einer (S)FTP Verbindung zu deinem Gameserver")),(0,a.kt)("h3",{id:"zugangsdaten-abrufen"},"Zugangsdaten abrufen"),(0,a.kt)("p",null,"Logge Dich in die Gameserver-Cloud ein, und klicke bei deinem Gameserver auf den Tab ",(0,a.kt)("strong",{parentName:"p"},"Settings"),". Hier findest du die Adresse f\xfcr die (S)FTP Verbindung, so wie deinen Nutzernamen. Das Passwort ist das selbe, wie f\xfcr deinen Login in die Gameserver Cloud.\xa0"),(0,a.kt)("h3",{id:"automatisch-verbindung-via-sftp-herstellen"},"Automatisch Verbindung via (S)FTP herstellen"),(0,a.kt)("p",null,"Am einfachsten kannst Du nun via (S)FTP zu deinem Gameserver verbinden, indem du auf ",(0,a.kt)("strong",{parentName:"p"},"Launch SFTP")," klickst:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(4494).Z,width:"1181",height:"743"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(6146).Z,width:"614",height:"194"})),(0,a.kt)("h3",{id:"manuell-eine-verbindung-via-sftp-herstellen"},"Manuell eine Verbindung via (S)FTP herstellen"),(0,a.kt)("p",null,"\xa0Sollte die automatische Verbindung nicht funktionieren, kannst du die Zugangsdaten auch manuell in FileZilla oder ein anderes FTP Programm deiner Wahl eintragen. Achte dabei darauf, dass der Port aus ",(0,a.kt)("inlineCode",{parentName:"p"},"sftp://spike6.native-servers.com:2022")," (In diesem Fall ",(0,a.kt)("strong",{parentName:"p"},"2022"),") aus dem Link entfernt und stattdessen in das Feld ",(0,a.kt)("strong",{parentName:"p"},"Port")," eingetragen werden muss:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(1128).Z,width:"781",height:"212"})),(0,a.kt)("p",null,"Im Anschluss wirst du gebeten, den Server-Schl\xfcssel zu akzeptieren. Dies kannst du ohne Bedenken tun:\xa0"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(3477).Z,width:"585",height:"226"})),(0,a.kt)("p",null,"Danach ist die Verbindung aufgebaut, und du kannst deinen Server via ",(0,a.kt)("strong",{parentName:"p"},"SFTP")," verwalten.\xa0"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(6655).Z,width:"998",height:"832"})))}m.isMDXComponent=!0},1128:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/filezilla_connect_1-878f6ac16818fc83c5737548882f80dc.png"},3477:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/filezilla_connect_2-0a6a63b702bc23e9298c53bfcee53f22.png"},6655:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/filezilla_connect_3-b0fbf9a8fdadacb2a2dfd428d42a06f9.png"},4494:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/ftp_settings_1-0bf39877ac920cf5d11e622dabcfec66.png"},6146:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/ftp_settings_1_confirm-42eb8d3a77a3618cd797fb60590dc35e.png"}}]);
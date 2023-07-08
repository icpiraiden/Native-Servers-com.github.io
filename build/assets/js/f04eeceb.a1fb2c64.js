"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=s,g=p["".concat(o,".").concat(c)]||p[c]||d[c]||i;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:s,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),s=(n(7294),n(3905));const i={sidebar_position:1},a="Gameserver mit LinuxGSM",l={unversionedId:"vserverrootserver/turotials-linux/Gameserver-mit-LinuxGSM",id:"vserverrootserver/turotials-linux/Gameserver-mit-LinuxGSM",title:"Gameserver mit LinuxGSM",description:"Im folgenden erf\xe4hrst du, wie du mit wenig Aufwand einen Gameserver auf deinem vServer installieren kannst.",source:"@site/docs/vserverrootserver/turotials-linux/Gameserver-mit-LinuxGSM.md",sourceDirName:"vserverrootserver/turotials-linux",slug:"/vserverrootserver/turotials-linux/Gameserver-mit-LinuxGSM",permalink:"/docs/vserverrootserver/turotials-linux/Gameserver-mit-LinuxGSM",draft:!1,editUrl:"https://github.com/Native-Servers-com/Native-Servers-com.github.io/tree/main/docs/vserverrootserver/turotials-linux/Gameserver-mit-LinuxGSM.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"vserverrootserversidebar",previous:{title:"Tutorials - Linux",permalink:"/docs/category/tutorials---linux"},next:{title:"ProFTPD auf einem Linux-Server",permalink:"/docs/vserverrootserver/turotials-linux/FTP-Server-installieren"}},o={},u=[],m={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"gameserver-mit-linuxgsm"},"Gameserver mit LinuxGSM"),(0,s.kt)("p",null,"Im folgenden erf\xe4hrst du, wie du mit wenig Aufwand einen Gameserver auf deinem vServer installieren kannst."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Auf deinem vServer ist bereits ",(0,s.kt)("strong",{parentName:"p"},"LinuxGSM")," vorinstalliert, welches f\xfcr die Verwaltung und Erstellung von Gameservern genutzt wird. Alle Informationen zu ",(0,s.kt)("strong",{parentName:"p"},"LinuxGSM")," findest du hier:\xa0",(0,s.kt)("a",{parentName:"p",href:"https://docs.linuxgsm.com"},"https://docs.linuxgsm.com"),"/"),(0,s.kt)("p",{parentName:"blockquote"},"Eine Liste mit allen derzeit unterst\xfctzten Gameservern ist hier zu finden:\xa0",(0,s.kt)("a",{parentName:"p",href:"https://linuxgsm.com/servers"},"https://linuxgsm.com/servers"),"/")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Hardware Anforderungen:")," ",(0,s.kt)("em",{parentName:"p"},"Wir empfehlen f\xfcr den Betrieb eines Gameservers mindestens ",(0,s.kt)("strong",{parentName:"em"},"4 CPU Kerne"),", so wie ",(0,s.kt)("strong",{parentName:"em"},"mindestens 4GB RAM")," und ",(0,s.kt)("strong",{parentName:"em"},"64GB SSD Speicher"),". Bitte beachte, dass abh\xe4ngig davon welcher Gameserver im Anschluss installiert werden soll, auch mehr Arbeitsspeicher so wie SSD Speicher erforderlich sein kann. Wenn du dir unsicher bist, kannst du beides jederzeit Upgraden sollte dein Server aktuell \xfcber zu wenig SSD Speicher oder RAM verf\xfcgen."),"\xa0")),(0,s.kt)("p",null,"Du kannst deinen vServer und das darauf befindliche LinuxGSM jederzeit neu installieren, beispielsweise wenn du den Server komplett neu erstellen m\xf6chtest oder dein Passwort vergessen hast:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://native-servers.com/customer/images/kb/31_chrome_uAnusSH2rP.png",alt:null})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://native-servers.com/customer/images/kb/32_chrome_AlxlsDZ7du.png",alt:null})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Nutze ein sicheres Passwort:")," ",(0,s.kt)("em",{parentName:"p"},"Zur Neuinstallation des Servers musst du ein Passwort f\xfcr deinen Server eintragen. Nutze hierbei Gro\xdf- so wie Kleinbuchstaben, so wie Zahlen und mindestens ein Sonderzeichen. Beachte bitte auch, dass du dieses Passwort in den folgenden Schritten manuell in die VNC Konsole eintippen musst, es sollte also auch nicht zu lang oder kompliziert sein. Du kannst das Passwort auch sp\xe4ter noch \xe4ndern."))),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://native-servers.com/customer/images/kb/14_chrome_A5FO6MkLpa.png",alt:null})),(0,s.kt)("p",null,"Nach Abschluss der Installation, musst du dich zuerst \xfcber die VNC Konsole einloggen, da der root Login via SSH vorerst deaktiviert ist. Wie du diesen sp\xe4ter aktivieren kannst, erf\xe4hrst du hier: ",(0,s.kt)("a",{parentName:"p",href:"https://native-servers.com/customer/knowledgebase/5/Login-fur-root-Benutzer-aktivieren-Linux.html"},"Login f\xfcr root Benutzer aktivieren")),(0,s.kt)("p",null,"Richte jedoch zuerst den Server wie im folgenden beschrieben vollst\xe4ndig ein, bevor du den root Login aktivierst:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://native-servers.com/customer/images/kb/33_chrome_pGW2PnpKpm.png",alt:null})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://native-servers.com/customer/images/kb/16_chrome_vu2bHJ5t0L.png",alt:null})),(0,s.kt)("p",null,"Trage dort den Login Namen root ein, und das Passwort welches du bei der Installation des Servers gesetzt hast. Sofern du Turnkey Gameserver bereits im Bestellvorgang gew\xe4hlt hast, wurde dir dein Passwort via E-Mail zugesandt.\xa0"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Beachte:")," ",(0,s.kt)("em",{parentName:"p"},"Alle Eingaben im Feld Password werden in Linux ausgeblendet, du kannst also nicht sehen was du dort schreibst und musst deshalb bei der Eingabe des Passwortes aufmerksam vorgehen."))),(0,s.kt)("p",null,"Nachdem du dich \xfcber die VNC Konsole eingeloggt hast, wirst du aufgefordert ein Passwort f\xfcr den ",(0,s.kt)("strong",{parentName:"p"},"gameuser Account")," des Servers festzulegen, im Anschluss best\xe4tigst du mit ",(0,s.kt)("strong",{parentName:"p"},"ENTER"),". Das Password musst im Anschluss noch einmal best\xe4tigt werden:\xa0"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://native-servers.com/customer/images/kb/17_chrome_jGTCvnEVIh.png",alt:null})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://native-servers.com/customer/images/kb/18_chrome_Cb7mLOpeYU.png",alt:null})),(0,s.kt)("p",null,"Der folgende Punkt Initialize ",(0,s.kt)("strong",{parentName:"p"},"Hub services kann")," \xfcbersprungen werden und ist nicht zwingend erforderlich. Mit einem Druck auf ",(0,s.kt)("strong",{parentName:"p"},"TAB")," wird die ",(0,s.kt)("strong",{parentName:"p"},"Skip")," option selektiert, welche du mit ",(0,s.kt)("strong",{parentName:"p"},"ENTER"),"\xa0best\xe4tigen kannst:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://native-servers.com/customer/images/kb/19_chrome_6JHbX2UqaR.png",alt:null})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"System Notifications and Critical Security Alerts:")," Hier kannst du deine E-Mail Adresse eintragen, wenn du per E-Mail dar\xfcber informiert werden m\xf6chtest wenn wichtige Sicherheits Updates f\xfcr deinen Server verf\xfcgbar sind. Im folgenden Beispiels \xfcberspringen wir diesen Schritt jedoch:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://native-servers.com/customer/images/kb/20_chrome_hmJudDF9RL.png",alt:null})),(0,s.kt)("p",null,"Im n\xe4chsten Schritt solltest du ",(0,s.kt)("strong",{parentName:"p"},"INSTALL")," w\xe4hlen, damit aktuell verf\xfcgbare Sicherheits Updates direkt installiert werden und dein System auf dem aktuellsten Stand ist:\xa0"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://native-servers.com/customer/images/kb/21_chrome_n1fEhCL2aW.png",alt:null})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Fast geschafft!")," Notiere dir nun die Daten f\xfcr die Verbindung zur Web Console (Web shell) und zum Webmin (Webinterface f\xfcr deinen vServer)."),(0,s.kt)("p",null,"Falls du vergessen hast die Adresse zu notieren, findest du diese hier:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Web shell:")," ",(0,s.kt)("a",{parentName:"p",href:"https://IP-DEINES-SERVERS:12320"},"https://IP-DEINES-SERVERS:12320")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Webmin:")," ",(0,s.kt)("a",{parentName:"p",href:"https://IP-DEINES-SERVERS:12321"},"https://IP-DEINES-SERVERS:12321")),(0,s.kt)("p",null,"Ersetze dort einfach ",(0,s.kt)("strong",{parentName:"p"},"IP-DEINES-SERVERS")," mit der IP Adresse deines vServers und \xf6ffne die Links in einem beliebigen Web Browser."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://native-servers.com/customer/images/kb/22_chrome_xbYJCIxZsc.png",alt:null})),(0,s.kt)("p",null,"Best\xe4tige nun mit ENTER und du gelangst zum ",(0,s.kt)("strong",{parentName:"p"},"Advanced Menu"),"."),(0,s.kt)("p",null,"Hier kannst du alle wichtigen Einstellungen vornehmen und auch deinen Gameserver installieren. Navigiere hierzu mit der ",(0,s.kt)("strong",{parentName:"p"},"Pfeiltaste nach unten")," zum Punkt ",(0,s.kt)("strong",{parentName:"p"},"Game server")," und dr\xfccke auf ",(0,s.kt)("strong",{parentName:"p"},"ENTER"),":"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://native-servers.com/customer/images/kb/23_chrome_ppAWTtfSTJ.png",alt:null})),(0,s.kt)("p",null,"Dort w\xe4hlst du ",(0,s.kt)("strong",{parentName:"p"},"Select game")," und erh\xe4lst dann einen Hinweis, dass einige Gameserver w\xe4hrend der Installation weitere Einstellungen erfordern. Es kann also sein dass du abh\xe4ngig vom Spiel w\xe4hrend der Installation einige Dinge wie einen Servernamen eingeben musst. Achte w\xe4hrend der Installation darauf. Nun best\xe4tigst du mit Enter und w\xe4hlst dann das Spiel f\xfcr den Gameserver, auch hier kannst du mit den Pfeiltasten nach oben und unten navigieren, die Installation eines Spiels startest du mit ",(0,s.kt)("strong",{parentName:"p"},"ENTER"),". Wir nehmen f\xfcr unser Beispiel ",(0,s.kt)("strong",{parentName:"p"},"7 Days to Die"),":"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://native-servers.com/customer/images/kb/26_chrome_7QZrfs23Rr.png",alt:null})),(0,s.kt)("p",null,"Nach der Best\xe4tigung mit ",(0,s.kt)("strong",{parentName:"p"},"ENTER")," startet die Installation, welche einige Minuten in Anspruch nehmen kann:\xa0  "),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://native-servers.com/customer/images/kb/27_chrome_tSYfmh2X64.png",alt:null})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://native-servers.com/customer/images/kb/28_chrome_PvbB2560e9.png",alt:null})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://native-servers.com/customer/images/kb/29_chrome_rdaRdpMX6I.png",alt:null})),(0,s.kt)("p",null,"Damit ist dein Gameserver installiert und einsatzbereit."),(0,s.kt)("p",null,"Bereits nach der Installation startet der Gameserver von alleine."),(0,s.kt)("p",null,"Der Pfad zum Gameserver lautet: ",(0,s.kt)("strong",{parentName:"p"},"/home/gameuser/gameserver/")),(0,s.kt)("p",null,"In unserem Beispiel mit 7 Days to Die befindet sich darin die Datei ",(0,s.kt)("strong",{parentName:"p"},"sdtdserver"),", mit welcher wir verschiedene Befehle ausf\xfchren k\xf6nnen."),(0,s.kt)("p",null,"So listest du die aktuellen Server Details auf (begib dich zuerst in den Pfad des Gameservers!): ",(0,s.kt)("strong",{parentName:"p"},"./sdtdserver details"),"\xa0"),(0,s.kt)("p",null,"Eine Liste mit Befehlen und weiteren Informationen findest du hier:\xa0",(0,s.kt)("a",{parentName:"p",href:"https://docs.linuxgsm.com/command"},"https://docs.linuxgsm.com/command"),"s"))}d.isMDXComponent=!0}}]);
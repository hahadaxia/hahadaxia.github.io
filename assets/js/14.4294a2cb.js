(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{365:function(t,s,e){"use strict";e.r(s);var a=e(1),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("BeEF安装、配置与使用\n")]),t._v(" "),e("ol",[e("li",[t._v("BeEF的安装部署")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   apt-get install libssl-dev libsqlite3-dev sqlite\n   sudo apt-get install g++\n   apt-get install git\n   apt-get update\n   sudo apt install ruby ruby-dev\n   sudo  apt install git\n   sudo mkdir hacker\n   cd hacker/\n   git clone https://github.com/beefproject/beef.git\n   cd beef\n   sudo ./install\n   vi config.yaml \n   sudo ./beef\n   # 安装参考链接: https://blog.csdn.net/qq_36334464/article/details/83690566\n")])])]),e("p",[t._v("开通防火墙,设置超时(默认是500),心跳报文(默认是1000)等\nhttp://ip:3000/ui/panel\nhttp://ip:3000/hook.js")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("安装部署tomcat9")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("sudo apt-get install tomcat"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\n#配置主目录\n/usr/share/tomcat"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("/bin\n#网页部署主目录\n/var/lib/tomcat"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("/webapps\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("BeEF部署要点")])]),t._v(" "),e("ul",[e("li",[t._v("1 在公司网络执行时候,一方面会被SEP等主防设备发现;另一方面会被IPS Reset重置(不清楚是pa还是啥原因)")])])])},[],!1,null,null,null);s.default=n.exports}}]);
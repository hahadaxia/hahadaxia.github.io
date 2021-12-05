(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{397:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("僵尸网络 Botnet 是指采用一种或多种传播手段，将大量主机感染bot程序，从而在控制者和被感染主机之间所形成的一个可一对多控制的网络。攻击者通过各种途径传播僵尸程序感染互联网上的大量主机，而被感染的主机将通过一个控制信道接收攻击者的指令，组成一个僵尸网络。之所以用僵尸网络这个名字，是为了更形象地让人们认识到这类危害的特点：众多的计算设备在不知不觉中被攻击者利用，成为被人利用的一种工具，沦为拒绝服务攻击、发送垃圾邮件、窃取秘密、挖矿的僵尸主机。\n因此，对僵尸网络的节点进行识别，有助于提供威胁情报，减缓和预防相关恶意事件的影响。")]),t._v(" "),a("h2",{attrs:{id:"第一节-概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一节-概要","aria-hidden":"true"}},[t._v("#")]),t._v(" 第一节 概要")]),t._v(" "),a("h3",{attrs:{id:"_1-1-僵尸网络通信方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-僵尸网络通信方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 僵尸网络通信方式")]),t._v(" "),a("p",[t._v("僵尸网络从通信组织方式大致分为C2中心式和P2P分布式两种。")]),t._v(" "),a("p",[t._v("C2(命令和控制)服务器，是一个中心计算机，负责对僵尸主机发送命令，及从僵尸主机接收信息。C2的基础架构通常包括多台服务器和其他技术组件。大多数僵尸网络采用“客户端-服务器端”的结构。还有一种常见的结构是僵尸网络采用了P2P结构，P2P僵尸网络使用了分布式的僵尸主机网络，主要是为了保护僵尸网络、防止网络中断。")]),t._v(" "),a("p",[t._v("###1.2 僵尸网络的识别方式")]),t._v(" "),a("p",[t._v("僵尸网络通信协议一般都属于私有协议，对这种私有协议的识别，首先需要做的事对协议的逆向，然后全网探活相关端口，最后模拟协议的通信方式。如果目的节点响应的内容符合协议的格式，则认为识别出开放该协议的节点。例如netbus为c2中心式，netbus常用的端口为tcp:12345，因此，需要全网探活12345端口，从而确定可疑的netbus节点。")]),t._v(" "),a("p",[t._v("但这种方式存在一些问题：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1） 端口扫描比较耗费时间")])]),t._v(" "),a("li",[a("p",[t._v("2）存在一部分netbus c2节点，没有使用12345默认端口，端口扫描难以对这部分节点进行识别。")])])]),t._v(" "),a("p",[t._v("对于P2P僵尸网络，如zeroaccess，该家族节点均具备发现其他节点的能力（zeroaccess通信协议中的getL命令，具有返回该节点记录的节点的功能），因此，从一个已知的zeroaccess节点出发，通过模拟zeroaccess的getL协议的节点发现过程，即可获取其相邻节点的地址，之后，对得到的节点，依次通过模拟节点发现过程递归遍历，最终即可遍历整个zeroaccess网络。该方法的优势在于，仅对zeroaccess网络中的节点进行遍历，一是快，二来发现的相对比较完整。")]),t._v(" "),a("h2",{attrs:{id:"第二节-通信过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二节-通信过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 第二节 通信过程")]),t._v(" "),a("p",[t._v("###2.1 netbus通信过程")]),t._v(" "),a("p",[t._v("对于netbus c2基于TCP连接，默认端口12345，对其探测过程就是获取端口的banner信息（常见版本有NetBus 1.60、NetBus 1.70）。如果返回结果为NetBus，即有较大概率判定为netbus木马。python代码实现如下：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AF_INET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SOCK_STREAM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("settimeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    receive "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" receive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startswith"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NetBus'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("port\n")])])]),a("p",[t._v("至于想得到存活tcp12345端口的ip，除了自己利用masscan或zmap扫描外，我们可以利用已经扫描好的数据如shodan、zoomeye、fofa、censys等，这里就不展开了。")]),t._v(" "),a("p",[t._v("上面关于C2的探测流程简单介绍完毕，netbus相对是比较简单的，大多数的C2节点探测，需要client先请求server特定内容，通过响应的信息与知识库比对来识别判定是否为C2。")]),t._v(" "),a("p",[t._v("###2.2 zeroaccess通信过程")]),t._v(" "),a("p",[t._v("若一个P2P僵尸节点，希望加入到僵尸网络，总体上流程分为两步：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1）获取到当前P2P网络中网络状况正常的节点列表（已经预先植入种子节点列表)")])]),t._v(" "),a("li",[a("p",[t._v("2）运行zeroaccess的协议栈，与P2P网络中的其他节点通信")])])]),t._v(" "),a("p",[t._v("第一个问题就是如何得到zeroaccess的种子节点。思路如下：")]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("确定你要获取的僵尸网络家族名称")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("找到该家族的样本或样本sha256值，如：\n"),a("a",{attrs:{href:"https://www.virustotal.com/gui/file/af3258ecd3c2a70bae8b7a7bb3ecfd22edcbc5a0ee252fb060afa79e76dbe563/behavior/VirusTotal%20Cuckoofork",target:"_blank",rel:"noopener noreferrer"}},[t._v("af3258ecd3c2a70bae8b7a7bb3ecfd22edcbc5a0ee252fb060afa79e76dbe563"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[t._v("自己沙箱执行抓包或上传在线沙箱执行得到网络行为（virustotal或threatbook)")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"4"}},[a("li",[t._v("找到可疑的(IP,Port)（zeroaccess p2p常见通信端口如下表）")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("网络")]),t._v(" "),a("th",[t._v("32位系统端口")]),t._v(" "),a("th",[t._v("64位系统端口")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("网络1")]),t._v(" "),a("td",[t._v("Udp 16471")]),t._v(" "),a("td",[t._v("Udp 16470")])]),t._v(" "),a("tr",[a("td",[t._v("网络2")]),t._v(" "),a("td",[t._v("Udp 16464")]),t._v(" "),a("td",[t._v("Udp 16465")])])])]),t._v(" "),a("p",[t._v("如\b下所示,从Virustotal沙箱中\b得到初始化的IP地址:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("95.105")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("117.206")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16471")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("206.254")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("253.254")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16471")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("69.251")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("73.140")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16471")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("89.46")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("141.133")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16471")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("188.27")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("180.95")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16471")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24.135")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("222.216")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16471")]),t._v("\n...\n")])])]),a("p",[t._v("以其中获取的可疑节点为例，对P2P僵尸网络节点之间的通信过程做相应的说明。\n在完成上述的步骤后，正常情况下，可以获取到16个僵尸节点的地址，之后即可通过zeroacess协议进行通信，zeroacees节点的通信流程如图所示。\n"),a("img",{attrs:{src:"attachments/contributeupload/2012101335cc3485f248172576.jpg",alt:""}}),t._v("\n交互逻辑如下所示:")]),t._v(" "),a("ul",[a("li",[t._v("1）僵尸主机A向B请求B所知悉的IP列表")]),t._v(" "),a("li",[t._v("2）僵尸主机B向A响应所知悉的IP列表")]),t._v(" "),a("li",[t._v("3）僵尸主机A更新自己的知悉列表")])]),t._v(" "),a("p",[t._v("##第三节 通信协议\nZeroaccess P2P网络中，连接均使用UDP的方式。将对zeroaccess的通信协议做简单的描述，在本节的基础上，对P2P节点的识别，需要实际上是对通信数据包的过滤和解析。\nzeroaccess的协议有过更新，目前掌握的版本信息如下，我们将以V2进行介绍，重点介绍getL和retL两个命令行的构造。\n"),a("img",{attrs:{src:"attachments/contributeupload/2012101337be5c83505ca72f60.jpg",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_3-1-getl构造"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-getl构造","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.1 getL构造")]),t._v(" "),a("p",[t._v("zeroaccess V2的getL报文格式如下所示：\n注意：所有字段的存储都为"),a("strong",[t._v("小端存储")]),t._v(" "),a("img",{attrs:{src:"attachments/contributeupload/2012101348388bfc41294f5bb5.jpg",alt:""}})]),t._v(" "),a("p",[t._v("CRC初始值为空，\nget报文中cmd的值为“getL”\nflag默认为0\nmagic字段为随机生成\n生成报文的过程如下：")]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("构造cmd，flag，magic字段的报文")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("计算得到crc32校验码")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[t._v("利用'ftp2'对整个报文xor操作")])])])]),t._v(" "),a("p",[t._v("代码如下：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构造cmd，flag，magic字段")]),t._v("\n    magic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xD9AEA1A8")]),t._v("\n    message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" struct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'I4cIL'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'L'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'t'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'e'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'g'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("magic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message1：%sr"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 计算crc32校验码")]),t._v("\n    crc_sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zlib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("crc32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" 0xffffffffL\n    message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" struct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'I4cIL'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("crc_sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'L'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'t'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'e'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'g'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("magic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message2：%r"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# xor操作")]),t._v("\n    key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("ord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("ord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("ord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'t'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("ord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'f'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    final_message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xorMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"final_message:%s"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("final_message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" final_message\n")])])]),a("h4",{attrs:{id:"_3-2-retl报文解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-retl报文解析","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.2 retL报文解析")]),t._v(" "),a("p",[t._v("Zeroaccess V2 retL作为getL的响应报文，对retL的解析就是逆操作。")]),t._v(" "),a("ul",[a("li",[t._v("1）以“ftp2”对报文进行xor操作")]),t._v(" "),a("li",[t._v("2）按下图结构对数据解析")])]),t._v(" "),a("p",[a("img",{attrs:{src:"attachments/contributeupload/2012101350723f3929b028c2ce.jpg",alt:""}})]),t._v(" "),a("p",[t._v("crc为校验码\ncmd为retL\nflag一般默认为0\nNum IPs为ip地址的数量，后面以固定格式存储ip地址")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getretLip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("decryptstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    ip_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    crc32 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" decryptstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'crc32:%r'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("crc32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n    retL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" decryptstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'retL:%r'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("retL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n    zero "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" decryptstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zero:%r'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zero"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n    ip_count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" decryptstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    ip_count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" struct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'I'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ip_count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ip_count:%d'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("ip_count\n    count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n    size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ip_count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" count\n        unit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("decryptstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n        ip_int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" struct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'II'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        ip "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" inet_ntoa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("struct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'I'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" htonl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ip_int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        ip "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" changeip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ip "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" ip_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            ip_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("':'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("udp_port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ip_list\n\n")])])]),a("p",[t._v("通过对getL和retL协议的构造后，我们可以把可疑的IP，port作为自己的种子地址，迭代获取其它zeroaccess感染的IP地址。")]),t._v(" "),a("h3",{attrs:{id:"第四节-小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第四节-小结","aria-hidden":"true"}},[t._v("#")]),t._v(" 第四节 小结")]),t._v(" "),a("p",[t._v("本文主要通过介绍了netbus、zeroaccess的探测思路，与主要的实现代码。后续的对识别的数据进行分析将在后面的公布，敬请期待。")]),t._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料:")]),t._v(" "),a("ul",[a("li",[t._v("https://en.wikipedia.org/wiki/ZeroAccess_botnet")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.symantec.com/content/dam/symantec/docs/security-center/white-papers/zeroaccess-indepth-13-en.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("ZeroAccess Indepth"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("img",{attrs:{src:"attachments/contributeupload/2012101355c9ca5c7146ebeb22.jpg",alt:""}})])])},[],!1,null,null,null);s.default=r.exports}}]);
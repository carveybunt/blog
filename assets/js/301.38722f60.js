(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{753:function(t,a,s){"use strict";s.r(a);var r=s(19),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("strong",[s("mjx-container",{staticClass:"MathJax",staticStyle:{direction:"ltr"},attrs:{jax:"SVG"}},[s("svg",{staticStyle:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.543ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"6.185ex",height:"2.579ex",role:"img",focusable:"false",viewBox:"0 -900 2733.6 1140"}},[s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mstyle",fill:"blue",stroke:"blue"}},[s("g",{attrs:{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD"}},[s("g",{attrs:{"data-mml-node":"mstyle",transform:"scale(1.2)"}},[s("g",{attrs:{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD"}},[s("g",{attrs:{"data-mml-node":"mtext"}},[s("text",{attrs:{"data-variant":"normal",transform:"scale(1,-1)","font-size":"884px","font-family":"serif"}},[t._v("进")]),s("text",{attrs:{"data-variant":"normal",transform:"translate(1000,0) scale(1,-1)","font-size":"884px","font-family":"serif"}},[t._v("程")]),s("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"3A",d:"M78 370Q78 394 95 412T138 430Q162 430 180 414T199 371Q199 346 182 328T139 310T96 327T78 370ZM78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",transform:"translate(2000,0)"}})])])])])])])])])])],1),t._v(" 是进程实体的运行过程，是系统进行"),s("code",[t._v("资源分配")]),t._v("和"),s("code",[t._v("调度")]),t._v("的"),s("u",[t._v("一个独立单位")]),t._v("。"),s("br"),t._v(" "),s("code",[t._v("调度")]),t._v("是指操作系统决定让那个进程上CPU运行。"),s("br"),t._v(" "),s("code",[t._v("进程实体(映像)")]),t._v("由"),s("code",[t._v("PCB")]),t._v("、"),s("code",[t._v("程序段")]),t._v("、"),s("code",[t._v("数据段")]),t._v("组成,是静态的。")]),t._v(" "),s("h2",{attrs:{id:"进程与程序的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程与程序的区别"}},[t._v("#")]),t._v(" 进程与程序的区别")]),t._v(" "),s("p",[s("code",[t._v("程序")]),t._v("是静态的，是存放在磁盘里的可执行文件，是一系列的指令集合。"),s("br"),t._v(" "),s("code",[t._v("进程")]),t._v("是动态的，是程序的一次执行过程。")]),t._v(" "),s("p",[t._v("一图看进程基础。")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("点击查看")]),t._v(" "),s("div",{staticClass:"center-container"},[s("p",[s("img",{attrs:{src:"/img/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E8%BF%9B%E7%A8%8B%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.svg",alt:"进程基础知识"}})])])]),t._v(" "),s("h2",{attrs:{id:"pcb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pcb"}},[t._v("#")]),t._v(" PCB")]),t._v(" "),s("p",[s("code",[t._v("PCB")]),t._v("(Preocess Control Block，进程控制块)是进程存在的唯一标志，当进程被创建时，操作系统为其创建PCB，当进程结束时，系统会回收其PCB。"),s("br"),t._v("\n操作系统对进程进行管理工作所需的信息都存在"),s("code",[t._v("PCB")]),t._v("中。")]),t._v(" "),s("h3",{attrs:{id:"pcb-存储的信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pcb-存储的信息"}},[t._v("#")]),t._v(" PCB 存储的信息")]),t._v(" "),s("ul",[s("li",[t._v("进程描述信息\n"),s("ul",[s("li",[s("h4",{attrs:{id:"pid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pid"}},[t._v("#")]),t._v(" PID")]),t._v(" "),s("code",[t._v("PID")]),t._v("(Process ID, 进程ID)，当进程被创建时，操作系统会为该进程分配一个"),s("code",[t._v("唯一的")]),t._v("、"),s("code",[t._v("不重复的")]),t._v(" Process ID。")]),t._v(" "),s("li",[s("h4",{attrs:{id:"uid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uid"}},[t._v("#")]),t._v(" UID")]),t._v("\n用户ID")])])]),t._v(" "),s("li",[t._v("进程控制和管理信息\n"),s("ul",[s("li",[t._v("CPU、磁盘、网络流量使用情况统计")]),t._v(" "),s("li",[t._v("当前"),s("a",{attrs:{href:"#%E8%BF%9B%E7%A8%8B%E6%8E%A7%E5%88%B6"}},[t._v("进程状态")]),t._v("：运行、就绪、阻塞、创建、终止。")])])]),t._v(" "),s("li",[t._v("资源分配信息\n"),s("ul",[s("li",[t._v("正在使用哪些文件")]),t._v(" "),s("li",[t._v("正在使用哪些内存区域")]),t._v(" "),s("li",[t._v("正在使用哪些I/O设备")])])]),t._v(" "),s("li",[t._v("处理机相关信息\n"),s("ul",[s("li",[t._v("PSW")]),t._v(" "),s("li",[t._v("PC等各种寄存器的值"),s("br"),t._v("\n用于实现进程切换")])])])]),t._v(" "),s("h2",{attrs:{id:"进程特征"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程特征"}},[t._v("#")]),t._v(" 进程特征")]),t._v(" "),s("ul",[s("li",[t._v("动态性")]),t._v(" "),s("li",[t._v("并发性")]),t._v(" "),s("li",[t._v("独立性")]),t._v(" "),s("li",[t._v("异步型")]),t._v(" "),s("li",[t._v("结构性")])]),t._v(" "),s("h2",{attrs:{id:"进程状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程状态"}},[t._v("#")]),t._v(" 进程状态")]),t._v(" "),s("p",[t._v("一图看进程控制。")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("点击查看")]),t._v(" "),s("div",{staticClass:"center-container"},[s("p",[s("img",{attrs:{src:"/img/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E8%BF%9B%E7%A8%8B%E6%8E%A7%E5%88%B6.svg",alt:"进程控制"}})])])]),t._v(" "),s("h3",{attrs:{id:"创建态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建态"}},[t._v("#")]),t._v(" 创建态")]),t._v(" "),s("p",[t._v("进程被创建时，操作系统会为进程分配资源、初始化PCB。")]),t._v(" "),s("h3",{attrs:{id:"就绪态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#就绪态"}},[t._v("#")]),t._v(" 就绪态")]),t._v(" "),s("ul",[s("li",[t._v("当进程创建完成后，边进入"),s("code",[t._v("就绪态")]),t._v("，具备运行太监，但由于没有空闲CPU，所以暂时不能运行。")]),t._v(" "),s("li",[t._v("处于"),s("code",[t._v("阻塞态")]),t._v("的进程的等待某个事件发生，该进程会从"),s("code",[t._v("阻塞态")]),t._v("变为"),s("code",[t._v("就绪态")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"运行态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行态"}},[t._v("#")]),t._v(" 运行态")]),t._v(" "),s("p",[t._v("进程在CPU上运行，CPU会执行该进程对应的程序(指令序列)。")]),t._v(" "),s("h3",{attrs:{id:"阻塞态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阻塞态"}},[t._v("#")]),t._v(" 阻塞态")]),t._v(" "),s("p",[t._v("进程在运行的过程中，可能会等待某个事件的发生(如：等待打印)，该进程无法继续往下执行。操作系统便让该系统下CPU，并让它进入"),s("code",[t._v("阻塞态")]),t._v("，若CPU空闲，会选择另一个"),s("code",[t._v("就绪态")]),t._v("的进程上CPU运行。")]),t._v(" "),s("h3",{attrs:{id:"终止态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#终止态"}},[t._v("#")]),t._v(" 终止态")]),t._v(" "),s("p",[t._v("进程在执行完毕后，执行"),s("code",[t._v("exit")]),t._v("系统调用，请求操作系统终止该进程，操作系统让该进程下CPU，并回收内存空间等资源，最后还要回收该进程的PCB。")]),t._v(" "),s("h2",{attrs:{id:"进程控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程控制"}},[t._v("#")]),t._v(" 进程控制")]),t._v(" "),s("p",[t._v("即进程状态转换，使用"),s("RouterLink",{attrs:{to:"/计算机操作系统/01.概述/01.简介.html#原语"}},[t._v("原语")]),t._v("实现。")],1),t._v(" "),s("h3",{attrs:{id:"就绪态-运行态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#就绪态-运行态"}},[t._v("#")]),t._v(" 就绪态 -> 运行态")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("进程被调度\n")])])]),s("h3",{attrs:{id:"运行态-就绪态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行态-就绪态"}},[t._v("#")]),t._v(" 运行态 -> 就绪态")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("时间片到，或处理机被抢占\n")])])]),s("h3",{attrs:{id:"运行态-阻塞态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行态-阻塞态"}},[t._v("#")]),t._v(" 运行态 -> 阻塞态")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("进程自身的主动行为。\n进程用系统调用的方式请求某种系统资源，或请求等待某个事件发生。\n")])])]),s("h3",{attrs:{id:"阻塞态-就绪态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阻塞态-就绪态"}},[t._v("#")]),t._v(" 阻塞态 -> 就绪态")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("不是进程自身能控制的被动行为。\n申请的资源被分配，或等待的事件发生。\n")])])]),s("h3",{attrs:{id:"运行态-终止态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行态-终止态"}},[t._v("#")]),t._v(" 运行态 -终止态")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("进程运行结束，或运行过程遇到不可修复的错误。\n")])])]),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),s("p",[t._v("不能直接从就绪转到阻塞。")])]),t._v(" "),s("h3",{attrs:{id:"进程的创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程的创建"}},[t._v("#")]),t._v(" 进程的创建")]),t._v(" "),s("h3",{attrs:{id:"进程的终止"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程的终止"}},[t._v("#")]),t._v(" 进程的终止")]),t._v(" "),s("h3",{attrs:{id:"进程的阻塞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程的阻塞"}},[t._v("#")]),t._v(" 进程的阻塞")]),t._v(" "),s("h3",{attrs:{id:"进程的唤醒"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程的唤醒"}},[t._v("#")]),t._v(" 进程的唤醒")]),t._v(" "),s("h3",{attrs:{id:"进程的切换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程的切换"}},[t._v("#")]),t._v(" 进程的切换")]),t._v(" "),s("h2",{attrs:{id:"进程的组织方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程的组织方式"}},[t._v("#")]),t._v(" 进程的组织方式")]),t._v(" "),s("h3",{attrs:{id:"链式方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链式方式"}},[t._v("#")]),t._v(" 链式方式")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("按照进程状态将PCB分为多个队列。\n操作系统持有指向各个队列的指针。\n")])])]),s("h3",{attrs:{id:"索引方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引方式"}},[t._v("#")]),t._v(" 索引方式")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("根据进程状态的不同，建立几张索引表。\n操作系统持有指向各个索引表的指针。")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);
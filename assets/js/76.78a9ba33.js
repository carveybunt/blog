(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{531:function(t,v,_){"use strict";_.r(v);var a=_(19),c=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("内存 1 个字节等于 8 位。 1byte = 8 bit")]),t._v(" "),_("p",[t._v("二进制转八进制，将二进制 3 位一段；二进制转十六进制，4 位一段；")]),t._v(" "),_("div",{staticClass:"custom-block danger"},[_("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),_("p",[t._v("内存块因操作系统线数不同而不同， "),_("code",[t._v("32位系统")]),t._v(" 4 字节 对齐，即 "),_("code",[t._v("8位")]),t._v(" 二进制； "),_("code",[t._v("64位系统")]),t._v(" 8 字节 对齐，即 "),_("code",[t._v("64位")]),t._v(" 二进制。")])]),t._v(" "),_("p",[t._v("市面上的 CPU 几乎都是小端存储，地位在前，高位在后。 "),_("code",[t._v("两位一字节")]),t._v(" 。")]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),_("p",[t._v("如内存地址为： "),_("code",[t._v("0x012FFD00")]),t._v(" ，则在内存中表示为： "),_("code",[t._v("00 FD F2 01")]),t._v(" 。")])]),t._v(" "),_("h2",{attrs:{id:"栈空间"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#栈空间"}},[t._v("#")]),t._v(" 栈空间")]),t._v(" "),_("p",[t._v("每个函数都有自己的函数栈空间。大小固定不变。定义的变量都是存到栈空间的。栈的效率比较高，有专门的寄存器存放栈的地址，压栈、出栈操作都有专门的指令执行。由系统自动管理。"),_("br"),t._v("\n一开始就能 "),_("code",[t._v("确定空间大小")]),t._v(" 的，使用栈空间存储。")]),t._v(" "),_("h2",{attrs:{id:"堆空间"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#堆空间"}},[t._v("#")]),t._v(" 堆空间")]),t._v(" "),_("p",[t._v("大小能变动，申请和释放需要自行管理。是 C/C++函数库提供的数据结构，机制复杂。 "),_("code",[t._v("不确定数据大小")]),t._v(" 时，使用堆空间存储。")]),t._v(" "),_("h3",{attrs:{id:"申请空间"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#申请空间"}},[t._v("#")]),t._v(" 申请空间")]),t._v(" "),_("div",{staticClass:"custom-block danger"},[_("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),_("p",[t._v("申请堆空间使用完毕后一定要记得释放！因为子函数结束后，堆空间内存依旧存在，除非主函数结束，才会释放所有相关的堆空间。")])]),t._v(" "),_("h4",{attrs:{id:"malloc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#malloc"}},[t._v("#")]),t._v(" malloc")]),t._v(" "),_("p",[t._v("在堆空间中分配一块 "),_("code",[t._v("指定大小的内存空间")]),t._v(" ，在这块内存空间的函数执行完成后不会被初始化。")]),t._v(" "),_("blockquote",[_("p",[t._v("(数据类型)malloc(数据长度); // 强制转换数据类型")])]),t._v(" "),_("h4",{attrs:{id:"calloc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#calloc"}},[t._v("#")]),t._v(" calloc")]),t._v(" "),_("p",[t._v("在内存中动态分配 "),_("code",[t._v("N个长度为M的连续空间")]),t._v(" ，并将 "),_("code",[t._v("每一个字节初始化为0")]),t._v(" 。内存大小为 "),_("code",[t._v("N*M个字节")]),t._v(" 。")]),t._v(" "),_("blockquote",[_("p",[t._v("(数据类型)calloc(N, M); // 强制转换数据类型")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("p",[t._v("malloc 可以和 calloc 转换。")])]),t._v(" "),_("h4",{attrs:{id:"realloc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#realloc"}},[t._v("#")]),t._v(" realloc")]),t._v(" "),_("p",[t._v("重新分配内存，使内存 "),_("code",[t._v("扩展到新的大小")]),t._v(" 。")]),t._v(" "),_("blockquote",[_("p",[t._v("(数据类型)realloc(指针名称, 新的大小); // 强制转换数据类型")])]),t._v(" "),_("h3",{attrs:{id:"释放空间"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#释放空间"}},[t._v("#")]),t._v(" 释放空间")]),t._v(" "),_("p",[t._v("进程结束时，系统自动释放程序的所有空间。")]),t._v(" "),_("blockquote",[_("p",[t._v("free(指针名称);")])])])}),[],!1,null,null,null);v.default=c.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{541:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"openssl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#openssl"}},[t._v("#")]),t._v(" Openssl")]),t._v(" "),s("p",[t._v("php 7 8")]),t._v(" "),s("h3",{attrs:{id:"加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加密"}},[t._v("#")]),t._v(" 加密")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.php.net/manual/zh/function.openssl-encrypt.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网说明 php8"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("openssl_encrypt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$cipher_algo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$passphrase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$options")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$iv")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tag")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$aad")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tag_length")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword return-type"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("false")]),t._v("\n")])])]),s("ul",[s("li",[t._v("data 要加密的明文信息。"),s("br"),t._v("\n如果加密的内容为数组，可以使用"),s("code",[t._v("json_encode()")]),t._v("将其转换为字符串，在进行加密")]),t._v(" "),s("li",[t._v("cipher_algo，密码学方式，即加密方式。")]),t._v(" "),s("li",[t._v("passphrase，若"),s("code",[t._v("passphrase")]),t._v("比预期的端，将默认使用"),s("code",[t._v("nul")]),t._v("填充，若比预期的长度更长，将静默截断。\n"),s("ul",[s("li",[t._v("128 192 256"),s("br"),t._v("\n分别对应16位、24位、32位密钥长度。[1位8字节]")]),t._v(" "),s("li",[t._v("5种加密模式\n"),s("ul",[s("li",[s("h4",{attrs:{id:"cbc-密码分组链接模式-cipher-block-chaining"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cbc-密码分组链接模式-cipher-block-chaining"}},[t._v("#")]),t._v(" CBC 密码分组链接模式 Cipher Block Chaining")]),t._v(" "),s("p",[t._v("又称"),s("code",[t._v("密码分组链接")]),s("br"),t._v("\n先将明文切分成若干小段，然后每一小段与初始块或者上一段的密文段进行异或运算后，再与密钥进行加密。")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"ecb-电码本模式-electronic-codebook-book"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ecb-电码本模式-electronic-codebook-book"}},[t._v("#")]),t._v(" ECB 电码本模式 Electronic Codebook Book")]),t._v(" "),s("p",[t._v("将整个明文分成若干段相同的小段，然后对每一小段进行加密。")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"ocf-计算器模式-counter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ocf-计算器模式-counter"}},[t._v("#")]),t._v(" OCF 计算器模式 Counter")]),t._v(" "),s("p",[t._v("计算器模式不常见，在CTR模式中， 有一个自增的算子，这个算子用密钥加密之后的输出和明文异或的结果得到密文，相当于一次一密。这种加密方式简单快速，安全可靠，而且可以并行加密，但是在计算器不能维持很长的情况下，密钥只能使用一次。")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"cfb-密码反馈模式-cipher-feedback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cfb-密码反馈模式-cipher-feedback"}},[t._v("#")]),t._v(" CFB 密码反馈模式 Cipher FeedBack")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"ofb-输出反馈模式-output-feedback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ofb-输出反馈模式-output-feedback"}},[t._v("#")]),t._v(" OFB 输出反馈模式 Output FeedBack")])])])])])]),t._v(" "),s("li",[t._v("options，是以下标记的按位或："),s("code",[t._v("OPENSSL_RAW_DATA")]),t._v("、"),s("code",[t._v("OPENSSL_ZERO_PADDING")]),s("br"),t._v("\nOPENSSL_RAW_DATA方式【会用PKCS#7进行补位】"),s("br"),t._v("\nOPENSSL_ZERO_PADDING方式『0填充』"),s("br"),t._v("\nOPENSSL_NO_PADDING【不填充，需要手动填充】")]),t._v(" "),s("li",[t._v("iv,非"),s("code",[t._v("NULL")]),t._v("的初始化向量"),s("br"),t._v("\n必须是16位字符。")]),t._v(" "),s("li",[t._v("tag，使用 AEAD 密码模式（"),s("code",[t._v("GCM")]),t._v(" 或 "),s("code",[t._v("CCM")]),t._v("）时传引用的验证标签。")]),t._v(" "),s("li",[t._v("aad，附加的验证数据。")]),t._v(" "),s("li",[t._v("tag_length，验证 "),s("code",[t._v("tag")]),t._v(" 的长度。"),s("code",[t._v("GCM")]),t._v(" 模式时，它的范围是 "),s("code",[t._v("4")]),t._v(" 到 "),s("code",[t._v("16")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
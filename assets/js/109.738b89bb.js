(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{567:function(t,s,a){"use strict";a.r(s);var e=a(14),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" install")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n")])])]),a("p",[t._v("国内无法安装这个的。使用")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh\n")])])]),a("p",[t._v("然后给 "),a("code",[t._v("install.sh")]),t._v(" 添加权限：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x install.sh\n")])])]),a("p",[t._v("然后执行 install.sh ：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./install.sh\n")])])]),a("p",[t._v("如果发现很慢，可以修改为 "),a("code",[t._v("gitee")]),t._v(" ：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" install.sh\n")])])]),a("p",[t._v("进入编辑状态："),a("br"),t._v("\n找到以下部分：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# Default settings\nZSH=${ZSH:-~/.oh-my-zsh}\nREPO=${REPO:-ohmyzsh/ohmyzsh}\nREMOTE=${REMOTE:-https://github.com/${REPO}.git}\nBRANCH=${BRANCH:-master}\n")])])]),a("p",[t._v("然后将中间两行改为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("REPO=${REPO:-mirrors/oh-my-zsh}\nREMOTE=${REMOTE:-https://gitee.com/${REPO}.git}\n")])])]),a("h2",{attrs:{id:"修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[t._v("#")]),t._v(" 修改配置")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" ~/.zshrc\n")])])]),a("h2",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),a("p",[t._v("先进插件目录")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/.oh-my-zsh/custom/plugins/\n")])])]),a("h3",{attrs:{id:"zsh-syntax-highlighting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zsh-syntax-highlighting"}},[t._v("#")]),t._v(" zsh-syntax-highlighting")]),t._v(" "),a("p",[t._v("高亮提示。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/zsh-users/zsh-syntax-highlighting.git "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${ZSH_CUSTOM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":-")]),t._v("~"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(".oh-my-zsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("custom}")]),t._v("/plugins/zsh-syntax-highlighting\n")])])]),a("h3",{attrs:{id:"zsh-autosuggestions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zsh-autosuggestions"}},[t._v("#")]),t._v(" zsh-autosuggestions")]),t._v(" "),a("p",[t._v("会给出建议的命令（灰色部分）按键盘 → 补全。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/zsh-users/zsh-autosuggestions "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${ZSH_CUSTOM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":-")]),t._v("~"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(".oh-my-zsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("custom}")]),t._v("/plugins/zsh-autosuggestions\n")])])]),a("h2",{attrs:{id:"字体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字体"}},[t._v("#")]),t._v(" 字体")]),t._v(" "),a("p",[t._v("某些主题需要 "),a("code",[t._v("Powerline fonts")]),t._v(" 字体依赖")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# clone")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/powerline/fonts.git --depth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" fonts\n./install.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# clean-up a bit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n./uninstall.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf fonts\n")])])]),a("h2",{attrs:{id:"alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alias"}},[t._v("#")]),t._v(" alias")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://kapeli.com/cheat_sheets/Oh-My-Zsh_Git.docset/Contents/Resources/Documents/index",target:"_blank",rel:"noopener noreferrer"}},[t._v("git"),a("OutboundLink")],1),a("br"),t._v("\n常用 "),a("code",[t._v("alias")]),t._v(" :")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("alias")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("command")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("effect")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("g")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("grv")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git remote -v")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("gra")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git remote add")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("gst")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git status")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("查看状态")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("gl")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git pull")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("拉取")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("gp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git push")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("推送")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("gpf!")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git push --force")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("强制推送")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("gm")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git merge")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("先切换master分支，然后把xxx分支导入到master分支。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("gcmsg")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git commit -m")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ga")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git add")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("gaa")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git add --all")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("gb")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git branch")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("不加后续名称时查看分支情况；后续名称时，创建分支")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("gco")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git checkout")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("切换分支")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git checkout -b")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("创建分支并进行切换")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("gbd")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git branch -d")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("删除分支")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("glg")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git log --stat")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("查看提交日志")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git revert")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("取消 commit ,传入 HEAD，log中还能看到信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git reset")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("删除commit ,传入 HEAD，log中不能看到信息")])])])]),t._v(" "),a("h2",{attrs:{id:"主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题"}},[t._v("#")]),t._v(" 主题")]),t._v(" "),a("p",[a("code",[t._v("Oh My Zsh")]),t._v(" 默认自带了一些默认主题，存放在 "),a("code",[t._v("~/.oh-my-zsh/themes")]),t._v(" 目录中。")]),t._v(" "),a("p",[t._v("我们可以命令 "),a("code",[t._v("cd ~/.oh-my-zsh/themes && ls")]),t._v(" 查看这些主题。")]),t._v(" "),a("p",[t._v("推荐使用 "),a("code",[t._v("powerlevel10k")]),t._v(" 主题。")]),t._v(" "),a("p",[a("code",[t._v("powerlevel10k")]),t._v(" 安装：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --depth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" https://gitee.com/romkatv/powerlevel10k.git "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${ZSH_CUSTOM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":-")]),t._v("$HOME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(".oh-my-zsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("custom}")]),t._v("/themes/powerlevel10k\n")])])]),a("p",[t._v("配置powerlevel10k")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("p10k configure\n")])])]),a("p",[t._v("必须下载对应的"),a("a",{attrs:{href:"https://www.nerdfonts.com/font-downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("字体"),a("OutboundLink")],1),t._v("，使用 "),a("code",[t._v("brew")]),t._v(" 安装！！！")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew tap homebrew/cask-fonts\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask font-hack-nerd-font\n")])])]),a("p",[t._v("同时需要设置 "),a("code",[t._v("terminal")]),t._v(" -> 文本 -> 字体,为 "),a("code",[t._v("Hack Nerd Font")])]),t._v(" "),a("h2",{attrs:{id:"卸载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[t._v("#")]),t._v(" 卸载")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" .oh-my-zsh/tools \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x uninstall.sh \n./uninstall.sh \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rif .zshrc\n")])])]),a("h2",{attrs:{id:"显示系统配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示系统配置"}},[t._v("#")]),t._v(" 显示系统配置")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/obihann/archey-osx",target:"_blank",rel:"noopener noreferrer"}},[t._v("archey"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/xiaobaisky/archey",target:"_blank",rel:"noopener noreferrer"}},[t._v("黑果小兵 archey"),a("OutboundLink")],1),t._v("，我用的是这个。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/athlonreg/archey-osx \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" archey-osx/ /usr/local/ \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /usr/local/archey-osx/bin/archey /usr/local/bin/archey "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#中文版 软连接")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /usr/local/archey-osx/bin/archey-en /usr/local/bin/archey-en "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#英文版 软连接")]),t._v("\n")])])]),a("h3",{attrs:{id:"设置打开终端自启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置打开终端自启动"}},[t._v("#")]),t._v(" 设置打开终端自启动")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" archey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.bashrc "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#中文版")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" archey-en "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.bashrc "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#英文版")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[[ -s ~/.bashrc ]] && source ~/.bashrc"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.bash_profile \n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ~/.bashrc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ~/.bash_profile \n")])])]),a("h3",{attrs:{id:"oh-my-zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-zsh"}},[t._v("#")]),t._v(" oh-my-zsh")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" archey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.zshrc "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#中文版")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" archey-en "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.zshrc "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#英文版")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ~/.zshrc \n")])])]),a("h3",{attrs:{id:"update-更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-更新"}},[t._v("#")]),t._v(" Update/更新")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/archey-osx/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull \n")])])]),a("h2",{attrs:{id:"报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错"}},[t._v("#")]),t._v(" 报错")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[oh-my-zsh] Insecure completion-dependent directories detected:\ndrwxrwxr-x  3 carveybunt  admin   96  8 15 00:18 /usr/local/share/zsh\ndrwxrwxr-x  4 carveybunt  admin  128  8 15 00:31 /usr/local/share/zsh/site-functions\n\n[oh-my-zsh] For safety, we will not load completions from these directories until\n[oh-my-zsh] you fix their permissions and ownership and restart zsh.\n[oh-my-zsh] See the above list for directories with group or other writability.\n\n[oh-my-zsh] To fix your permissions you can do so by disabling\n[oh-my-zsh] the write permission of "group" and "others" and making sure that the\n[oh-my-zsh] owner of these directories is either root or your current user.\n[oh-my-zsh] The following command may help:\n[oh-my-zsh]     compaudit | xargs chmod g-w,o-w\n\n[oh-my-zsh] If the above didn\'t help or you want to skip the verification of\n[oh-my-zsh] insecure directories you can set the variable ZSH_DISABLE_COMPFIX to\n[oh-my-zsh] "true" before oh-my-zsh is sourced in your zshrc file.\n')])])]),a("p",[t._v("修改 ~/.zshrc 添加：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ZSH_DISABLE_COMPFIX="true"\n')])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
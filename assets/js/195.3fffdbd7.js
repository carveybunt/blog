(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{651:function(e,_,s){"use strict";s.r(_);var a=s(14),r=Object(a.a)({},(function(){var e=this,_=e.$createElement,s=e._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"诚城的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#诚城的使用"}},[e._v("#")]),e._v(" 诚城的使用")]),e._v(" "),s("ul",[s("li",[e._v("添加站点\n"),s("ul",[s("li",[e._v("查看docker的IP地址"),s("br"),e._v("\ndocker-machine env")]),e._v(" "),s("li",[e._v("hosts设置（bridge 模式时，IP地址为127.0.0.1）："),s("br"),e._v("\n10.75.0.1  xx.xxx.xx")]),e._v(" "),s("li",[e._v("nginx 设置\n"),s("ul",[s("li",[e._v("sites设置\n"),s("ul",[s("li",[e._v("server_name laravel.test;")]),e._v(" "),s("li",[e._v("root /var/www/laravel/public;")])])])])]),e._v(" "),s("li",[e._v("重启nginx 容器")])])]),e._v(" "),s("li",[e._v("修改文件的权限 chmod 755")]),e._v(" "),s("li",[e._v("切换root用户 sudo -i")]),e._v(" "),s("li",[e._v("docker-machine command not found"),s("br"),e._v("\nhttps://github.com/docker/machine/releases")])]),e._v(" "),s("h2",{attrs:{id:"重建-build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重建-build"}},[e._v("#")]),e._v(" 重建 build")]),e._v(" "),s("p",[e._v("容器和镜像存在时，使用 "),s("code",[e._v("build")]),e._v(" 重建")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("docker-compose build mysql\n\ndocker-compose build --no-cache php-worker\n")])])]),s("h2",{attrs:{id:"基本设置-最新设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本设置-最新设置"}},[e._v("#")]),e._v(" 基本设置 （最新设置）")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("设置.env")]),e._v(" "),s("ul",[s("li",[e._v("APP_CODE_PATH_CONTAINER=/var/www")]),e._v(" "),s("li",[e._v("COMPOSE_PATH_SEPARATOR=:     # win10下改为;，其他改为:")]),e._v(" "),s("li",[e._v("PHP_VERSION=7.4")]),e._v(" "),s("li",[e._v("DOCKER_HOST_IP=10.0.75.1")]),e._v(" "),s("li",[e._v("CHANGE_SOURCE=ture//切换中国资源")]),e._v(" "),s("li",[e._v("WORKSPACE相关设置\n"),s("ul",[s("li",[e._v("WORKSPACE_COMPOSER_GLOBAL_INSTALL=true    # workspace全局安装composer")]),e._v(" "),s("li",[e._v("WORKSPACE_COMPOSER_REPO_PACKAGIST=https://mirrors.aliyun.com/composer/   # composer阿里云镜像")]),e._v(" "),s("li",[e._v("WORKSPACE_INSTALL_NODE=true")]),e._v(" "),s("li",[e._v("WORKSPACE_NODE_VERSION=node")]),e._v(" "),s("li",[e._v("WORKSPACE_NPM_REGISTRY=https://registry.npm.taobao.org    # npm淘宝镜像")]),e._v(" "),s("li",[e._v("LARAVEL_HORIZON_INSTALL_PHPREDIS=true")]),e._v(" "),s("li",[e._v("PHP_WORKER_INSTALL_REDIS=true  #  可以设置为false")]),e._v(" "),s("li",[e._v("WORKSPACE_INSTALL_LARAVEL_INSTALLER=true    # workspace  laravel安装器")]),e._v(" "),s("li",[e._v("WORKSPACE_INSTALL_LIBPNG=ture")]),e._v(" "),s("li",[e._v('WORKSPACE_TIMEZONE="Asia/Shanghai"   # 设置workspace时区,默认是UTC')]),e._v(" "),s("li",[e._v("PHP_FPM_INSTALL_OPCACHE=true #  生产环境要开启")]),e._v(" "),s("li",[e._v("WORKSPACE_INSTALL_SUPERVISOR=true #  开启laravel队列需要用到 Supervisor, Linux 操作系统的进程监视器。  查看本文档的 Supervisor 配置")]),e._v(" "),s("li",[e._v("WORKSPACE_INSTALL_SWOOLE=true && PHP_FPM_INSTALL_SWOOLE=true #  启动Swoole 加速 laravel")]),e._v(" "),s("li",[e._v("PHP_WORKER_INSTALL_SWOOLE=true")]),e._v(" "),s("li",[e._v("INSTALL_MONGO=true # 邮件驱动")])])]),e._v(" "),s("li",[e._v("MYSQL相关设置   285行\n"),s("ul",[s("li",[s("p",[e._v("MYSQL_VERSION=8.0.17")])]),e._v(" "),s("li",[s("p",[e._v("MYSQL_USER=XXXX")])]),e._v(" "),s("li",[s("p",[e._v("MYSQL_PASSWORD=XXXX.")])]),e._v(" "),s("li",[s("p",[e._v("MYSQL_ROOT_PASSWORD=XXXX.")])]),e._v(" "),s("li",[s("p",[e._v("修改mysql 时区"),s("br"),e._v("\nlaradock\\mysql\\Dockerfile")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('      ARG TZ="Asia/Shanghai"\n')])])])])])])])]),e._v(" "),s("li",[s("p",[e._v("修改laravel 文件权限,否则会出现页面的错误")]),e._v(" "),s("blockquote",[s("p",[e._v("sudo chmod -R 777 storage bootstrap/cache")])])])]),e._v(" "),s("h2",{attrs:{id:"supervisor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supervisor"}},[e._v("#")]),e._v(" Supervisor")]),e._v(" "),s("p",[e._v("在 mydock/php-worker 中配置 supervisor。")]),e._v(" "),s("p",[e._v("在supervisord.d中有示例文件，根据示例文件创建自己的配置文件，如 web-worker.conf 。")]),e._v(" "),s("h2",{attrs:{id:"mac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mac"}},[e._v("#")]),e._v(" mac")]),e._v(" "),s("ul",[s("li",[e._v("错误处理\n"),s("ul",[s("li",[s("p",[e._v("Laravel 框架能够正常地使用 PHP artisan migrate 进行迁移，但是利用 Eloquent 模型访问数据库时提示 connection refused")]),e._v(" "),s("p",[e._v("解决办法，修改mac hosts 增加 127.0.0.1 mysql")])])])])]),e._v(" "),s("h2",{attrs:{id:"报错处理-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#报错处理-error"}},[e._v("#")]),e._v(" 报错处理 Error")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("外网连接 错误！")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("  curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused\n      /bin/sh: 1: .: Can't open /home/laradock/.nvm/nvm.sh\n")])])]),s("p",[e._v("在hosts文件中添加 "),s("code",[e._v("151.101.76.133 raw.githubusercontent.com")]),e._v(",如果还是不行，就改代码：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("  curl -o- https://monitor-majors.oss-cn-shenzhen.aliyuncs.com/install.sh|bash \\\n  #curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh|bash \\\n")])])])]),e._v(" "),s("li",[s("p",[e._v("一般的安装错误，大部分是网络原因，报错后重新执行docker-compose up --build -d xx")])]),e._v(" "),s("li",[s("p",[e._v("MySql")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Different lower_case_table_names settings for server ('2') and data dictionary ('0')  [建议用方法二]")]),e._v(" "),s("ul",[s("li",[e._v("方法一：这个是出现在升级docker 2.4版本时，解决办法：打开docker 设置，您可以禁用gRPC Fuse进行文件共享。（gRPC Fuse设置导致此问题，它与数据字典0不兼容）。")])]),e._v(" "),s("p",[e._v("该lower_case_table_names设置告诉mysql如何存储和比较表名。如果存储数据库的文件系统本身不区分大小写，它将迫使您使用lower_case_table_names=2。")]),e._v(" "),s("p",[e._v("MacOS文件系统不区分大小写。直到Docker Desktop 2.4为止，mysql容器显然都不知道底层文件系统不区分大小写和设置lower_case_table_names=0。但是，由于升级到Docker 2.4，因此Docker在装载卷方面显然更聪明。因此，容器实现了在不区分大小写的文件系统上运行并强制运行lower_case_table_names=2。问题是lower_case_table_names初始化数据库后您无法更改的值。并且由于数据字典是使用初始化的lower_case_table_names=0，因此如果服务器设置为，它将无法初始化lower_case_table_names=2。")]),e._v(" "),s("ul",[s("li",[e._v('方法二： 删除 "C:\\Users\\XXXXX.laradock\\data\\mysql"文件，删除前记得备份')])])])])]),e._v(" "),s("li",[s("p",[e._v("workspace"),s("br"),e._v("\n-error: /tmp/sources.sh: not found")]),e._v(" "),s("p",[e._v("解决办法:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("   1.vim sources.sh\n   2.:set ff 如果是 dos\n   3.:set ff=unix\n   4.:wq\n   5.重新执行 docker-compose up --build -d xx        \n")])])])])]),e._v(" "),s("h2",{attrs:{id:"共享-挂载-问题-win10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#共享-挂载-问题-win10"}},[e._v("#")]),e._v(" 共享（挂载）问题（win10）")]),e._v(" "),s("ul",[s("li",[e._v("servieces.msc\n"),s("ul",[s("li",[e._v("开启server服务")])])]),e._v(" "),s("li",[e._v("gpedit.msc\n"),s("ul",[s("li",[e._v("gpedit.msc 中的计算机配置→Windows设置→安全设置→本地策略→安全选项→网络访问：本地账户的共享和安全模型为“经典模式”；")])])]),e._v(" "),s("li",[e._v("docker-desktop→setting→Shared Device勾选对应的盘符。")])]),e._v(" "),s("h2",{attrs:{id:"nginx-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置"}},[e._v("#")]),e._v(" nginx 配置")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("nginx, 文件nginx\\sites下生产新的.conf文件，可参考bbs.vipnol.com.conf")])]),e._v(" "),s("li",[s("p",[e._v("修改 server_name root相关内容。")])]),e._v(" "),s("li",[s("p",[e._v("增加站点，在目录laradock\\nginx\\sites下增加对应的XXX.com.conf配置文件即可")])]),e._v(" "),s("li",[s("p",[e._v("另外需要修改主机的host文件（线上环境可不设置）")])]),e._v(" "),s("li",[s("p",[e._v("XXX.com.conf内容如下："),s("br"),e._v("\nserver {")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("      listen 80;\n      listen [::]:80;\n  \n      # For https\n      # listen 443 ssl;\n      # listen [::]:443 ssl ipv6only=on;\n      # ssl_certificate /etc/nginx/ssl/default.crt;\n      # ssl_certificate_key /etc/nginx/ssl/default.key;\n  \n      server_name bbs.vipnol.com;\n      root /var/www/bbs/public;\n      index index.php index.html index.htm;\n  \n      location / {\n           try_files $uri $uri/ /index.php$is_args$args;\n      }\n  \n      location ~ \\.php$ {\n          try_files $uri /index.php =404;\n          fastcgi_pass php-upstream;\n          fastcgi_index index.php;\n          fastcgi_buffers 16 16k;\n          fastcgi_buffer_size 32k;\n          fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n          #fixes timeouts\n          fastcgi_read_timeout 600;\n          include fastcgi_params;\n      }\n  \n      location ~ /\\.ht {\n          deny all;\n      }\n  \n      location /.well-known/acme-challenge/ {\n          root /var/www/letsencrypt/;\n          log_not_found off;\n      }\n  \n      error_log /var/log/nginx/laravel_error.log;\n      access_log /var/log/nginx/laravel_access.log;\n  }\n")])])])]),e._v(" "),s("li",[s("p",[e._v("重启 nginx 容器")]),e._v(" "),s("p",[e._v("docker-compose restart nginx")])])]),e._v(" "),s("h2",{attrs:{id:"docker-的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-的使用"}},[e._v("#")]),e._v(" docker 的使用")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("查看日志")]),e._v(" "),s("blockquote",[s("p",[e._v("docker logs [options] container")])])])]),e._v(" "),s("h2",{attrs:{id:"centos-8-setting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos-8-setting"}},[e._v("#")]),e._v(" centos 8 setting")]),e._v(" "),s("p",[e._v("需要修改 "),s("code",[e._v("env")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("APP_DEBUG=false\n")])])]),s("p",[e._v("同时每个项目都必须 执行")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("chmod -R 777 storage bootstrap/cache\nphp artisan storage:link\ncomposer dump-autoload --optimize // compose 优化\nphp artisan optimize  // laravel 优化\n")])])]),s("h2",{attrs:{id:"服务器页面加载慢的原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器页面加载慢的原因"}},[e._v("#")]),e._v(" 服务器页面加载慢的原因")]),e._v(" "),s("ul",[s("li",[e._v("页面引入了外网的CDN 样式  或JS  或字体")])])])}),[],!1,null,null,null);_.default=r.exports}}]);
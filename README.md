# webdev

#删除远程文件（本地文件还保留）
git rm -r --cached 

git commit -m 'delete'

git push

#代码库中的文件完全覆盖本地
git reset --hard

git pull






# weekStar 项目

### host
```

```

### 环境要求
运行此项目， 你电脑上必须安装以下组件:
* node
* ruby
* gulp
* sass

### 初始化目录
```Bash
$ gem install sass
$ gem install compass
$ npm install
```



### gulp 命令

```Bash
# 压缩合并 js
gulp js --name <project>

# 压缩合并 css
gulp css --name <project>

# 压缩合并 jade,html
gulp html --name <project>

# 压缩合并 image
gulp images

# 压缩合并 执行 js、css、html、images
gulp all --ver <version>

# 执行监听
gulp watch

# 压缩合并 执行 all 并且 监听
gulp watchAll --ver <version>

# 拷贝 config.copy 下的文件
gulp copy --name <project>

# 提交代码 到 测试/ 预发布环境
gulp commit --sub <branch> --ver <version>


# 提交代码 到 测试/ 预发布环境(不会自动提交)
gulp commitNoCmd --sub <branch> --ver <version>
```

```
@param  <branch>:  dev|commit|trunk
@param <version>:  线上 rev-manifest 版本，如要线上最新则填 remote
```

## 潜龙 svn 地址:

### dev
```
https://svn.yy.com/yy-music/static/project/weekStar/branches/develop/
```

### commit
```
https://svn.yy.com/yy-music/static/project/weekStar/branches/commit/
```

### trunk
```
https://svn.yy.com/yy-music/static/project/weekStar/trunk/
```

### livereload 

* 安装 插件[这里](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

* 打开chrome 扩展程序 [chrome://extensions/] 对插件 勾选 允许访问文件网址

* 打开 html 文件时 点击 chrome 上面图标激活插件
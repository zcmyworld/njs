## njs, 一个 Node.js 模板引擎

## 为什么叫njs?

念快了听起来很像Nginx，这样感觉很cool

## 为什么写这个项目？

现在的模板引擎有很多讨厌的地方，其中一个是：很多模板引擎都需要修改后缀，如: .ejs, .jade, .tpl 等等。编辑器还需要安装额外的插件才能格式化代码，模板文件也用 .html 就好。
当然ejs模板引擎已经支持.html后缀了。接下来就是我想说的另一个讨厌的点，在html文件里写<%%>，<?php>真的丑。最后，其实就是想练手。


## 特性

集成 Expres 
集成 Koa2
引入模板片段
静态缓存


## 语法


### 获取变量
<njs value=""/>

### 执行JavaScript

    <n-script>
        for(let i = 0; i <= 3; i++>) {
            nhtml(`<p>第${i}次输出</p>`)
        }
    </n-script>

    <n-script>
        for(let i = 0; i <= 3; i++>) {
            if (i = 0) {
                nhtml(`<p>HelloWorld!</p>`)
                break;
            }
            nhtml(`<p>第${i}次输出</p>`)
        }
    </n-script>


### 引入模板
<n-include value="./dirname"/>
# js-jump

js最佳实践及常见问题解决方法

一、规范

[明确所要兼容的浏览器版本](https://github.com/moyangzhan/js-jump/issues/1)

[删除无用代码，而不是注释它](https://github.com/moyangzhan/js-jump/issues/2)

[为方法入参设置默认值](https://github.com/moyangzhan/js-jump/issues/3)

设置圈复杂度

限定文件最大代码行数

明确指出url请求所需参数及默认值

尽量使用===，避免使用==

避免多重嵌套

二、性能

节流

防抖

图片懒加载

长列表优化

同时增加大量DOM

同时修改大量DOM

事件花费时间尽可能少，最好少于17ms

避免双重求值

同域窗口间通讯优先BroadcastChannel，其次localStorage/postMessage

使用字面量来创建对象及数组

减少循环中的执行语句

if-else vs switch，谁更好？

需要中断的循环，使用forEach、for还是for-in？

三、安全

防xss

防csrf

iframe设置属性sandbox

使用postMessage跨域窗口间通讯时需要指定origin和source

四、异常处理

增加全局错误捕捉函数

try-catch/promise.catch时不能吃掉错误

捕捉promise中异步操作的错误，使用原始promise的reject而不是直接throw

promise中reject后面不应再有执行语句

五、常用算法

1.排序

2.去重

3.查找

列表查找

树的查找

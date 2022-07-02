# vue3 编程范式探索

## fp 不足
- fp 函数内需要额外的注入实现，来自于参数或者是useXXX。
- fp 中的 视图层 与 业务层 没有 接口 显式 的依赖约束和关联。

## 其它注意项
- oop + reactive 方式，service 类中 `constructor` this 并非 `reactive` 函数返回的 `Proxy` 独对象，所以构造函数中this属性的访问是不具有响应式的，需要显式的通过 `reactive(this)` 来实现响应式，reactive库内部已经通过Map实现了缓存，所以也不需要担心性能问题。

## 个人总结

- 组合函数 和 oop 在本质上可能是一致的，fp 通过闭包创建了一个作用域实现了局部的状态，对应oop中类。



# Vue3 编程范式探索

Vue3 中添加 组合式API 类似于 React Hooks ，它让我们用 fp 风格的方式来组织代码，通过拆分[组合式函数][composables]来实现视图层和业务层代码的分离。

这种 fp 未必是真正的fp，只是写起来、看起来像fp。

让开发者具有更好组织代码结构的能力，提升代码的可维护性(可复用、可拓展、可读)。

## fp 不足
- fp 函数内需要额外的注入实现，来自于参数或者是useXXX。
- fp 中的 视图层 与 业务层 没有 接口 显式 的依赖约束和关联。

## 其它注意项
- oop + reactive 方式，service 类 `constructor` 中使用的 this 并非 `reactive` 函数返回的 `Proxy` 对象，所以构造函数中this属性的访问是不具有响应式的，需要显式的通过 `reactive(this)` 来实现响应式，或者在外部调用，reactive库内部已经通过Map实现了缓存，所以也不需要担心性能问题。

## 个人总结

- 组合函数 和 oop 在本质上可能是一致的，fp 通过闭包创建了一个作用域实现了局部的状态，这对应oop中类。

## 参考

- [组合式函数](composables)




[composables]: https://staging-cn.vuejs.org/guide/reusability/composables.html


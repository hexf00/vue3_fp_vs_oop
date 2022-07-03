# Vue3 编程范式探索

Vue3 中添加 组合式API 类似于 React Hooks ，它让我们用 fp 风格的方式来组织代码，通过拆分[组合式函数][composables]来实现视图层和业务层代码的分离。

这种 fp 未必是真正的fp，只是写起来、看起来像fp。但相比 HOC 和 mixin 两种方案，fp让开发者具有更好组织代码结构的能力，可以更好的去提升代码的可维护性(可复用、可拓展、可读)。

## fp 特点
- [组合式函数][composables]内有3种注入实现：
  - ① 参数注入
  - ② 通过 `import` 或 `useXXX` 注入全局性的内容
  - ③ 通过`const token = ref()`注入组件、DOM，需要在 `onMounted` 或 `Watch` 中访问。

## fp 不足
- `Watch` 中对 ref 注入的判断可能会带来心智负担
- fp 中的 视图层 与 业务层 缺乏 显式的约束依赖和有效关联的手段，这会增加开发者的心智负担，oop中通过类实现接口 (`implements`) 可以轻松做到这点。

## oop 不足
- 在 template 中处理事件时，this的指向可能会丢失，需要使用箭头函数包裹，例 `@focus="() => service.focus()"`

## 其它注意项
- oop + reactive 方式，service 类 `constructor` 中使用的 this 并非 `reactive` 函数返回的 `Proxy` 对象，所以构造函数中this属性的访问是不具有响应式的，需要显式的通过 `reactive(this)` 来实现响应式，或者在外部调用，reactive库内部已经通过Map实现了缓存，所以也不需要担心性能问题。

## 个人总结

- 由于[组合式函数][composables]完全符合oop中对象的一些基本特质，所以这样的 fp 和 oop 在本质上可能是一致的。fp 通过闭包创建了一个作用域实现了局部的状态，这对应 oop 中类和对象，区别是 fp 中不需要写 `this`。
- 如有错漏欢迎批评、指正，如果对你理解有帮助欢迎star和讨论

## 参考

- [组合式函数](composables)




[composables]: https://staging-cn.vuejs.org/guide/reusability/composables.html


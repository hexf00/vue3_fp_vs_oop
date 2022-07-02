import { Service } from 'ioc-di'
import { reactive, ref } from 'vue'
import { IView } from './index.vue'

@Service()
export default class S2Service implements IView {

  id = Math.random().toString(36).substr(2)
  data = this.id

  constructor(){
    // 需要包裹，否则访问的不是proxy代理，则不会触发ui的响应式变化
    reactive(this).setData('123')
  }

  setData(msg: string) {
    console.warn('setData', this, this.data, msg)
    this.data = msg
  }
}
import { Concat, Root, Service } from "ioc-di";
import S2Service from "./components/s2_oop/service";
import { IView } from "./index.vue";

@Root()
@Service()
export default class S2Manager implements IView {
  s2Service1 = Concat(this, new S2Service())
  s2Service2 = Concat(this, new S2Service())


  constructor () {
    this.s2Service1.setData('1')
    this.s2Service2.setData('2')
  }
}

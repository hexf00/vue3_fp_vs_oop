<template>
  <div>
    <span>123</span>
    <S2 :service="s2Service1" />
    <S2 :service="s2Service2" />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from "vue";
import S2, * as NS2 from './components/s2_oop/index.vue';
import S2Manager from "./service";

export interface IView {
  s2Service1: NS2.IView
  s2Service2: NS2.IView
}

export default defineComponent({
  components: {
    S2
  },
  setup() {
    const s2 = reactive(new S2Manager());

    console.log(s2)
    return s2
  }
})

</script>

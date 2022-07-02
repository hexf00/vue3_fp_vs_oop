//Home.vue
<template>
  <div>
    <span>123</span>
    <S2 :service="s2Service1" />
    <S2 :service="s2Service2" />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import S2 from './components/s2/index.vue';
import { useS2 } from './components/s2/service';

export default defineComponent({
  components: {
    S2
  },
  setup() {

    provide('prefix', '123')

    const s2Service1 = useS2('123');
    s2Service1.setData('root')

    const s2Service2 = useS2('123');
    s2Service2.setData('root2')

    return {
      s2Service1,
      s2Service2
    }
  }
})

</script>

<template>
  <div>
    {{ service.data }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, Ref } from "vue";

export interface IView {
  data: Ref<string>
  setData(msg: string): void
}

export default defineComponent({
  props: {
    service: {
      type: Object as PropType<IView>,
      required: true
    }
  },
  setup({ service }) {
    console.log('view props', service.data)

    onMounted(() => {
      setTimeout(() => {
        service.setData('view')
      }, 1000)
    })

    return { service }
  }
})
</script>
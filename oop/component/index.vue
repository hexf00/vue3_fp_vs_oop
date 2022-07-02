<template>
  <div>
    {{ service.data }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export interface IView {
  data: string
  setData(msg: string): void
}

export default defineComponent({
  props: {
    service: {
      type: Object as PropType<IView>,
      required: true
    }
  }
})
</script>
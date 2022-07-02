import { ref, onMounted, provide, inject } from 'vue'

export function useS2(prefix: string) {

  const data = ref<string>('')

  function setData(msg: string) {
    data.value = prefix + msg
  }

  onMounted(() => {
    setTimeout(() => {
      setData('inner')
    }, 2000)
  })

  return { data, setData }
}
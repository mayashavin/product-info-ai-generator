import { ref } from 'vue'

export const useCopyToClipboard = () => {
  const isCopied = ref(false)

  const copyToJSON = (data: any) => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2))
    isCopied.value = true

    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  }

  return {
    isCopied,
    copyToJSON
  }
}

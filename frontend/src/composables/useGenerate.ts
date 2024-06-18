import { ref } from 'vue'
import { useConfigurations } from './useConfigurations'

export const useGenerate = () => {
  const isLoading = ref(false)
  const isError = ref(false)
  const result = ref(null)
  const { configurations } = useConfigurations()

  const generate = async (callback: Function) => {
    isLoading.value = true
    isError.value = false
    result.value = null

    if (!configurations.file) return

    const payload = new FormData()
    payload.append('file', configurations.file, configurations.file.name)
    payload.append('prompt', configurations.prompt)
    payload.append('language', configurations.language)
    payload.append('tone', configurations.tone)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'image/png'
        // },
        body: payload
      }).then((res) => res.json())

      result.value = response.result
    } catch (e) {
      isError.value = true
    } finally {
      isLoading.value = false
      callback({
        isLoading: isLoading.value,
        isError: isError.value,
        data: result.value
      })
    }
  }

  return {
    isLoading,
    isError,
    result,
    generate
  }
}

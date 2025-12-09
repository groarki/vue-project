import { ref } from 'vue'

export const useMutation = ({ mutationFn, onSuccess, onError }) => {
  const isLoading = ref(false)
  const error = ref(null)
  const data = ref()

  const mutation = async (...args) => {
    isLoading.value = true

    try {
      data.value = await mutationFn(...args)
      error.value = null
      onSuccess?.(data)
    } catch (e) {
      error.value = e
      onError?.(data)
    } finally {
      isLoading.value = false
    }
  }

  return {
    data,
    isLoading,
    error,
    mutation,
  }
}

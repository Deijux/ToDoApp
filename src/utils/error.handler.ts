import axios from 'axios'

export function handleAxiosError(
  error: unknown,
  defaultMessage: string,
): string {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.message || defaultMessage
    throw new Error(message)
  } else {
    throw new Error(`Error inesperado: ${defaultMessage}`)
  }
}

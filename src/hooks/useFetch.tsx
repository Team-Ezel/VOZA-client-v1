import API from '@/apis'
import { isAxiosError, Method } from 'axios'
import { useCallback, useState } from 'react'

interface FetchProps<T> {
    url: string
    method: Method
    onSuccess?: (data: T) => void | Promise<void>
    onFailure?: (e: unknown) => void | Promise<void>
    successMessage?: string
    errorMessage?: string
}

function useFetch<T>({
    url,
    method,
    successMessage,
    errorMessage,
    onSuccess,
    onFailure,
}: FetchProps<T>) {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetch = useCallback(
        async (body?: any) => {
            setIsLoading(true)

            try {
                const { data } = await API({
                    url,
                    method,
                    data: body,
                })
                setData(data)

                if (successMessage) console.log(successMessage)
                if (onSuccess) await onSuccess(data)
            } catch (e) {
                if (!isAxiosError(e)) {
                    console.error('알 수 없는 에러가 발생했습니다')
                } else if (e.response && e.response.status >= 500) {
                    console.error('알 수 없는 에러가 발생했습니다')
                } else if (
                    errorMessage &&
                    e.response &&
                    errorMessage[e.response.status]
                ) {
                    console.error(errorMessage[e.response.status])
                }

                if (onFailure) await onFailure(e)
            } finally {
                setIsLoading(false)
            }
        },
        [url, method, successMessage, errorMessage, onSuccess, onFailure]
    )

    return { isLoading, fetch, data }
}

export default useFetch
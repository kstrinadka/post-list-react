/**
 * Хук предоставляет обработку и индикацию загрузки данных
 * и обработку ошибки запроса на получение данных
 * @param callback - запрос, до конца которого нужно будет показывать анимацию загрузки
 */
import {useState} from "react";

export const  useFetching = (callback) => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const fetching = async () => {
		try {
			setIsLoading(true)
			await callback()
		} catch (e) {
			setError(e.message)
		} finally {
			setIsLoading(false)
		}
	}

	return [fetching, isLoading, error]
};

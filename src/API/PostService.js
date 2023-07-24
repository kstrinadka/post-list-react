import axios from "axios";

/**
 * Сервис по работе с постами с сайта https://jsonplaceholder.typicode.com/
 */
export default class PostService {

	/**
	 * @param limit - сколько постов выводить на одной странице
	 * @param page - какую страницу показать
	 */
	static async getAll(limit = 10, page = 1) {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
			params: {
				_limit: limit,
				_page: page
			}
		})
		return response
	}
}

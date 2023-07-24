import axios from "axios";

/**
 * Сервис по работе с постами с сайта https://jsonplaceholder.typicode.com/
 */
export default class PostService {

	static async getAll() {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
			return response.data
		} catch (e) {
			console.log(e)
		}
	}
}

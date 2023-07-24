import axios from "axios";

/**
 * Сервис по работе с постами с сайта https://jsonplaceholder.typicode.com/
 */
export default class PostService {

	static async getAll() {
		const response = await axios.get('https://jsonplaceholder.typicode.com/postss')
		return response.data
	}
}

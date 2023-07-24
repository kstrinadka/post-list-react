import {useMemo} from "react";


export const usePosts = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort)
	return useSortedAndSearchedPosts(sortedPosts, query)
}

/**
 * Хук для сортировки постов
 * @param posts - список постов
 * @param sort - метод сортировки постов (по названию, по описанию, ...)
 */
export const useSortedPosts = (posts, sort) => {
	return useMemo(() => {
		if (sort) {
			return [...posts.sort((a, b) => a[sort].localeCompare(b[sort]))]
		}
		return posts
	}, [sort, posts])
}

/**
 * Кастомный хук для поиска постов
 * @param sortedPosts - список постов
 * @param querySearch - параметр поиска для постов (останутся только те посты, в названии которых есть совпадение с querySearch)
 */
export const useSortedAndSearchedPosts = (sortedPosts, querySearch) => {
	return useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(querySearch))
	}, [querySearch, sortedPosts])
}



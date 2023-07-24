export const getPageCount = (totalCount, limit) => {
	return Math.ceil(totalCount / limit)
}


// по другому можно реализовать
//todo сделать через useMemo, чтобы массив с номерами страниц не пересчитывался каждый раз
//todo при использовании хука useMemo для массива реализовать хук usePagination
//Выносим функционал по заполнению массива в отдельную функцию
export const getPagesArray = (totalPages) => {
	let result = []
	for (let i = 0; i < totalPages; i++) {
		result.push(i+1)
	}
	return result
}



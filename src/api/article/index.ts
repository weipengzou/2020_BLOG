import { http } from '../index'
import Mock from 'mockjs'
Mock.setup({
	timeout: 2000,
})
Mock.mock('https://zwp1.top/api/article/get', {
	'data|10': [
		{
			'id|+1': 1,
			'title|1': [
				Mock.Random.title(1, 5),
				Mock.Random.title(1, 5),
				Mock.Random.title(1, 5),
				Mock.Random.title(1, 5),
				Mock.Random.title(1, 5),
				Mock.Random.title(1, 5),
			],
			'content|1': [
				Mock.Random.paragraph(1, 10),
				Mock.Random.paragraph(1, 10),
				Mock.Random.paragraph(1, 10),
				Mock.Random.paragraph(1, 10),
				Mock.Random.paragraph(1, 10),
				Mock.Random.paragraph(1, 10),
				Mock.Random.paragraph(1, 10),
			],
		},
	],
})

export const getArticleListData = () => {
	return http.get('https://zwp1.top/api/article/get')
}

import { http } from '../index'
import Mock from 'mockjs'
Mock.setup({
	timeout: 2000,
})
Mock.mock('https://zwp1.top/api/todo/get', {
	'data|4': [
		{
			'id|+1': 1,
			'content|1': [
				Mock.Random.paragraph(1, 5),
				Mock.Random.paragraph(1, 5),
				Mock.Random.paragraph(1, 5),
				Mock.Random.paragraph(1, 5),
				Mock.Random.paragraph(1, 5),
			],
			'curStep|1': [0, 1, 2],
		},
	],
})

export const getTodoListData = () => {
	return http.get('https://zwp1.top/api/todo/get')
}

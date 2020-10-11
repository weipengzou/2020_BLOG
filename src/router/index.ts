/*
 * @Author: 邹威鹏(944740645@qq.com)
 * @remarks:
 */
import { Todo, Active, About, Home, Edit } from '../pages'
interface IrouterItem {
	path: string
	title?: string
	component: any
}
export default <IrouterItem[]>[
	{
		path: '/home',
		title: '首页',
		component: Home,
	},
	{
		path: '/active',
		title: '文章',
		component: Active,
	},
	{
		path: '/todo',
		title: '待办',
		component: Todo,
	},
	{
		path: '/edit',
		title: '编辑',
		component: Edit,
	},
	{
		path: '/about',
		title: '关于',
		component: About,
	},
]

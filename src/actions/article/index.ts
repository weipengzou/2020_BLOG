import { actionTypes } from '../index'
import { getArticleListData } from '../../api/article'

// 获取文章列表
const getArticleList = () => async (dispatch: any) => {
	let res = await getArticleListData()
	console.log(res)
	dispatch({
		type: actionTypes.GET_ARTICLE,
		payload: res.data,
	})
}
export { getArticleList }

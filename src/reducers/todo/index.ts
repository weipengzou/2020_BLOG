// todo reducer
import { actionTypes } from '../../actions'
import { delTodoList } from '../../actions/todo'
import { getTodoListData } from '../../api/todo'

const initState = {
	todoListData: [
		// { id: 1, content: '默认内容', curStep: 0 }
	],
	isLoading: false,
}
export default (state: any = initState, action: any) => {
	// state深拷贝 触发差异渲染视图
	let newState = Object.assign({}, state)

	switch (action.type) {
		case actionTypes.GET_TODOLIST: {
			newState.todoListData = action.payload.data.data
			return newState
		}
		case actionTypes.ADD_TODOLIST:
			console.log('要添加的东西', action.payload)
			console.log(action.payload)
			action.payload.id = state.todoListData.length
			newState.todoListData = [...newState.todoListData, action.payload]
			return newState
		case actionTypes.UPDATE_TODOLIST:
			console.log('要修改的东西', action.payload)
			return state
		case actionTypes.DEL_TODOLIST:
			console.log('要删除的东西', action.payload)
			newState.todoListData = newState.todoListData.filter(
				(item: any) => action.payload.id != item.id
			)
			return newState
		default:
			// 默认返回state，不渲染视图
			return state
	}
}

import { actionTypes } from '../index'
import { todoListItem, IupdateTodoList, IdelTodoList } from '../../types/todo'
import { getTodoListData } from '../../api/todo'
const getTodoList = () => async (dispatch: any) => {
	console.log('触发 getTodoList action')
	let res = await getTodoListData()
	dispatch({
		type: actionTypes.GET_TODOLIST,
		payload: { data: res.data },
	})
}
const addTodoList = ({ content, curStep }: todoListItem) => (dispatch: any) => {
	dispatch({
		type: actionTypes.ADD_TODOLIST,
		payload: {
			content,
			curStep,
		},
	})
}
const updateTodoList = ({ item, updateProp, updateVal }: IupdateTodoList) => (
	dispatch: any
) => {
	dispatch({
		type: actionTypes.UPDATE_TODOLIST,
		// payload: updateVal,
	})
}
const delTodoList = ({ id }: IdelTodoList) => (dispatch: any) => {
	dispatch({
		type: actionTypes.DEL_TODOLIST,
		payload: { id },
	})
}

export { getTodoList, addTodoList, updateTodoList, delTodoList }

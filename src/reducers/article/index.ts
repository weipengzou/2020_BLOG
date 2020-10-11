import { actionTypes } from '../../actions'

const initState = {
	articleList: [],
	isLoading: true,
}

export default (state: any = initState, action: any) => {
	let newState = Object.assign({}, state)
	switch (action.type) {
		case actionTypes.GET_ARTICLE:
			newState.articleList = action.payload.data
			newState.isLoading = false
			return newState
		default:
			newState = Object.assign({}, state)
			newState.isLoading = true
			return newState
	}
}

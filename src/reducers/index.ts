import { combineReducers } from 'redux'
import todo from './todo'
import article from './article'

export default combineReducers({
	todo,
	article,
})

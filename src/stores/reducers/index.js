import { combineReducers } from 'redux'
import {formReducer} from './formReducer'
//insert another reducers here to be combined

const reducers = combineReducers({
  formReducer
})

export default reducers

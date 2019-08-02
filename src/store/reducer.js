import {CHANGE_INPUT_VALUE,ADD_INPUT_TO_LIST,DELETE_ITEM,INIT_LIST_ACTION} from './actionName'
const defaultState = {
  inputValue: '',
  list: []
}
// reducer 可以接受state,但是绝对不能修改state
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newValue = JSON.parse(JSON.stringify(state))
    newValue.inputValue = action.value
    return newValue
  }
  if (action.type === ADD_INPUT_TO_LIST) {
    const newValue = JSON.parse(JSON.stringify(state))
    newValue.list.push(newValue.inputValue)
    newValue.inputValue = ''
    return newValue
  }
  if (action.type === DELETE_ITEM) {
    const newValue = JSON.parse(JSON.stringify(state))
    newValue.list.splice(action.value, 1)
    return newValue
  }
  if (action.type ===INIT_LIST_ACTION) {
    const newValue = JSON.parse(JSON.stringify(state))
    newValue.list = action.value
    return newValue
  }
  return state
}

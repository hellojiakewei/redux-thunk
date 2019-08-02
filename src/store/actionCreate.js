import axios from 'axios'
import {CHANGE_INPUT_VALUE, ADD_INPUT_TO_LIST, DELETE_ITEM,INIT_LIST_ACTION} from './actionName'

export const getInputValue = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const addInputValue = () => ({
    type: ADD_INPUT_TO_LIST,
})
export const deleteItem = (value) => ({
    type: DELETE_ITEM,
    index: value
})
export const initListAction = (value) => ({
    type:INIT_LIST_ACTION,
    value: value
})

export const grtTodoList =()=>{
    // 可以直接接收  dispatch 的方法
    return (dispatch)=>{
        axios.post('/api/user/login').then((res)=>{
            const action = initListAction(res.data)
            dispatch(action)
        })
    }
}
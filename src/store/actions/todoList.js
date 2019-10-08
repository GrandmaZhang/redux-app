import * as Types from '../actionType'
import axios from 'axios'

export const changeVal = (value) => {
    return {
        type: Types.CHANGE_INPUT_VAL,
        value
    }
}

export const addItem = (value) => {
    return {
        type: Types.ADD_TODO_ITEM,
        value
    }
}

export const deleteItem = (index) => {
    return {
        type: Types.DELETE_TODO_ITEM,
        index
    }
}

export const getInitList = (list) => {
    //redux-thunk  中间件，处理返回函数
    // return (dispatch) => {
    //     axios.get('list.json').then(res => {
    //         dispatch({
    //             type: Types.GET_INIT_LIST,
    //             list: res
    //         })
    //     })
    // }

    //引入redux-promise之后也能处理返回的promise了
    return new Promise((resolve, reject) => {
        axios.get('list.json').then(res => {
            resolve({
                type: Types.GET_INIT_LIST,
                list: res
            })
        })
    })

    // let data;
    // axios.get('list.json').then(res => {
    //     data = res;
    // })
    // return {
    //     type: Types.GET_INIT_LIST,
    //     list: data
    // }
}
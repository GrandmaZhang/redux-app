import * as Types from '../actionType'

const initState = {
    inpVal: '',
    list: []
}

export default (state=initState, action) => { //第二个参数通过dispatch传递进来
    const newState = JSON.parse(JSON.stringify(state));
    //更改state需要先复制一份，然后更改这个备份，最后返回这个备份
    //不能直接修改state
    switch (action.type) {
        case Types.CHANGE_INPUT_VAL:
            newState.inpVal = action.value;
            return newState;
        case Types.ADD_TODO_ITEM:
            newState.list.push(action.value);
            newState.inpVal = '';
            return newState;
        case Types.DELETE_TODO_ITEM:
            newState.list.splice(action.index, 1);
            return newState;
        case Types.GET_INIT_LIST:
            newState.list = action.list;
            return newState;
    }
    return state;
}
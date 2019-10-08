import * as Types from '../actionType'

//初始化的数据
const initState = {
    count: 0
}

export default (state=initState, action) => { //第二个参数通过dispatch传递进来
    const newState = JSON.parse(JSON.stringify(state));
    //更改state需要先复制一份，然后更改这个备份，最后返回这个备份
    //不能直接修改state
    switch (action.type) {
        case Types.COUNT_ADD:
            newState.count = newState.count + 3;
            return newState;
    }
    return state;
}
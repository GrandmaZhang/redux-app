import React, { Component } from 'react'
import store from '../store'
// import * as Types from '../store/actionType'
import * as Actions from '../store/actions/todoList'
import {connect} from 'react-redux'
import axios from 'axios'
//拦截器
axios.interceptors.response.use(res => {
    if(res.data.code == 0){
        return res.data.data;
    }else{
        return Promise.reject('请求出错');
    }
})

axios.interceptors.request.use(config => {
    console.log(config);
    config.headers.token = 'jkldjsfklsjflkeejennj';
    return config;
})

class TodoList extends Component {
    // state = store.getState().todoList;

    // componentDidMount () {
    //     store.subscribe(this.handleStoreChange);
    // }

    componentDidMount () {
        this.props.getInitList();
    }

    render () {
        // console.log(store.getState());
        // console.log(this.props);
        const {inpVal, list} = this.props;
        return (
            <>
                <div>
                    <input value={ inpVal } onChange={this.handleChange}></input>
                    <button onClick={this.handleAdd}>添加</button>
                </div>
                <ul>
                    {
                        list.map((item, index) => (
                            <li key={item + index}>
                                {item}
                                <button onClick={()=>{this.handleDelete(index)}}>X</button>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }

    handleChange = (e) => {
        // // const action = {
        // //     type: Types.CHANGE_INPUT_VAL,
        // //     value: e.target.value
        // // }
        // const action = Actions.getTodoChangeInputValAction(e.target.value);

        // store.dispatch(action);  //传递给reducer
        this.props.changeVal(e.target.value);
    }

    handleStoreChange = () => {
        this.setState(store.getState().todoList);
    }

    handleAdd = () => {
        // // const action = {
        // //     type: Types.ADD_TODO_ITEM,
        // //     value: this.state.inpVal
        // // }
        // const action = Actions.getTodoAddItemAction(this.state.inpVal);

        // store.dispatch(action)

        this.props.addItem(this.props.inpVal);
    }

    handleDelete = (index) => {
        // // const action = {
        // //     type: Types.DELETE_TODO_ITEM,
        // //     index
        // // }
        // const action = Actions.getTodoDeleteItemAction(index);

        // store.dispatch(action);

        this.props.deleteItem(index);
    }
}

const mapStateToProps = (state) => ({
    inpVal: state.todoList.inpVal,
    list: state.todoList.list
})

// const mapDispatchToProps = (dispatch) => ({
//     changeVal: (val) => {
//         dispatch(Actions.getTodoChangeInputValAction(val));
//     },
//     addItem: (val) => {
//         dispatch(Actions.getTodoAddItemAction(val));
//     },
//     deleteItem: (index) => {
//         dispatch(Actions.getTodoDeleteItemAction(index));
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
// export default TodoList;
export default connect(mapStateToProps, Actions)(TodoList);
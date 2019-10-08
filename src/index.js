import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'

import TodoList from './components/TodoList'
import Counter from './components/Counter'

render(
    <Provider store={store}>
        <Counter></Counter>
        <TodoList></TodoList>
    </Provider>,
    window.root
);
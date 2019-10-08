import {takeEvery} from 'redux-saga/effects'
import * as Types from './actionType'

function* mySaga () {
    yield takeEvery(Types.ADD_TODO_ITEM, addItem);
}

function* addItem () {
    console.log('add');
}

export default mySaga;
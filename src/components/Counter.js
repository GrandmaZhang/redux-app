import React, {Component} from 'react'
// import store from '../store'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getCountAddAction} from '../store/actions/counter'

import * as Actions from '../store/actions/counter'

class Counter extends Component {

    render () {
        // console.log(this.props);
        return (
            <div>
                {this.props.count}
                <button onClick={this.handleClick}>add</button>
            </div>
        )
    }

    handleClick = () => {
        this.props.getCountAddAction(3);
    }
}

const mapStateToProps = (state) => ({
    count: state.counter.count
})

// const mapDispatchToProps = (dispatch) => ({
//     add: (value) => {
//         dispatch(getCountAddAction(value))
//     }
// })

// const mapDispatchToProps = (dispatch) =>{
//     return bindActionCreators(Actions,dispatch)
// }

export default connect(mapStateToProps, Actions)(Counter);
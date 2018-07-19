import {connect} from 'react-redux'
import Counter from "../component/Counter";
import {decrement, increment, mutiply} from "../actions";


const mapStateToProps = (state,ownProps) =>{
    //ownProps大概是一个action
    return {
        value : state[ownProps.index]
    }

}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        onIncrement:(index) => dispatch(increment(index)),
    onDecrement:(index) => dispatch(decrement(index)),
    onMultiplication:(mutipler,index) =>dispatch(mutiply(mutipler,index)),
        onDeply:(index) => dispatch(increment(index))
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
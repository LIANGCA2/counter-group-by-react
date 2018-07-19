import React,{Component} from 'react'
import Counter from "../container/containerCouter";


class CounterGroup extends Component{
    constructor(props){
        super(props);
    }
    render(){
        //this.props.obj
        let amount = this.props.amount;
let list = []
        for(var i =0;i<amount;i++){
            list.push(<Counter index = {i} key={i}/>)
        }
        return (<div>{list}</div>)
    }
}
export default CounterGroup
import React, {Component} from "react"

class Counter extends Component {
    constructor(props) {
        super(props);
        this.inputText = React.createRef();
    }

    multiple = () => {
        const multiple = this.inputText.current.value;
        const onMultiplication = this.props.onMultiplication;
        onMultiplication(multiple,this.props.index);
    }


    render() {
        const {value, onIncrement, onDecrement,onDeply} = this.props;

        const index = this.props.index;

            return (<p>
            Clicked: {value} times
            {' '}
            <button onClick={()=>{
                onIncrement(index)
            }}>
                +
            </button>
            <button onClick={()=>onDecrement(index)}>
                -
            </button>
            <input type="text" defaultValue={0} ref={this.inputText}/>
            <button onClick={this.multiple}>
                x
            </button>
                <button onClick={()=>setTimeout(()=>{
                    onDeply(index)
                },1000)}>
                    Increment Async
                </button>

        </p>)
    }
}

export default Counter;
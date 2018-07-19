import React, {Component} from 'react';
import Counter from "./component/Counter";
import CounterGroup from "./component/CouterGroup";

class App extends Component {

    constructor(props) {
        super(props);

    }


    // multiple = () => {
    //     const multiple = this.inputText.current.value;
    //     const onMultiplication = this.props.onMultiplication;
    //     onMultiplication(multiple);
    // }

    render() {

        //const {state, onIncrement, onDecrement, onMultiplication} = this.props;
        return (
            <div className="App">
                <CounterGroup amount = {2}
                              obj = {this.props}

                />

            </div>
        );
    }
}

export default App;
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import counter from './reducers'
import {decrement, increment, mutiply} from "./actions";
import {Provider} from "react-redux"
const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <Provider store={store}>
    <App
        // state={store.getState()}
        // onIncrement={(index) => store.dispatch(increment(index))}
        // onDecrement={(index) => store.dispatch(decrement(index))}
        // onMultiplication={(mutipler,index) => store.dispatch(mutiply(mutipler,index))}

    />
    </Provider>,
    rootEl
)

render()
store.subscribe(render)
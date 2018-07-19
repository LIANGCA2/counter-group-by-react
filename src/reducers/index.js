export default (state = [0,0], action) => {
    console.log("I am here")
    switch (action.type){
        case 'INCREMENT': {

            const newState = [...state]
            newState[action.index]++;

            return newState;
        }
        case 'DECREMENT': {
            const newState = [...state]
            newState[action.index]--
            return newState;
        }
        case 'MULTIPLIPLICATION':{
            const newState = [...state]
            newState[action.index]*=action.mutipler
            return newState;
        }
        case'DEPLY':{
            const newState = [...state]
            newState[action.index]++;
            return newState;
        }

        default:
            return state
    }
}
import {createStore} from 'redux';

const reducer = (state = 'es', action) => {

    if(action.type === "CHANGE_LANGUAGE"){
        return action.language
    }

    return state;

}

export default createStore(reducer);
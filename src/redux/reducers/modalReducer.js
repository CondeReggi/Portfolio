import { TOGGLE_VALUE } from '../actions/toggleAction'

const initialState = {
    value: false
};

const modalReducer = (state =  initialState , action) => {
    switch(action.type){
        case TOGGLE_VALUE:
            return {
                ...state,
                value: !state.value
            };

        default: 
            return state;
    }
}

export default modalReducer;
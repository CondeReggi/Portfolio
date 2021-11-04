import { TOGGLE_MODE } from '../actions/toggleAction'

const initialState = {
    value: true
};

const darkmodeReducer = (state =  initialState , action) => {
    switch(action.type){
        case TOGGLE_MODE:
            return {
                ...state,
                value: !state.value
            };

        default: 
            return state;
    }
}

export default darkmodeReducer;
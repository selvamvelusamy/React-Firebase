import * as ActionTypes from '../action/action'

const initialState = {
	persons: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.GET_PERSONS: 
            return {
                persons: [...action.persons]
            }
        default: 
            return state
    }
};

export default reducer;

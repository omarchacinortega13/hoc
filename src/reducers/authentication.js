import { CHANGE_AUTH } from '../actions/types';

export default function(state = false, action) {
    console.log(' recived ', action);
    switch (action.type) {
        case CHANGE_AUTH:
            return action.payload;
        default:
            return state;
    }

    return state
}
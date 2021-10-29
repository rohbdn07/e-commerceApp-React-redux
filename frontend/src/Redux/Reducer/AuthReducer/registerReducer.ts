import { Action } from "../../Action/actionInterface";
import { ActionType } from "../../Action/actionTypes";


const initialState = {
    registerdUserResponse: ''
}
export default function registerReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ActionType.REGISTER_USER:
            if (action.payload !== undefined) {
                return {
                    registerdUserResponse: action.payload
                }

            }
            break;
        case ActionType.CANCEL_REGISTER_FORM:
            // let getCurrentState = state.registerdUserResponse
            // console.log('the current state', getCurrentState)
            return {
                registerdUserResponse: ''
            }

        default:
            return state;
    }
}

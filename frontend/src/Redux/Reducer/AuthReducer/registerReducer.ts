import { Action } from "../../Action/actionInterface";
import { ActionType } from "../../Action/actionTypes";


const initialState = {
    user: {}
}
export default function registerReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ActionType.USER_REGISTER_SUCCESS:
            if (action.payload !== undefined) {
                return {
                    user: action.payload
                }

            }
            break;

        case ActionType.USER_REGISTER_FAILURE:
            return {}

        case ActionType.CANCEL_REGISTER_FORM:
            return {
                user: {}
            }

        default:
            return state;
    }
}

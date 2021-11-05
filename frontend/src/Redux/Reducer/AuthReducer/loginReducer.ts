import { Action } from "../../Action/actionInterface";
import { ActionType } from "../../Action/actionTypes";


const initialState = {
    loggedIn: false,
    user: {}
}

/**
 * @description handles the login states
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} state
 */
export default function loginReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ActionType.USER_LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.payload
            }

        case ActionType.USER_LOGIN_FAILURE:
            return {}

        case ActionType.CANCEL_LOGIN_FORM:
            return {
                loggedIn: false,
                user: {}
            }

        case ActionType.USER_LOGOUT:
            return {
                loggedIn: false,
                user: {}
            }

        default:
            return state
            break;
    }
}

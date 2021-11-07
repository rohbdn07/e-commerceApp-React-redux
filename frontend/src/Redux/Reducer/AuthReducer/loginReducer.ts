import { Action } from "../../Action/actionInterface";
import { ActionType } from "../../Action/actionTypes";



const getUser = localStorage.getItem('user');
const user = getUser ? JSON.parse(getUser) : {};

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: {} };

/**
 * @description handles the login states
 * @param {initialState} state
 * @param {Action} action
 * @returns {state} state
 */
export default function loginReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ActionType.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            }

        case ActionType.USER_LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                user: {},
            };

        case ActionType.CANCEL_LOGIN_FORM:
            return {
                ...state,
                isLoggedIn: false,
                user: {},
            };

        case ActionType.USER_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: {},
            };

        default:
            return state
            break;
    }
}

import { Dispatch } from 'redux';
import { ILoginUserResponse, IUserAuth } from "../../../interfaces/userAuth.interface";
import { userService } from '../../../servicesAPI/Auth-service/Users/UserService';
import { Action } from '../actionInterface';
import { ActionType } from '../actionTypes';


/**
 * 
 * @param userCredentials email, password
 * @dispatch response data to reducer
 * @returns void
 */

export const loginUserAction = (userCredentials: IUserAuth) => async (dispatch: Dispatch<Action>) => {
    // console.log('the login action data', userCredentials)

    if (userCredentials && typeof userCredentials !== 'undefined') {
        try {
            const loginResponse: ILoginUserResponse | undefined = await userService.login(userCredentials)
            // console.log('the response auth data', loginResponse)

            if (loginResponse !== undefined) {
                dispatch({
                    type: ActionType.USER_LOGIN_SUCCESS,
                    payload: loginResponse,
                })
            }

        }
        catch (error) {
            dispatch({
                type: ActionType.USER_LOGIN_FAILURE
            });

            console.log('there is error', error)
        }
    }
}


export const cancelLoginForm = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({
            type: ActionType.CANCEL_LOGIN_FORM,

        })

    } catch (error) {
        dispatch({
            type: ActionType.USER_LOGIN_FAILURE
        });

        console.log('there is error', error)
    }
}


export const logoutAction = () => async (dispatch: Dispatch<Action>) => {
    userService.logout();
    dispatch({
        type: ActionType.USER_LOGOUT,

    })
}

import { Dispatch } from 'redux';
import { IRegisterUserResponse, IUserAuth } from "../../../interfaces/userAuth.interface";
import { userService } from '../../../servicesAPI/Auth-service/Users/UserService';
import { Action } from '../actionInterface';
import { ActionType } from '../actionTypes';


/**
 * 
 * @param userCredentials email, password, username.
 * @userService register function which fetch register API.
 * @returns void
 */
export const registerUserAction = (userCredentials: IUserAuth) => async (dispatch: Dispatch<Action>) => {

    if (userCredentials && typeof userCredentials !== undefined) {
        try {
            const registerResponse: IRegisterUserResponse | undefined = await userService.register(userCredentials);
            // console.log('the register response', registerResponse)
            if (registerResponse !== undefined) {
                dispatch({
                    type: ActionType.USER_REGISTER_SUCCESS,
                    payload: registerResponse,
                })
            }
        }
        catch (error) {
            dispatch({
                type: ActionType.USER_REGISTER_FAILURE
            });
            // console.log('there is error', error)
        }

    }
}


/**
 * @description delete the response message (got from backend)
 * in order to remove Alert bar.
 * @function cancelRegisterForm 
 * @returns void
 */
export const cancelRegisterForm = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({
            type: ActionType.CANCEL_REGISTER_FORM,
        })
    } catch (error) {
        dispatch({
            type: ActionType.USER_REGISTER_FAILURE,
            payload: 'Register cancelled'
        });

        // console.log('there is error', error)
    }
}



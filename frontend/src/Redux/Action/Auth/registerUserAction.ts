
import { Dispatch } from 'redux';
import IUserAuth from "../../../interfaces/userAuth.interface";
import { axiosFetchAuthAPI } from "../../../servicesAPI/axios";
import { Action } from '../actionInterface';
import { ActionType } from '../actionTypes';


type UserInfo = {
    data: IUserAuth;
};

/**
 * 
 * @param userCredentials email, password, username
 * @returns void
 */

export const registerUserAction = (userCredentials: IUserAuth) => async (dispatch: Dispatch<Action>) => {
    try {
        if (typeof userCredentials !== undefined || null) {
            const { data }: UserInfo = await axiosFetchAuthAPI.post('/api/register', userCredentials);
            dispatch({
                type: ActionType.REGISTER_USER,
                payload: data,
            })
        }
    } catch (error) {
        dispatch({
            type: ActionType.PRODUCT_LOADING_ERROR
        });

        console.log('there is error', error)
    }
}


/**
 * @function cancelRegisterForm 
 * cancel the response message (got from backend)
 * in order to remove Alert bar.
 * @returns void
 */

export const cancelRegisterForm = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({
            type: ActionType.CANCEL_REGISTER_FORM,

        })

    } catch (error) {
        dispatch({
            type: ActionType.PRODUCT_LOADING_ERROR
        });

        console.log('there is error', error)
    }
}



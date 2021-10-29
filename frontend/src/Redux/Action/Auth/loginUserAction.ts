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
 * @param userCredentials email, password
 * @dispatch response data to reducer
 * @returns void
 */

export const loginUserAction = (userCredentials: IUserAuth) => async (dispatch: Dispatch<Action>) => {
    console.log('the login action data', userCredentials)

    try {
        if (typeof userCredentials !== undefined && userCredentials) {
            const { data }: UserInfo = await axiosFetchAuthAPI.post('/api/login', userCredentials);
            console.log('the response auth data', data)

            dispatch({
                type: ActionType.LOGIN_USER,
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
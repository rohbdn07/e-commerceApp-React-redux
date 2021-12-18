import {
   ILoginUserResponse,
   IRegisterUserResponse,
   IUserAuth,
} from "../../../interfaces/userAuth.interface";
import { axiosFetchAuthAPI } from "../../axios";

export const userService = {
   register,
   login,
   logout,
};

/**@description   Register a new user
 *@function register
 * @param userCredentials contains user register credentials.
 * @returns response data
 */
async function register(userCredentials: IUserAuth) {
   if (typeof userCredentials !== undefined || null) {
      try {
         const response: IRegisterUserResponse = await axiosFetchAuthAPI.post(
            "/api/register",
            userCredentials
         );
         // console.log("the api call for register response", response);
         return response;
      } catch (error) {
         console.log("Error while performaing user register", error);
         throw error;
      }
   }
}

/**
 *
 * @param userCredentials it contains user login credentials.
 * @returns response data
 */

async function login(userCredentials: IUserAuth) {
   if (typeof userCredentials !== undefined || null) {
      try {
         const response: ILoginUserResponse = await axiosFetchAuthAPI.post(
            "/api/login",
            userCredentials
         );

         const storeIntoLocalStorage = {
            userName: response.data.userName,
            token: response.data.token,
            message: response.data.message,
         };
         // store user details and jwt token in local storage
         //to keep user logged in between page refreshes
         if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(storeIntoLocalStorage));
         }
         return response;
      } catch (error) {
         console.log("Error while performaing login User", error);
      }
   }
}

/**
 * @description logout user & clear user from local storage
 * @function logout
 * @returns void
 */
function logout() {
   localStorage.removeItem("user");
}

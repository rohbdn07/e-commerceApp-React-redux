import { withRouter, useHistory } from "react-router-dom";
// import jwt_decode from "jwt-decode";
// import useLogoutUser from "../../Components/Auth/logout/useLogoutUser";
// import { history } from "../../Helpers/history/history";

// const isTokenExpired = (token: any) => {
//    const tokenData = parseJwt(token);
//    if (tokenData) {
//       const currentTime = new Date().getTime() / 1000;
//       return tokenData.exp < currentTime;
//    }
//    return true;
// };

// type AuthVerifyProps = {
//    history: any;
//    logout: () => void;
// };

/**
 *
 * @param token string
 * @returns JSON.parse(token) | null
 */
const parseJwt = (token: any) => {
   // console.log("token", token);
   // console.log(JSON.parse(atob(token.split(".")[1])));
   try {
      return JSON.parse(atob(token.split(".")[1]));
   } catch (error) {
      console.log("error is parseJWT", error);
      return null;
   }
};

/**
 *
 * @param Logout
 * @returns
 */
const AuthVerify = (props: any) => {
   const history = useHistory();
   props.history.listen(() => {
      const userInLocalStorage = localStorage.getItem("user");
      const user = userInLocalStorage ? JSON.parse(userInLocalStorage) : null;
      if (user && user.token) {
         const decodedToken = parseJwt(user.token);
         if (decodedToken.exp * 1000 < Date.now()) {
            localStorage.clear();
            history.push("/");
            props.logout();
         }
      }
      return;
   });

   return <></>;
};

export default withRouter(AuthVerify);

// import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
// import jwt_decode from "jwt-decode";

// const parseJwt = (token: any) => {
//    try {
//       return JSON.parse(jwt_decode(token.split(".")[1]));
//    } catch (e) {
//       return null;
//    }
// };

// class AuthVerify extends Component {
//    constructor(props: any) {
//       super(props);

//       props.history.listen(() => {
//          const userInLocalStorage = localStorage.getItem("user");
//          const user = userInLocalStorage
//             ? JSON.parse(userInLocalStorage)
//             : null;

//          if (user) {
//             const decodedJwt = parseJwt(user.accessToken);

//             if (decodedJwt.exp * 1000 < Date.now()) {
//                props.logout();
//             }
//          }
//       });
//    }

//    render() {
//       return <div></div>;
//    }
// }

// export default withRouter(AuthVerify);

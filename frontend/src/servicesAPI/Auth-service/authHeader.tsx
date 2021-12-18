export default function authHeader() {
   const user = localStorage.getItem("user");
   console.log("getUser", user);
   const userExist = JSON.parse(user as string);
   console.log("userExist", userExist);
   //    console.log("userExist.token", userExist.token);
   if (userExist && userExist.token) {
      // for Node.js Express back-end
      return { "x-access-token": userExist.token };
   }
   return {};
}

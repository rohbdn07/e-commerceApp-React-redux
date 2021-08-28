import { axiosInstance } from "./axios";

export const checkoutAPI = async (selectedItems, setLoading) => {
   try {
      setLoading(true);
      const { data } = await axiosInstance.post(
         "/api/create-checkout-session",
         {
            dataFromClient: selectedItems,
         }
      );
      setLoading(false);

      // console.log("the data saved to server", data.url);
      // console.log("the session data are", data.session);
      // console.log("the session data are", data.coupon);

      if (data && data.url) {
         window.location = data.url;
      }
      localStorage.removeItem("selectedProduct");
   } catch (error) {
      console.log("there is an error", error);
      alert("there is an error", error); //TODO: change this to react tostify to alert the User
   }
};

import "./CartHeader.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducer";

export default function CartHeader(): JSX.Element {
   const { selectedItems }: any = useSelector(
      (state: RootState) => state.productReducer
   );
   return (
      <>
         <div className="cartheader">
            <div>
               <h2>Shopping cart</h2>
               <p>
                  You have <span>{selectedItems.length}</span> item(s) in the
                  cart.
               </p>
            </div>
         </div>
      </>
   );
}

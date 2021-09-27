import { useSelector, useDispatch } from "react-redux";
import { selectToCartAction } from "../../Redux/Action/selectToCartAction";
import { RootState } from "../../Redux/Reducer";

export default function AddToCartButton(props: any): JSX.Element {
   const dispatch = useDispatch();
   const { itemId } = props;
   const { isAdded }: any = useSelector(
      (state: RootState) => state.productReducer
   );

   const addTocart = (itemId: string) => {
      dispatch(selectToCartAction(itemId));
   };
   return (
      <>
         <button className="btn btn-primary" onClick={() => addTocart(itemId)}>
            {!isAdded ? "Add to cart" : "Added"}
         </button>
      </>
   );
}

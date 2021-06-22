import {SELECT_ITEM} from '../Constants/action-types';


export const SelectToCartAction = (selectedProduct) => {
    return (
        {
            type: SELECT_ITEM,
            payload: selectedProduct
        }
    )

}
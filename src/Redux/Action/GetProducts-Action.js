import { GET_PRODCUTS } from '../Constants/action-types';

export const GetProductsAction = (data) => {
    return (
        {
            type: GET_PRODCUTS,
            payload: data
        }
    )
}


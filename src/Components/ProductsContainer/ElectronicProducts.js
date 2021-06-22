import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SelectToCartAction } from '../../Redux/Action/SelectToCartAction';
import './Product.scss';


export default function ElectronicProducts() {
    const {allProducts} = useSelector(state => state.productReducer);
    const {selectedItems} = useSelector (state => state.addToCartReducer)
    const dispatch = useDispatch();

    const addTocart = (itemId) => {
        const selectedProduct= allProducts.filter((item)=> item.id == itemId);
        // const itemarray = [selectedProduct];
        // const pushItem = itemarray.push(selectedProduct)
        console.log('the selected item is', selectedProduct)
        if (selectedProduct.length > 0) {
            localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct))
            dispatch(SelectToCartAction(selectedProduct))
        }
        
    }

    // console.log('the selected item is', item)
   
    return (
        <>
              <h2 style={{marginTop:"3rem"}}>Electronics:</h2>

        {
            allProducts === false ? <h3>Couldn't able to get data from source</h3> : 
            <div className="products">
              
                {
                    allProducts.map((item)=>{
                            return  (item.category === "electronics" ?
                                    <div className="card col-lg-3 col-md-3 product_wrapper" key={item.id}>
                                        <img src={item.image} className="card-img-top" alt="men's-product" />
                                        <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text price_text">${item.price}</p>
                                        {/* <p className="card-text">{item.description}</p> */}
                                        <button className="btn btn-primary" onClick={()=> addTocart(item.id)}>Add to cart</button>
                                        </div>
                                    </div>

                                : null)
                            
                    })
                }
            
            </div>
        }
           
        </>
    )
}
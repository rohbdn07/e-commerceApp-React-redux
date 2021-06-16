import React,{ useEffect, useState } from 'react';
import { useDispatch }  from 'react-redux';
import { GetProductsAction } from '../../Redux/Action/GetProducts-Action';
import MenProduct from './MenProduct';
import JeweleryProducts from './JeweleryProducts';
import ElectronicProducts from './ElectronicProducts';
import WomenProducts from './WomenProducts';

export default function ProductsList() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        getProducts()
    },[])

    const getProducts = () => {
        try {
        setLoading(true);
        fetch('https://fakestoreapi.com/products?limit=20')
                            .then((res) => res.json())
                            .then((data) =>{
                                console.log('the products datas are: ', data)
                                dispatch(GetProductsAction(data))
                            })
                            setLoading(false)
                            
                                
        } catch (error) {
            console.log('there is an error', error)
            
        }

       
                            
    }

    return (
       <>
            <div className="col-lg-8 mx-auto"> 
            {
                loading ? <h3>Loading...</h3> :
                <div className="product_list">
                     <MenProduct />
                    <JeweleryProducts />
                    <ElectronicProducts />
                    <WomenProducts />
                </div>
            }
                
            </div>
       </>
    )
}

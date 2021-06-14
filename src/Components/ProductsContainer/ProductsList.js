import React,{ useEffect } from 'react';
import { useDispatch }  from 'react-redux';
import { GetProductsAction } from '../../Redux/Action/GetProducts-Action';
import MenProduct from './MenProduct';
import JeweleryProducts from '../ProductsContainer/JeweleryProducts';
import ElectronicProducts from '../ProductsContainer/ElectronicProducts';
export default function ProductsList() {
    const dispatch = useDispatch();

    useEffect(() => {
        getProducts()
    })

    const getProducts = () => {
        try {
        const fetchData = fetch('https://fakestoreapi.com/products?limit=12')
                            .then((res) => res.json())
                            .then((data) =>{
                                console.log('the products datas are: ', data)
                                dispatch(GetProductsAction(data))
                               
                            })
                                
        } catch (error) {
            console.log('there is an error', error)
            
        }

       
                            
    }

    return (
       <>
            <div className="col-lg-8 mx-auto"> 
                <MenProduct />
                <JeweleryProducts />
                <ElectronicProducts />
            </div>
       </>
    )
}

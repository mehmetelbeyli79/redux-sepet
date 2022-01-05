import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProduct} from '../redux/actions/productActions'

function ProductListing() {
    const products=useSelector(state=>state);
    const dispatch=useDispatch();
    const fetchProducts=async ()=>{
        const response= await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log("Error:",err);
        });
        //console.log(response.data)
        dispatch(setProduct(response.data));
    };
    useEffect(()=>{
        fetchProducts()
    },[]);

    


    // console.log(products);
    return (
        <div className='container'>
            <div className="row">
                <ProductComponent/>
            </div>
            
        </div>
    )
}

export default ProductListing

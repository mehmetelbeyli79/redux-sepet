import axios from 'axios';
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedProduct,removeSelectedProduct } from '../redux/actions/productActions';

function ProductDetail() {
    const product=useSelector(state=> state.product);
    const {title,image,price,category}=product;
    const {productId}=useParams();
    const dispatch=useDispatch();
    // console.log(product);

    const fetchProductDetail=async()=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch(err=> console.log("Err:",err));

        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if(productId && productId !== "") fetchProductDetail();
        return ()=>{
            dispatch(removeSelectedProduct());
        }
    }, [productId]);

    
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card text-dark bg-light m-3 p-2">
                    <img src={image} className="card-img-top" alt={title}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">$ {price}</p>
                        <p className="card-text">{category}</p>
                        <button className='btn btn-danger'>SİL</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail

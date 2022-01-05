import React from 'react'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
function ProductComponent() {
    const products=useSelector(state=>state.allProducts.products);
    //const {id,title}=products[0];

    const renderList=products.map((product)=>{
        const {id,title,image,price,category}=product;
        return(
            <div className='col-md-3' key={id}>
                <Link to={`/product/${id}`}>
                    <div className="card text-dark bg-light m-3 p-2">
                    <img src={image} className="card-img-top" alt={title}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">$ {price}</p>
                        <p className="card-text">{category}</p>
                    </div>
                    </div>
                </Link>
                
            
            </div>
        );
    })

    return <>{renderList}</>
}

export default ProductComponent

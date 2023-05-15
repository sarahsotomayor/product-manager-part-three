import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
    const {product, setProduct} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then((res) => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <div>
            <h2>All Products</h2>
            {
                product.map((product, index)=>{
                return (
                    <div key={index}>
                        <p>
                            <Link to={`/product/${product._id}`}>{product.title}'s Detail Page!</Link>
                        </p>
                    </div>
                )})
            }
        </div>
    );
}

export default ProductList;
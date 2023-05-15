import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
    const {product, setProduct} = props;
    const navigate = useNavigate();


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

    const deleteHandler = (id) => {

        const newList = product.filter((product, idx) => (product._id != id))

            setProduct(newList)

        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res)
                navigate("/product/");
            })
            .catch(error => console.log(error))
    }

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
                        <p>
                            <Link to={`/product/edit/${product._id}`}>Edit</Link>
                            <button onClick={() => deleteHandler(product._id)}>Delete</button>
                        </p>
                    </div>
                )})
            }
        </div>
    );
}

export default ProductList;
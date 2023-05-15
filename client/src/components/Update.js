import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("title");
    const [price, setPrice] = useState("price");
    const [description, setDescription] = useState("description");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(error => console.log(error))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate("/product/"); //back to Main.js
            })
            .catch(error => console.log(error))
    }

    return(
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                        name="title" 
                        value={title} 
                        onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                        name="price"
                        value={price} 
                        onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                        name="description"
                        value={description} 
                        onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" value="Update"/>
            </form>
        </div>
    )

}

export default Update;
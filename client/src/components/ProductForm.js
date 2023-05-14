import React, {useState} from 'react'
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState("title");
    const [price, setPrice] = useState("price");
    const [description, setDescription] = useState("description");

    const onSubmitHandler = (e) => {
        e.preventDefault();  //prevent default behavior

        //make a post request to create a product
        axios.post('http://localhost:8000/api/product', {
            title,  //shorthand for title: title,
            price,
            description
        })

            .then(res => {
                console.log(res);  //always console log to track data
                console.log(res.data);
            })
                .catch(error => console.log(error))
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <h2>Product Manager</h2>
            <div>
                <label>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price</label>
                <input type="text" onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <input type="text" onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <input type="submit" value="Create"/>
        </form>
    )
}

export default ProductForm;
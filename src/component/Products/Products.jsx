import React from 'react';

const Products = (props) => {
    console.log(props.product);
    let{name,seller,img,ratings,price,category}=props.product
    return (
        <div className='container '>
            <div className=" card h-100">
 
    <img src={img} alt="" className='img-fluid' />
    
    <h5 class="card-title">{name}</h5>
    <h6 class="card-title">{seller}</h6> 
    <p class="card-title">{price}$</p> 
    <p class="card-text">{category}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
</div>
        </div>
    );
};

export default Products;
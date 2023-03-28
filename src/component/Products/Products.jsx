import React from 'react';

const Products = (props) => {
    console.log(props.product);
    let{name,seller,img,ratings,price,category}=props.product
   let click=props.click
    return (
        <div className='container'>
            <div className=" card h-100 ">
 
    <img src={img} alt="" className='  object-fit-fill  border rounded w-100' />
    <h5 >{name}</h5>
    <h6 >{seller}</h6> 
    <p class="card-title">{price}$</p> 
    <p class="card-text">{category}</p>

    <a  onClick={()=> click(props.product)} class="btn btn-primary w-100 ">Add to cart</a>
</div>
        </div>
    );
};

export default Products;
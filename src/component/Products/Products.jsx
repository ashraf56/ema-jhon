import React from 'react';

const Products = (props) => { 
    // console.log(props.product);
    let{name,seller,img,price,category}=props.product
   let click=props.click;

   

    return (
        <div className='container'>
            <div className=" card h-100 p-2 ">
 
    <img src={img} alt="" className=' mb-2 object-fit-fill  border rounded w-100' />
    <h5 className='h-50'>{name}</h5>
    <h6 >{seller}</h6> 
    <p >${price}</p> 
    <p >{category}</p>

    <a  onClick={()=> click(props.product)}  className="btn btn-primary w-100 bottom-0 ">Add to cart</a>
</div>
        </div>
    );
};

export default Products;
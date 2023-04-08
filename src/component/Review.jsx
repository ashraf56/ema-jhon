import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Review = ({item,removecart}) => {
    let{shipping,id,price,name,img,quantity}=item
    return (
        <div >
      <div className="card mb-3  w-50 m-auto " >
  <div className="row g-0 align-items-center">
    <div className="col-md-4 text-center">
      <img src={img} className="img-fluid object-fit-fill  border rounded " alt="..."/>
    </div>
    <div className="col-md-6 lh-1">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="">price :${price}</p>
        <p className="">Quantity: {quantity}</p>
      </div>
    </div>
    <div className='col-md-2'>
    <button type="button" onClick={()=> removecart(id)} className="btn btn-outline-danger rounded-pill"> 
    <FontAwesomeIcon icon={faTrash} />
    </button>

    </div>
  </div>
</div>
        </div>
    );
};

export default Review;
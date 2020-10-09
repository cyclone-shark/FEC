import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const AddToCart = (props) => {
  const sku = useSelector((state) => state.sku);
  return (
    <React.Fragment>
      <button className='cart' onClick={() => console.log(sku)}>
        Add To Cart
      </button>
    </React.Fragment>
  );
};

export default AddToCart;

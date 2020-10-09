import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
const AddToCart = (props) => {
  const sku = useSelector((state) => state.sku);

  var clickHandler = () => {
    if (sku) {
      axios.post('http://18.224.37.110/cart', { sku_id: sku });
    } else {
      console.log('pick a size!');
    }
  };
  return (
    <React.Fragment>
      <button className='cart' onClick={() => clickHandler()}>
        Add To Cart
      </button>
    </React.Fragment>
  );
};

export default AddToCart;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
const ProductName = (props) => {
  const productName = useSelector((state) => state.productData.name);
  const category = useSelector((state) => state.productData.category);

  return (
    <React.Fragment>
      <div className='category'>{category}</div>
      <br></br>
      <div className='product-name'>{productName}</div>
    </React.Fragment>
  );
};

export default ProductName;

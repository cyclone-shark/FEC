import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentPrice } from '../../../reducers/currentPrice';
import { changeSalePrice } from '../../../reducers/salePrice';
const Price = (props) => {
  const price = useSelector((state) => state.currentPrice);
  const styleData = useSelector((state) => state.styleData);
  const style = useSelector((state) => state.productStyle);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(styleData.original_price);
    if (styleData.original_price) {
      dispatch(changeSalePrice(styleData.sale_price));
      dispatch(changeCurrentPrice(styleData.original_price));
    }
  }, [styleData]);

  return (
    <React.Fragment>
      <div className='price'>${price}</div>
    </React.Fragment>
  );
};

export default Price;

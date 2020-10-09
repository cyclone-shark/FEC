import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentPrice } from '../../../reducers/currentPrice';
import { changeSalePrice } from '../../../reducers/salePrice';
const Price = (props) => {
  const price = useSelector((state) => state.currentPrice);
  const styleData = useSelector((state) => state.styleData);
  const style = useSelector((state) => state.productStyle);
  const dispatch = useDispatch();
  const salePrice = useSelector((state) => state.salePrice);
  useEffect(() => {
    if (styleData.original_price) {
      dispatch(changeSalePrice(styleData.sale_price));
      dispatch(changeCurrentPrice(styleData.original_price));
    }
  }, [styleData]);

  return (
    <React.Fragment>
      {salePrice === '0' ? (
        <div className='price'>${price}</div>
      ) : (
        <div className='price'>
          <div style={{ color: 'red' }}>${salePrice}</div>
          <s>${price}</s>
        </div>
      )}
    </React.Fragment>
  );
};

export default Price;

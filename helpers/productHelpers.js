import { getProduct, getProductStyles } from './apiHelpers.js';
import _ from 'lodash';

var getProductData = (productId) => {
  var obj = {};

  return getProduct(productId)
    .then((data) => {
      _.extend(obj, data);
      return getProductStyles(productId);
    })
    .then((data) => {
      _.extend(obj, data);
      console.log(obj);
      return obj;
    })
    .catch((err) => {
      console.error(err);
    });
};

var getStyleData = (productData, style_id) => {};

export { getProductData };

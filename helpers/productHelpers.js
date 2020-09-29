//import api from './apiHelpers.js';

var getProductData = (productId) => {
  //var data = api.getProductStyles(productId);
  var data = temp.results;
  var styleData = {};
  for (var i = 0; i < data.length; i++) {
    styleData[data[i].style_id] = data[i];
  }
  return styleData;
};

var getStyleData = (productData, style_id) => {
  return productData[style_id];
};

var obj = getProductData(0);

console.log(getStyleData(obj, 11));

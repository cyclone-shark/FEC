import axios from 'axios';

const getAllProducts = () => {
  return
  axios.get('http://18.224.37.110/products')
  .then(data => return data)
  .catch(err => console.error(err))
};

const getProduct = (id) => {
  return
  axios.get(`http://18.224.37.110/products/${id}`)
  .then(data => return data)
  .catch(err => console.error(err))
}

const getProductStyles = (id) => {
  axios.get(`http://18.224.37.110/products/${id}/styles`)
  .then(data => return data)
  .catch(err => console.error(err))
}

// const getRelatedProducts = (id) => {
//   axios.get(`http://18.224.37.110/products/${id}/related`)
// }

module.exports = {
  getAllProducts,
  getProduct,
  getProductStyles
}
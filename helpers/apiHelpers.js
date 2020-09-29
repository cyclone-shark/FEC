import axios from 'axios';

const getAllProducts = () => {
  return axios
    .get('http://18.224.37.110/products')
    .then((data) => data)
    .catch((err) => console.error(err));
};

const getProduct = (id) => {
  return axios
    .get(`http://18.224.37.110/products/${id}`)
    .then((data) => data.data)
    .catch((err) => console.error(err));
};

const getProductStyles = (id) => {
  return (
    axios
      .get(`http://18.224.37.110/products/${id}/styles`)
      //maybe data.data.results
      .then((data) => data.data)
      .catch((err) => console.error(err))
  );
};

// const getRelatedProducts = (id) => {
//   axios.get(`http://18.224.37.110/products/${id}/related`)
// }

export { getAllProducts, getProduct, getProductStyles };

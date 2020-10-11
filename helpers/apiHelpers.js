import axios from 'axios';
import { get } from 'lodash';

const server = 'http://3.137.191.193';

const getAllProducts = () => {
  return axios
    .get(`${server}/products`)
    .then((data) => data)
    .catch((err) => console.error(err));
};

const getProduct = (id) => {
  return axios
    .get(`${server}/products/${id}`)
    .then((data) => data.data)
    .catch((err) => console.error(err));
};

const getProductStyles = (id) => {
  return (
    axios
      .get(`${server}/products/${id}/styles`)
      //maybe data.data.results
      .then((data) => data.data)
      .catch((err) => console.error(err))
  );
};
//List Reviews
const getReviewsForProduct = (productId) => {
  return axios
    .get(`${server}/reviews?product_id=${productId}&count=10000`)
    .then(({ data }) => data.results)
    .catch((err) => console.error(err));
};
//Get Review Metadata
const getReviewMetadataForProduct = (productId) => {
  return axios
    .get(`${server}/reviews/meta?product_id=${productId}`)
    .then(({ data }) => data)
    .catch((err) => console.error(err));
};
/* Add a Review for a Product
This API call takes Body Parameters:

| Parameter       | Type   | Description                                                  |
| --------------- | ------ | ------------------------------------------------------------ |
| product_id      | integer| Required ID of the product to post the review for            |
| rating          | int    | Integer (1-5) indicating the review rating                   |
| summary         | text   | Summary text of the review                                   |
| body            | text   | Continued or full text of the review                         |
| recommend       | bool   | Value indicating if the reviewer recommends the product      |
| name            | text   | Username for question asker                                  |
| email           | text   | Email address for question asker                             |
| photos          | [text] | Array of text urls that link to images to be shown           |
| characteristics | object | Object of keys representing characteristic_id and values representing the review value for that characteristic.
*/
const addReview = (reviewObj) => {
  return axios.post(`${server}/reviews`, reviewObj);
};
//Mark Review as Helpful
const markReviewHelpful = (reviewId) => {
  return axios.put(`${server}/reviews/${reviewId}/helpful`);
};
//Updates a review to show it was reported.
const reportReview = (reviewId) => {
  return axios.put(`${server}/reviews/${reviewId}/report`);
};

const logInteraction = (element, widget, time) => {
  return axios.post(`${server}/interactions`, {
    element,
    widget,
    time,
  });
};

// const getRelatedProducts = (id) => {
//   axios.get(`http://18.224.37.110/products/${id}/related`)
// }

export {
  getAllProducts,
  getProduct,
  getProductStyles,
  getReviewMetadataForProduct,
  getReviewsForProduct,
  addReview,
  markReviewHelpful,
  reportReview,
  logInteraction,
};

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReviewListEntry from './reviewListEntry';
import {changeReviewData} from  '../../reducers/reviewData';
import {changeReviewSortOrder} from '../../reducers/reviewSortOrder';
import {changeReviewCount} from '../../reducers/reviewCount';
import store from '../../store.js';
import {getReviewsForProduct} from '../../../../helpers/apiHelpers';


const ReviewList = () => {
  //I want to see the review list order changed when I click a new sort order from the dropdown menu
  
  var sortOrder = useSelector((state) => state.reviewSortOrder);
  var reviews = useSelector((state)  => state.reviewData);
  var reviewsCount = useSelector((state) => state.reviewCount);
  var productId = useSelector((state) => state.productId);
  var [tempReviews, changeReviews] = useState(reviews);
  var [tempReviewsCount, changeReviewCount] = useState(reviews.count);
  
  
  useEffect(() => {
    //ran once and only once
    getReviewsForProduct(1)
      .then((data) => { 
        //***TODO - MODULARIZE THE SORT CODE INTO A SEPERATE FUNCTION
        //CHANGE THIS SO THAT THE REDUCERS DO THE FILTER AND SEARCH*/
        data.sort((a,b) => {
          if (a.helpfulness === b.helpfulness)  {
            return Date.parse(b.date) -  Date.parse(a.date);
          } else {
            return b.helpfulness - a.helpfulness;
          }
        });
        store.dispatch(changeReviewData(data));
        changeReviewCount(data.length);
      })
      .catch(error => console.log(error));
  }, []);

  function updateReviews() {
    getReviewsForProduct(productId)
      .then((reviewData) => {
        changeReviews(reviewData);//this updates tempReview which we use to manipulate sort order
      })
      .catch(err => console.error(err));
  }
  
  useEffect(() => {
    updateReviews();
    console.log('IN USE EFFECT');
    var sortedReviews = tempReviews.slice();
   
    if (sortOrder === 'relevance') {
      sortedReviews.sort((a,b) => {
        if (a.helpfulness === b.helpfulness)  {
          return Date.parse(b.date) -  Date.parse(a.date);
        } else {
          return b.helpfulness - a.helpfulness;
        }
      });
    } else if (sortOrder === 'newest') {
      console.log('newest');
      sortedReviews.sort((a, b) => {
        return Date.parse(b.date) - Date.parse(a.date);
      });
    } else if (sortOrder === 'helpful') {
      console.log('helpful')
      sortedReviews = sortedReviews.filter(review => review.helpfulness > 0);
      sortedReviews.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      })
    }
    changeReviewCount(sortedReviews.length);
    store.dispatch(changeReviewData(sortedReviews));
    
    changeReviews(sortedReviews);
  }
  , [sortOrder]); //change on sort order change
    
    const updateSortOrder = (sortBy) => {
      store.dispatch(changeReviewSortOrder(sortBy));
    };
    
    return (
      <div className="w3-conatiner w3-cell">
        <b>{tempReviewsCount} reviews, sorted by</b>
        <select
          name='sortReviews'
          id='sortReviews'
          onChange={(e) => {updateSortOrder(e.target.value)}}>
          <option defaultValue='selected' value='relevance'>Relevance</option>
          <option value='helpful'>Helpfulness</option>
          <option value='newest'>Newest</option>
        </select>
        <ul className="w3-ul w3-card" style={{width: "50%"}}>
          {reviews
            ? reviews.map((review) => {
                return <li className="w3-padding-small"><ReviewListEntry review={review} key={review.review_id}/></li>;
              })     
            : null}
            <div class="w3-bar">
              <center>
                <button className="w3-button w3-white w3-border w3-round-xlarge">MORE REVIEWS</button>
                <button className="w3-button w3-white w3-border w3-round-xlarge">ADD A REVIEW +</button>
              </center>
            </div>
        </ul>
      </div>
    );
}

export default ReviewList;
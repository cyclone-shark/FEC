/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useDispatch } from 'react';
import { useSelector } from 'react-redux';
import ReviewListEntry from './reviewListEntry';
import {changeReviewData} from  '../../reducers/reviewData';
import {changeReviewSortOrder} from '../../reducers/reviewSortOrder';
import {changeReviewCount} from '../../reducers/reviewCount';
import store from '../../store.js';
import {getReviewsForProduct} from '../../../../helpers/apiHelpers';
import Modal from './Modal';
import dummyData from './dummyReviewData';


const ReviewList = () => {
  //1
  //I want to see the review list order changed when I click a new sort order from the dropdown menu
  //const reviews = useSelector((state)  => state.reviewData);
 
  

  
  // useEffect(() => {
  //   // updateReviews();
  //   var sorted = _BRDSort(reviews.slice());
  //   store.dispatch(changeReviewData(sorted));
  //   //changereviews(sorted);
  // }
  // , [sortOrder]); //change on sort order change
  // console.log(reviews);
  
  const reviews = useSelector((state) => state.reviewData);
  
  const [sortedReviews, setSortedReviews] = useState([]);
  const [toggle, setToggle] = useState(false);   
  const [sortOrder, setSortOrder] = useState('relevance');
  const [displayCount, setDisplayCount] =  useState(0);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    setSortedReviews(_BRDSort(reviews));
  }, [reviews]);

  useEffect(() => {
    var sorted = _BRDSort(reviews);

    // _updateSortOrder(sortOrder);
    setSortedReviews(sorted);
  }, [sortOrder]);

  
  const displayModal = i => {
    setShowModal(true);
  }
  const hideModal = i => {
    setShowModal(false);
  }

  const _updateSortOrder = (sortBy) => {
    setSortOrder(sortBy);
  };
  //sorts the array based on BRD 
  function _BRDSort(reviews) {
    var sorted = reviews.slice();
    if (sortOrder === 'relevance') {
      sorted.sort((a,b) => {
        if (a.helpfulness === b.helpfulness)  {
          return Date.parse(b.date) -  Date.parse(a.date);
        } else {
          return b.helpfulness - a.helpfulness;
        }
      });
    } else if (sortOrder === 'newest') {
      sorted.sort((a, b) => {
        return Date.parse(b.date) - Date.parse(a.date);
      });
    } else if (sortOrder === 'helpful') {
      sorted = sorted.filter(review => review.helpfulness > 0);
      sorted.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      })
    }
    return sorted;
  }
  // useEffect (() => {
  //   setLongerList(renderedList.slice(0, 4))
  //   setListLength(reviews.length)

  //   if (renderedList.length > 2) {
  //     setToggle(true)
  //   }
  // }, [reviews])

  // function updateReviews() {
  //   getReviewsForProduct(productId)
  //     .then((reviewData) => {
  //       changeReviews(reviewData);//this updates tempReview which we use to manipulate sort order
  //       changeReviewCount(reviewData.length);
  //     })
  //     .catch(err => console.error(err));
  // }
  
 
    
  return (
    <React.Fragment>
        <b> {sortedReviews.length===1 ? `${sortedReviews.length} review` : `${sortedReviews.length} reviews` } , sorted by </b>
        <select className="w3-select w3-cell"
          style={{float: 'right'}}
          name='options'
          id='sortReviews'
          onChange={(e) => _updateSortOrder(e.target.value)}>
          <option defaultValue='selected' value='relevance'>Relevance</option>
          <option value='helpful'>Helpfulness</option>
          <option value='newest'>Newest</option>
        </select>
        <div className="w3-container">
            {sortedReviews
              ? sortedReviews.map((review) => {
                  return <div><ReviewListEntry review={review} key={review.toString()}/></div>;
                })       
              : null}
        </div>
      
      
        <Modal show={showModal} handleClose={() => hideModal()}>
          <div>
            <div className="main-modal">
              
            </div>
          </div>
        </Modal>
      


      <div className="w3-container">
        <center>
          {toggle 
            ? <button className="w3-button w3-white w3-border w3-round-xlarge">MORE REVIEWS</button> 
            : null}
          <button className="w3-button w3-white w3-border w3-round-xlarge" onClick={() => displayModal()}>ADD A REVIEW +</button>
        </center>
      </div>
    </React.Fragment>
  );
}

export default ReviewList;

/*copied and deleted pasteboard
 

className="w3-ul w3-bar-item" style={{width: '75%'}}

*/
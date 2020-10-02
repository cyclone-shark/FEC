/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ReviewListEntry = (props) =>  (
  <div>
    Review ID: {props.review.review_id}
  </div>
);

export default ReviewListEntry;
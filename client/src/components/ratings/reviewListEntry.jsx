/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ReviewListEntry = (props) =>  (
  <div>
    Reveiewer Name: {props.review.reviewer_name}
    <br></br>
    Date: {props.review.date}
    <br></br>
    Helpfulness: {props.review.helpfulness}
    <br></br>
    <br></br>
  </div>
);

export default ReviewListEntry;
import React from 'react';
import styled from 'styled-components';

export class _5Stars extends React.Component {
  constructor(props) {
    super(props);
    this.RatingStyle = styled.div`
      .star-ratings-css {
        unicode-bidi: bidi-override;
        color: #c5c5c5;
        font-size: 45px;
        height: 200px;
        width: 200px;
        margin: 0 auto;
        position: relative;
        text-shadow: 0 1px 0 #a2a2a2;
      }
      .star-ratings-css::before {
        content: '★★★★★';
        opacity: .3;
      }
      .star-ratings-css::after {
        color: gold;
        content: '★★★★★';
        text-shadow: 0 1px 0 red;
        position: absolute;
        z-index: 1;
        display: block;
        left: 0;
        top: 0;
        width: ${props.percentage}%;
        overflow: hidden;
      }`;
  }
    
    render(){
      return (
        <this.RatingStyle>
          <div className="star-ratings-css"></div>
        </this.RatingStyle>
      );
    }
  }
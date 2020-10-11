import React from 'react';

const AddReviewModal = ({handleClose, show, children}) => {
  const showDontShowClass = show ? 'modal display-block' : 'modal display-none';


  return (
    <React.Fragment>
      <div className={showDontShowClass}>
        <section className="main-modal">
          {children}
          <div className="w3-display-topmiddle">
              <center><h1>Write your review</h1></center>
              
          </div>
          <div className="w3-display-bottommiddle">
            <button className="w3-button w3-white w3-border w3-round-xlarge" onClick={() => handleClose()}>CANCEL</button>
            <button className="w3-button w3-white w3-border w3-round-xlarge">ADD REVIEW</button>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default AddReviewModal;
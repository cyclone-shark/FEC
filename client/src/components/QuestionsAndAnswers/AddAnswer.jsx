import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";

//----------------coming from material ui ---------------------
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(6, 2, 4, 3),
  },
}));

//-------------------------------------------------------------

export default function AddAnswer({ setQuestions }) {
  const id = useSelector((state) => state.productId);
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const checkform = () => {
    if (name === '') {
      alert("You must enter the following:");
      return false;
    } else if (email === '') {
      alert("You must enter the following:");
      return false;
    } else if (body === '') {
      alert("You must enter the following:");
      return false;
    }
    onHandleSubmit();
  }

  const onHandleSubmit = () => {
    axios.post(`http://18.224.37.110/qa/questions/${id}/answers`, {
      body: body,
      name: name,
      email: email
    }).then(() => alert('Answer Submitted!')).catch(err => console.log(err))
  }

  const inputStyle = {
    width: '100%',
    height: '50%',
    padding: "10px"
  }
  const btnStyle = {
    '-webkit-appearance': 'unset',
    'border': 'none',
    'padding-right': '2px',
    'padding-left': '0px',
    'text-decoration': 'underline',
    'background-color': 'rgba(28, 43, 40, 0.12)',
    'color': 'rgb(75, 75, 75)'
  }


  return (
    <div>
      <button style={btnStyle} type="button" onClick={handleOpen}>
        Add Answer
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <form  action="script.cgi" method="post" >
            <input style={inputStyle}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name..."
              name="name"
            />
            <br />
            <input style={inputStyle}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Your email..."
              name="email"
            />
            <br />
            <input style={inputStyle}
              onChange={(e) => setBody(e.target.value)}
              type="text"
              placeholder="Your answer..."
              name="body"
            />
          </form>
          <button type="button"  onClick={checkform}>
            Submit
          </button>
          <button onClick={handleClose}> Close </button>
        </div>
      </Modal>
    </div>
  );
}


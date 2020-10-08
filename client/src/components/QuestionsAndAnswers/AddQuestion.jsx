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
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

//-------------------------------------------------------------

export default function AddQuestion({ setQuestions }) {

  const id = useSelector((state) => state.productId);

  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const checkform = () => {
    if (name === '') {
      alert("please enter you name");
      return false;
    } else if (email === '') {
      alert("required");
      return false;
    } else if (body === '') {
      alert("Please write a question");
      return false;
    }
    handleSubmit();
  }

  const handleSubmit = () => {
    axios
      .post("http://18.224.37.110/qa/questions", {
        body: body,
        name: name,
        email: email,
        product_id: id,
      })
      .then(() => alert('Submitted!'))
      .catch((err) => console.log(err));

  };

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

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Ask Your Question
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <form  action="script.cgi" method="post" >
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              name="name"
            />
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your email"
              name="email"
            />
            <br />
            <input
              onChange={(e) => setBody(e.target.value)}
              type="text"
              placeholder="Enter your question"
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

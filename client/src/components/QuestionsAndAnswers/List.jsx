import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ShowAnswers from "./ShowAnswers";
import AnswerModal from './AnswerModal';
import LoadAnswers from './LoadAnswers';
import { useSelector, useDispatch } from "react-redux";
import upDateList from '../../reducers/QA.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const List = ({ questions,  }) => {

  //<Helpfulness helpful={question.question_helpfulness}/>
  //Picture
  const id = useSelector((state) => state.productId);

  const onHandleSubmit = () => {
    axios.post(`http://18.224.37.110/qa/questions/${id}/answers`, {
      body: 'body',
      name: 'name',
      email: 'email',
      photo: 'photos'
    }).then(() => alert('Answer Submitted!')).catch(err => console.log(err))
  }


  const classes = useStyles();

  //const dispatch = useDispatch();
  //dispatch(upDateList(renderedList))
  //const list = useSelector(state => state.QAList)


  const renderedList = questions
    .sort((a, b) => b.question_helpfulness - a.question_helpfulness)
    .map((question) => {
      return (
        <div>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  Q: {question.question_body}
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>
                  <span> helpful? {question.question_helpfulness} |</span>
                  <span>Yes</span>
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}> <button> <AnswerModal /> </button></Paper>
              </Grid>
            </Grid>
          </div>
          <div>
            {Object.keys(question.answers).map((answer) => {
              return (
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}>
                      A: {question.answers[answer].body}
                    </Paper>
                  </Grid>
                  <Grid item xs>
                    <Paper className={classes.paper}>
                      <div>
                        <span>
                          by {question.answers[answer].answerer_name},{" "}
                        </span>
                        <span>{question.answers[answer].date}</span>
                        <span>
                          Helpful?{question.answers[answer].helpfulness} |
                        </span>
                        <span>yes |</span>
                        <span> Report {question.answers[answer].reported}</span>
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs>
                    <Paper className={classes.paper}> <button>show more answer</button></Paper>
                  </Grid>
                </Grid>
              );
            })}
          </div>
        </div>
      );
    });

  return (
    <div>
      <ShowAnswers renderedList={renderedList} />
    </div>
  );
};

export default List;

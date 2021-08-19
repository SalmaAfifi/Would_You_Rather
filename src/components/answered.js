import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container'
import ShowChartOutlinedIcon from '@material-ui/icons/ShowChartOutlined';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


function Answered(props) {
    const classes = useStyles();
    if (!props.exist) {
      return (<pr>THIS QUESTION DOES NOT EXIST!!</pr>)
    }
    else{
  return (
    <Container maxWidth="sm">
        <Card className={classes.root} paddingTop={'20%'}>
      <CardHeader
        avatar={
            <Avatar alt="Remy Sharp" src={props.img}
            className={classes.large} /> //ADD AVATAR URL 
        }
        title={`Asked By ${props.authorName}`} //ADD THE USER Name here //ADD POLL OPTION DOWN IN THE FORM 
      />
      <CardContent>
      <Card className={classes.root} variant="outlined">
        <Typography variant="h5" component="h2">
            {props.optionOne}
        </Typography>
        <br></br>
        <Typography variant="body2" component="p" color={'secondary'}>
          <ShowChartOutlinedIcon fontSize={'small'} color={'secondary'}/>
          {`${props.numOption1} of ${props.total} voted for this option`}
          <br />
          {props.userVote === "optionOne" && 'You Voted For This Option!'}
        </Typography>
      </Card>
      <br></br>
      <Card className={classes.root} variant="outlined">
        <Typography variant="h5" component="h2">
            {props.optionTwo}
        </Typography>
        <br></br>
        <Typography variant="body2" component="p" color={'secondary'}>
          <ShowChartOutlinedIcon fontSize={'small'} color={'secondary'}/>
          {`${props.numOption2} of ${props.total} voted for this option`}
          <br />
          {props.userVote === "optionTwo" && 'You Voted For This Option!'}
        </Typography>
      </Card>
      </CardContent>
    </Card>
    </Container>
  );
      }
}

function mapStateToProps({questions, authedUser, users}, props) {
  const { id } = props.match.params
  const exist = Object.keys(questions).includes(id)?true:false

  if (exist) {
    const question = questions[id]
    const img = users[question.author].avatarURL
    const authorName = users[question.author].name
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text
    const numOption1 = question.optionOne.votes.length
    const numOption2 = question.optionTwo.votes.length
    const total = numOption1 + numOption2
    const userVote = users[authedUser].answers[id]

    return{
      id,
      exist,
      question,
      img,
      authorName,
      optionTwo,
      optionOne,
      total,
      userVote,
      numOption2,
      numOption1
    }

  }else{
    return{
      id,
      exist
  }
}
}

export default connect(mapStateToProps)(Answered)
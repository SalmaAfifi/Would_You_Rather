import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import {addNewAnser} from '../actions/shared'

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


function Unanswered(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const sendAnswer = (e) => {
    e.preventDefault()
    const ans ={
      authedUser: props.authedUser,
      qid: props.id,
      answer: value
    }
    props.dispatch(addNewAnser(ans))
    props.history.push(`/result/${props.id}`)
    // TODO ADD THE FUNCTION IMP
}
  if (!props.exist) {
    return (<pr>THIS QUESTION DOES NOT EXIST!!</pr>)
  }
  else if (props.answered){
    return (<Redirect to={`/result/${props.id}`}/>)
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
        title={`${props.authorName} Is Asking`}  //ADD THE USER Name here //ADD POLL OPTION DOWN IN THE FORM 
      />
      <CardContent>

        <FormControl component="fieldset">
        <FormLabel component="legend">Would You Rather ..?</FormLabel>
        <RadioGroup aria-label="poll" name="poll1" value={value} onChange={handleChange}>
            <FormControlLabel value="optionOne" control={<Radio />} label={props.optionOne} />  
            <FormControlLabel value="optionTwo" control={<Radio />} label={props.optionOne} /> 
        </RadioGroup> 
    </FormControl>

      </CardContent>
      <CardActions>
      <Button variant="contained" color="secondary" onClick={(e) => sendAnswer(e)}>
            Submit
      </Button>
      </CardActions>
    </Card>
    </Container>
  );
  }
}

function mapStateToProps({questions, authedUser, users}, props) {
  const { id } = props.match.params
  const exist = Object.keys(questions).includes(id)?true:false

  if (exist) {
    const answered = questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser)
    const question = questions[id]
    const img = users[question.author].avatarURL
    const authorName = users[question.author].name
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text

    return{
      id,
      exist,
      answered, 
      question,
      authedUser,
      img,
      authorName,
      optionTwo,
      optionOne
    }

  }else{
    return{
      id,
      exist
  }
}
  
}

export default withRouter(connect(mapStateToProps)(Unanswered))
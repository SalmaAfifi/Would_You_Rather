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
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import {addNewQuestion} from '../actions/shared'
import { withRouter } from 'react-router-dom'

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
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

}));


function AskQ(props) {
  const classes = useStyles();
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');



  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const sendQ = (e) => {
    e.preventDefault()
    const q = {
      optionOneText: value1,
      optionTwoText: value2,
      author: props.authedUser
    }
    props.dispatch(addNewQuestion(q))
    props.history.push("/");

}

  return (
    <Container maxWidth="sm">
        <Card className={classes.root} paddingTop={'20%'}>
            <CardHeader
            avatar={
                <Avatar alt="Remy Sharp" src={props.img}
                className={classes.large} /> //ADD AVATAR URL 
            }
            title={`${props.name}, Would You Rather`}  //ADD THE USER Name here //ADD POLL OPTION DOWN IN THE FORM 
            />
            <CardContent>
              <TextField required id="standard-required" label="Required" defaultValue="Option1" onChange={(e)=>handleChange1(e)}/>
              <TextField required id="standard-required" label="Required" defaultValue="Option1" onChange={(e)=>handleChange2(e)}/>
            </CardContent>
            <CardActions>
            <Grid container direction="column" justifyContent="flex-start" alignItems="center">
            <Grid item>
            <Button variant="contained" color="secondary" onClick={(e) => sendQ(e)} >
                Submit
            </Button>
            </Grid>
            </Grid>
            </CardActions>
    </Card>
    </Container>
  );
}



function mapStateToProps({authedUser, users}) {

  const img = users[authedUser]['avatarURL']
  const name = users[authedUser]['name']
  return{
    img,
    authedUser,
    name
  }
}
export default withRouter(connect(mapStateToProps)(AskQ))

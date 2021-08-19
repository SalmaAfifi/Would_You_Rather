
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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


function QuestionHome(props) {
  const classes = useStyles();

  const viewPoll = (e) => {
    e.preventDefault()
    props.history.push(`/question/${props.id}`);
}
  return (
    <>
       <Card className={classes.root}>
      <CardHeader
        avatar={
            <Avatar alt="Remy Sharp" src={`${props.avatar} Is Asking`}
            className={classes.large} /> //ADD AVATAR URL 
        }
        title={`${props.name} Is Asking`}  //ADD THE USER Name here
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            Would You Rather ..?
        </Typography>
      </CardContent>
      <CardActions>
      <Grid   container direction="column" justifyContent="flex-start" alignItems="center">
      <Grid item >
      
      <Button variant="contained" color="secondary" onClick={(e) => viewPoll(e)}>
            View Poll
      </Button>
      
      </Grid>
      </Grid>
      </CardActions>
    </Card>
    <br></br>
    </>
    
  );
}

function mapStateToProps({users}, {question}) {
  const {id} = question
  const {author} = question
  const user = users[author]
  const name = user['name']
  const avatar = user['avatarURL']
  return {name, avatar, id}
}
export default withRouter(connect(mapStateToProps)(QuestionHome))
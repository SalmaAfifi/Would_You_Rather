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

const sendAnswer = (e) => {
    e.preventDefault()
    alert('you clicked me')
    // TODO ADD THE FUNCTION IMP
}


export default function Unanswered() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const sendAnswer = (e) => {
    e.preventDefault()
    alert(value)
    // TODO ADD THE FUNCTION IMP
}

  return (
    <Container maxWidth="sm">
        <Card className={classes.root} paddingTop={'20%'}>
      <CardHeader
        avatar={
            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1590700722804-caef4fed22e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" 
            className={classes.large} /> //ADD AVATAR URL 
        }
        title="UserName Is Asking"  //ADD THE USER Name here //ADD POLL OPTION DOWN IN THE FORM 
      />
      <CardContent>

        <FormControl component="fieldset">
        <FormLabel component="legend">Would You Rather ..?</FormLabel>
        <RadioGroup aria-label="poll" name="poll1" value={value} onChange={handleChange}>
            <FormControlLabel value="Option1" control={<Radio />} label="Option1" />  
            <FormControlLabel value="Option2" control={<Radio />} label="Option2" /> 
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
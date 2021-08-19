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
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';


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


export default function Unanswered() {
    const classes = useStyles();


  return (
    <Container maxWidth="sm">
        <Card className={classes.root} paddingTop={'20%'}>
      <CardHeader
        avatar={
            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1590700722804-caef4fed22e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" 
            className={classes.large} /> //ADD AVATAR URL 
        }
        title="Asked By UserName"  //ADD THE USER Name here //ADD POLL OPTION DOWN IN THE FORM 
      />
      <CardContent>
      <Card className={classes.root} variant="outlined">
        <Typography variant="h5" component="h2">
            Option1
        </Typography>
        <br></br>
        <Typography variant="body2" component="p" color={'secondary'}>
          <ShowChartOutlinedIcon fontSize={'small'} color={'secondary'}/>
          2 of 3 people voted for this option
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </Card>
      <br></br>
      <Card className={classes.root} variant="outlined">
        <Typography variant="h5" component="h2">
            Option1
        </Typography>
        <br></br>
        <Typography variant="body2" component="p" color={'secondary'}>
          <ShowChartOutlinedIcon fontSize={'small'} color={'secondary'}/>
          2 of 3 people voted for this option
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </Card>
      </CardContent>
    </Card>
    </Container>
  );
}
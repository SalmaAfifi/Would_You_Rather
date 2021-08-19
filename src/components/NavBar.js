import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import AskQ from './AskQ'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid';
import { Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import {unSetAuthedUser} from '../actions/authedUser'
import LeaderBoardList from './LeaderBoardList';
import Unanswered from './Unanswered';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function NavBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function logout(e) {
    props.dispatch(unSetAuthedUser())
  }

  return (
    <Fragment className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Ask A Question" {...a11yProps(1)}/>
          <Tab label="Leader Board" {...a11yProps(2)} />
          <Grid container   direction="row" justifyContent="flex-end" alignItems="center">
            <Button color="inherit" onClick={(e)=>logout(e)}>Log Out</Button>
            <Avatar  src={props.img}
            className={classes.large} />
         </Grid>
        </Tabs>
      </AppBar>
      <Route path="/question/:id" component={Unanswered}/>  
      <TabPanel value={value} index={0}>
        <Dashboard/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AskQ/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LeaderBoardList />
      </TabPanel>
    </Fragment>
  );
}

function mapStateToProps({authedUser, users}) {

  const img = users[authedUser]['avatarURL']
  return{
    img,
    users
  }
}

export default connect(mapStateToProps)(NavBar)


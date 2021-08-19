import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid';
import { NavLink, Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {unSetAuthedUser} from '../actions/authedUser'




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
      <nav className={classes.root}>
      <AppBar position="static" >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <NavLink exact to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <Tab label="Home" {...a11yProps(0)}/>
          </NavLink>
          <NavLink exact to="/add" style={{ textDecoration: 'none', color: 'white' }} >
            <Tab label="Ask A Question" {...a11yProps(1)}/>
          </NavLink>
          <NavLink exact to="/leaderboard" style={{ textDecoration: 'none', color: 'white' }}>
            <Tab label="Leader Board" {...a11yProps(2)} />
          </NavLink>
          <Grid container   direction="row" justifyContent="flex-end" alignItems="center">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit" onClick={(e)=>logout(e)}>Log Out</Button>
            </Link>
            <Avatar  src={props.img}
            className={classes.large} />
         </Grid>
        </Tabs>
      </AppBar>
      </nav>
      

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


import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from './List';
import { connect } from 'react-redux'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 700,
  },
}));

function Dashboard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  
  return (
    <Container component="main" maxWidth="md" >
      <Grid container   direction="column" justifyContent="center" alignItems="stretch">
        <AppBar position="static" color="default" >
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
            >
            <Tab label="Unanswered Questions" {...a11yProps(0)} />
            <Tab label="Answered Questions" {...a11yProps(1)} />
            </Tabs>
        </AppBar>
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
        >
            <TabPanel value={value} index={0} dir={theme.direction} >
            <Grid item xs={12}>
                  <List qlist={props.unansweredQ} />
            </Grid>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction} >
                  <List qlist={props.answeredQ} />
            </TabPanel>
        </SwipeableViews>
      </Grid>
    </Container>
  );
}

function mapStateToProps({authedUser, questions}) {

const allQuestions = Object.values(questions)
const answeredQ = allQuestions.filter((question)=>
{
  const votes1 = question['optionOne']['votes']
  const votes2 = question['optionTwo']['votes']
  return votes1.includes(authedUser) || votes2.includes(authedUser)
})
const unansweredQ =  allQuestions.filter((question)=>(!answeredQ.includes(question)))
  answeredQ.sort((a,b)=>b.timestamp-a.timestamp)
  unansweredQ.sort((a,b)=>b.timestamp-a.timestamp)
 return {answeredQ, unansweredQ}
}

export default connect(mapStateToProps)(Dashboard)




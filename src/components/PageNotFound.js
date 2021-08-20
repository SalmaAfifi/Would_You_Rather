import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

export default function PageNotFound() {
  const classes = useStyles();

  return <div className={classes.root}>
      <br></br>
      <Typography variant="h3" align="center">
      404, Page Not Found :(
    </Typography>
      
      </div>;
}

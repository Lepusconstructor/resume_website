import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles({
  root: {
    width: "50%",

  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();


  return (
    <BottomNavigation className={classes.root}>

      <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
      <BottomNavigationAction label="Github" icon={<GitHubIcon />} onClick={() => "https://github.com/honeyyusuf"} />

    </BottomNavigation>
  );
}

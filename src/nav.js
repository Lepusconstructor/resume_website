import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Demo from "./Demo.js";
import Home from "./home";
const projects = [
  {
    id: 1,
    name: "TinyApp",
    desc: "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs",
    image: "https://github.com/honeyyusuf/tinyapp/blob/master/doc/login.png?raw=true",
    address: "https://github.com/honeyyusuf/tinyapp"


  },
  {
    id: 2,
    name: "Tweeter",
    desc: "Tweeter is a simple, single-page Twitter clone built using HTML, CSS, JS, jQuery and AJAX",
    image: "https://github.com/honeyyusuf/tweeter/blob/master/docs/mobileview2.png?raw=true",
    address: "https://github.com/honeyyusuf/tweeter"

  },
  {
    id: 3,
    name: "Scheduler",
    desc: "Scheduler is one page react app the allow users to book interviews",
    image: "https://github.com/honeyyusuf/scheduler/blob/master/docs/scheduler.png?raw=true",
    address: "https://github.com/honeyyusuf/scheduler"

  }
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
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
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: "#D9AFD9",
    // backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",



  },
  tabs: {
    backgroundColor: "black",
    "&:hover": {
      boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",
    }
  }

}
));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

      <AppBar position="static">
        <div className={classes.tabs}>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="Projects"  {...a11yProps(1)} />
            <Tab label="About" {...a11yProps(2)} />
          </Tabs>
        </div>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Home></Home>
      </TabPanel>
      <TabPanel value={value} index={1}>

        {projects.map((project) => {
          return <Demo project={project} />
        })}
      </TabPanel>
      <TabPanel value={value} index={2}>

      </TabPanel>
    </div>

  );
}

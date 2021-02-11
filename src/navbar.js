import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar"
import Demo from "./Demo.js";

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
const ElevatedTabs = () => {
  const [index, onChange] = useState(0);
  return (
    <React.Fragment>
      <AppBar position="static" >
        <Tabs
          variant={"fullWidth"}
          value={index}
          onChange={(e, val) => {
            console.log(val);
            onChange(val)
          }}
        >
          <Tab label="Home" />
          <Tab label="Projects" />
          <Tab label="About" />



          {/* <TabPanel value={index} index={0} page="Home"/>
       
        <TabPanel value={index} index={1} page="Projects"/>
        
    
        <TabPanel value={index} index={2} page="About"/> */}



        </Tabs>
      </AppBar>


      {index === 1 && (
        projects.map((project) => {
          return <Demo project={project} />
        }))}
    </React.Fragment>
  );
};


ElevatedTabs.getTheme = muiBaseTheme => ({
  MuiTabs: {
    root: {
      width: "100%",
      borderRadius: muiBaseTheme.spacing.unit,
      background: "#2a113bff",
      padding: 10,
      boxShadow: "14px 14px 80px rgba(34, 35, 58, 0.2)"
    },
    indicator: {
      height: "100%",
      borderRadius: muiBaseTheme.spacing.unit,
      boxShadow: "14px 14px 80px rgba(34, 35, 58, 0.2)"
    }
  },
  MuiTab: {
    root: {
      textTransform: "initial",
      margin: `0 ${muiBaseTheme.spacing.unit * 2}px`,
      minWidth: 0,
      [muiBaseTheme.breakpoints.up("md")]: {
        minWidth: 0
      }
    },
    label: {
      fontWeight: "normal",
      letterSpacing: 0.5,
      color: "#ffffff"
    },
    labelContainer: {
      paddingLeft: 10,
      paddingRight: 10
    }
  }
});
ElevatedTabs.metadata = {
  name: "Elevated Tabs",
  description: "implement custom theme with elevated tabs"
};
ElevatedTabs.codeSandbox = "https://codesandbox.io/s/13kjwkry7l";
// function TabPanel(props){
//   console.log(props);
//   return (<div>{props.value===props.index && (<h1>{props.page}</h1>)}</div>)
// };
export default ElevatedTabs;

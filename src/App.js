
import './App.css';
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Demo from "./Demo.js";
import Nav from "./navbar.js";




const projects = [
  {
    
    name:"TinyApp",
    desc:"TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs",
    image:"https://github.com/honeyyusuf/tinyapp/blob/master/doc/login.png?raw=true",
    address:"https://github.com/honeyyusuf/tinyapp"


  },
  {
    name:"Tweeter",
    desc:"Tweeter is a simple, single-page Twitter clone built using HTML, CSS, JS, jQuery and AJAX",
    image:"https://github.com/honeyyusuf/tweeter/blob/master/docs/mobileview2.png?raw=true",
    address:"https://github.com/honeyyusuf/tweeter"

  },
  {
    name:"Scheduler",
    desc:"Scheduler is one page react app the allow users to book interviews",
    image:"https://github.com/honeyyusuf/scheduler/blob/master/docs/scheduler.png?raw=true",
    address:"https://github.com/honeyyusuf/scheduler"

  }
];
const muiBaseTheme = createMuiTheme();

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true
});



function App() {
  
  return (
    <JssProvider generateClassName={generateClassName}>
      <Nav/>
      <MuiThemeProvider
        theme={createMuiTheme({
          typography: {
            useNextVariants: true
          },
          overrides: Demo.getTheme(muiBaseTheme)

        })}
      >  
        {
        projects.map((project)=>{
          return <Demo project={project}/>
        })
      }
        
      </MuiThemeProvider>
    </JssProvider>
  );
  
}


export default App;

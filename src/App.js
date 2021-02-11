
import './App.css';
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Demo from "./Demo.js";
import Nav from "./nav.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBot from "./bottomnav";




const muiBaseTheme = createMuiTheme();

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true
});



function App() {

  return (
    <JssProvider generateClassName={generateClassName}>

      <MuiThemeProvider
        theme={createMuiTheme({
          typography: {
            useNextVariants: true
          },
          overrides: Demo.getTheme(muiBaseTheme),

        })}>


        <Nav>

        </Nav>
        <NavBot>
        </NavBot>
      </MuiThemeProvider>

    </JssProvider>
  );
}


export default App;

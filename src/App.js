import logo from './logo.svg';
import './App.css';
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Demo from "./Demo.js";

// const faces = [
//   "http://i.pravatar.cc/300?img=1",
//   "http://i.pravatar.cc/300?img=2",
//   "http://i.pravatar.cc/300?img=3",
//   "http://i.pravatar.cc/300?img=4"
// ];

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
          overrides: Demo.getTheme(muiBaseTheme)
        })}
      >
        <Demo />
      </MuiThemeProvider>
    </JssProvider>
  );
}


export default App;

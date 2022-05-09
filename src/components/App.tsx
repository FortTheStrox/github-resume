// MODULES
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Routes,
  Route,
} from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import IconButton from "@mui/material/IconButton";
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// COMPONENTS
import About from './About';
import Skillset from './Skillset';
import Portfolio from './Portfolio';

// STYLING
import './../css/main.min.css';



type Props = {
  // none
}

type state = {
  dark : boolean,
}

class App extends React.Component<Props, state> {
  constructor(props: Props) {
    super(props);

    this.state = {
      dark: false
    };

    /*
      why we need to bind
      
      this.handleRefreshClick.bind(something) returns a new function, in which references to this will refer to something. This is a way of saving the current value of this, which is in scope during the call to the constructor, so that it can be used later when the function is called.

      If your functions don't require access to the state of your component, then sure, you don't need to bind them.

    */
    this.changeTheme = this.changeTheme.bind(this);
  };

  // changes state to dark
  changeTheme() {
    this.setState({ dark: !this.state.dark });
  }

  render() {
    return (
      <div className='App'>
        <div>
          <div className={'theme ' + (this.state.dark ? 'theme--dark' : 'theme--default')}>
            <div className='base'>
              <nav className='nav-bar'>
                <NavLink className='logo' to="/">Jared Erlien</NavLink>
                <ul className={'nav-links ' + (this.state.dark ? 'theme--dark' : 'theme--default')}>
                  <li>
                  <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "active-link" : undefined
                      }
                    > 
                      PORTFOLIO
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ABOUT"
                      className={({ isActive }) =>
                        isActive ? "active-link" : undefined
                      }
                    > 
                      ABOUT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/SKILLSET"
                      className={({ isActive }) =>
                        isActive ? "active-link" : undefined
                      }
                    > 
                      SKILLSET
                    </NavLink>
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    <IconButton
                      edge="end"
                      color="inherit"
                      aria-label="mode"
                      onClick={this.changeTheme}
                    >
                      {this.state.dark ? <Brightness3Icon /> : <Brightness7Icon />}
                    </IconButton>
                  </li>
                </ul>
              </nav>
              <div className='base-page'>
              <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/ABOUT" element={<About />} />
                <Route path="/SKILLSET" element={<Skillset />} />
                
                <Route
                  path="*"
                  element={
                    <main style={{ padding: "1rem" }}>
                      <p>There's nothing here!</p>
                    </main>
                  }
                />
              </Routes>
              </div>
              
              <footer>
                <div className='container'>
                  <span>
                    Made with React. © Copyright {(new Date().getFullYear())}.
                  </span>
                  <span>
                    |
                  </span>
                  <span className={'footer__social'}>
                    <SocialIcon url="https://github.com/FortTheStrox" style={{ height: 25, width: 25 }} />
                    <SocialIcon url="https://www.linkedin.com/in/jared-erlien-728a82106/" style={{ height: 25, width: 25 }} />
                  </span>
                </div>
                
              </footer>
              
            </div>
            
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;

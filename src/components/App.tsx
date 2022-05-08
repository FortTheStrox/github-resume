// MODULES
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Routes,
  Route,
} from "react-router-dom";

// COMPONENTS
import Header from './Header';
import Skillset from './Skillset';
import Projects from './Projects';

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
                <h3>{}</h3>
                <ul className={'nav-links ' + (this.state.dark ? 'theme--dark' : 'theme--default')}>
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "active-link" : undefined
                      }
                    > 
                      HOME
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
                    <NavLink
                      to="/PROJECTS"
                      className={({ isActive }) =>
                        isActive ? "active-link" : undefined
                      }
                    > 
                      PROJECTS
                    </NavLink>
                  </li>
                  <li><button onClick={this.changeTheme}>click me</button></li>
                </ul>
              </nav>
              <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/SKILLSET" element={<Skillset />} />
                <Route path="/PROJECTS" element={<Projects />} />
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
            
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;

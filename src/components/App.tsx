import { Button } from '@mui/material';
import './../css/main.min.css';

import React from 'react';
import Header from './Header';

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
    console.log(this.state.dark);
  }

  render() {
    return (
      <div className={'App ' + (this.state.dark ? 'theme--dark' : 'theme-default')}>
        <button onClick={this.changeTheme}>click me</button>
        <Header></Header>
      </div>
    );
  }
}

export default App;

import { setSyntheticLeadingComments } from 'typescript';
import './../css/main.min.css';

import React, { useState } from 'react';

type Props = {
    // none
  }
  
  type state = {
    dark : boolean,
  }


const Nav = (props: Props) => {
    const [themeState, changeTheme] = useState(false);

    return (

                <nav className={'App' + (themeState ? 'theme--dark' : 'theme-default')}>
                    <ul className="nav_links">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#" title="about">ABOUT</a></li>
                        <li><a href="#" title="skillset">SKILLSET</a></li>
                        <li><a href="#" title="resume">RESUME</a></li>
                        <button onClick={() => {
                            changeTheme(!themeState)
                            console.log(themeState)
                        }
                            }>click me</button>
                    </ul>
                </nav>
    );
}

export default Nav;

// constructor(props: Props) {
//     super(props);

//     this.state = {
//       dark: false
//     };5s

//     /*
//       why we need to bind
      
//       this.handleRefreshClick.bind(something) returns a new function, in which references to this will refer to something. This is a way of saving the current value of this, which is in scope during the call to the constructor, so that it can be used later when the function is called.

//       If your functions don't require access to the state of your component, then sure, you don't need to bind them.

//     */
//     this.changeTheme = this.changeTheme.bind(this);
// };
// return (
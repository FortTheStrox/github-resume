import './../css/main.min.css';

import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";


import { SocialIcon } from 'react-social-icons';
import IconButton from "@mui/material/IconButton";
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { NavLink } from 'react-router-dom';

// change this if you want to deploy 
// "" or "/github-resume"
const deploy_str: string = "/github-resume";

const Header = () => {

    return (
        // elevation removes box shadow from appbar
        <AppBar 
            position='static' 
            color='transparent' 
            elevation={0}
        >
            <Toolbar disableGutters>
            <NavLink className='logo' to={deploy_str + "/"}>Jared Erlien</NavLink>
            <ul className='nav-links'>
                <li>
                    <NavLink to={deploy_str + "/" } className={({ isActive })=>
                        isActive ? "active-link" : undefined
                        }
                        >
                        PORTFOLIO
                    </NavLink>
                </li>
                <li>
                    <NavLink to={deploy_str + "/ABOUT" } className={({ isActive })=>
                        isActive ? "active-link" : undefined
                        }
                        >
                        ABOUT
                    </NavLink>
                </li>
                <li>
                    <NavLink to={deploy_str + "/SKILLSET" } className={({ isActive })=>
                        isActive ? "active-link" : undefined
                        }
                        >
                        SKILLSET
                    </NavLink>
                </li>
                <li>

                </li>
                <li>
                    <IconButton edge="end" color="inherit" aria-label="mode">
                        <Brightness3Icon />

                    </IconButton>
                </li>
            </ul>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
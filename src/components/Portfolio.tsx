import React, { Component } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import ceTest from './../img/portfolio/ce.png';

import './../css/main.min.css';
import { ModuleReference } from 'typescript';

type Props = {
  works: {
    id: number, 
    title: string, 
    tags: string[], 
    desc: string, 
    class: string, 
  }[]
  hobby: {
    id: number, 
    title: string, 
    tags: string[], 
    desc: string, 
    img: ModuleReference, 
    class: string, 
    path: string
  }[]
}

type state = {
  //
}


function handleChange() {

}

export default class Portfolio extends React.Component<Props,state> {
  constructor(props: Props) {
    super(props);

    props.works = [
      {
        id: 0,
        title: 'User Interface for Undisclosed Product',
        tags: ['Angular'],
        desc: 'Providing a intuitive user interface for team\'s main product',
        class: 'tes',
      }
    ]
    // props.hobby = [
    //   {
    //     'id': 1,
    //     'title': 'External Cheat Trainer',
    //     'tags': ['Cheat Engine', 'Visual Code', 'C++'],
    //     'desc': 'Providing a easy to use trainer with provided keybinds',
    //     'img': ceTest,
    //     'class': 'hobTest',
    //     'path': 'placeholder'
    //   }
    // ]
  };
  render() {
    return (
      <div className='Portfolio'>
        <div className='title'>Software Engineer, Security Analyst, Adrenaline Seeker</div>
        <div className='intro'>
          <p>Hello! I'm a software engineer who likes security.
            <br />
            I'm currently working on protecting systems
            <br />
            at an undisclosed company!

          </p>
        </div>
        <div className='body'>
          <p>filter:</p>
        <ToggleButtonGroup 
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value='work'>
            Work
          </ToggleButton>
          <ToggleButton value='hobby'>
            Hobby
          </ToggleButton>
        </ToggleButtonGroup>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia>

            </CardMedia>
            <CardContent>

            </CardContent>
            <Typography>
              test
            </Typography>
          </CardActionArea>

        </Card>

        </div>
      </div>
    );
  }
    
}
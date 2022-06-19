import * as React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import ceTest from './../img/portfolio/ce.png';

import './../css/main.min.css';


type Props = {
  //
}

type state = {
  filter : string
}



// Define Card attributes here 
const works = [
  {
    id: 0,
    title: 'User Interface for Undisclosed Product',
    tags: ['Angular'],
    desc: 'Providing a intuitive user interface for team\'s main product',
    class: 'tes',
  },
  {
    id: 2,
    title: 'User Interface for Undisclosed Product',
    tags: ['Angular'],
    desc: 'Providing a intuitive user interface for team\'s main product',
    class: 'tes',
  }
]

const hobbies = [
  {
    'id': 1,
    'title': 'External Cheat Trainer',
    'tags': ['Cheat Engine', 'Visual Code', 'C++'],
    'desc': 'Providing a easy to use trainer with provided keybinds',
    'img': ceTest,
    'class': 'hobTest',
    'path': 'placeholder'
  }
]

const Portfolio = () => {
  const [filter, setFilter] = React.useState('work');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newFilter: string,
    ) => {
      console.log(filter);
      setFilter(newFilter);
      
    }
  

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

      {/* Section for Card Filter Toggle */}
      <div className='body'>
        <p>filter:</p>
      <ToggleButtonGroup 
        value={filter}
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

      {/* Cards */}
      
      </div>
    </div>
  );
}


export default Portfolio;
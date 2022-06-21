import * as React from 'react';
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';

import Project from './Project';

import ce from './../img/portfolio/ce.png';
import int_ce from './../img/portfolio/int_ce.png';
import devops from './../img/portfolio/devops.jpg';
import frontend from './../img/portfolio/frontend.jpg';
import ctf from './../img/portfolio/ctf.png';


import './../css/main.min.css';

// Define Card attributes here 
const projects = [
  {
    id: 0,
    category: 'work',
    title: 'Installation Wizard full-stack Development',
    tags: ['Angular'],
    desc: 'Providing a intuitive user interface for team\'s main product',
    image: frontend,
    altimg: 'Front end example',
    class: 'tes',
  },
  {
    id: 1,
    category: 'hobby',
    title: 'External Cheat Trainer',
    tags: ['Cheat Engine', 'Visual Code', 'C++'],
    desc: 'Provide trainer table that interacts w/ game process memory',
    image: ce,
    altimg: 'Front end example',
    class: 'hobTest',
    path: 'placeholder'
  },
  {
    id: 2,
    category: 'work',
    title: 'DevOps Automation',
    tags: ['Bash', 'Jenkins', 'Artifactory'],
    desc: 'Created scripts to automated manual processes to reduce error and work hours',
    image: devops,
    altimg: 'DevOps automation',
    class: 'tes',
  },
  {
    id: 4,
    category: 'hobby',
    title: 'Internal Cheat Trainer',
    tags: ['Cheat Engine', 'Visual Code', 'C++'],
    desc: 'Trainer that\'s injected into game process, rather than modifiying memory',
    image: int_ce,
    altimg: 'Internal Cheat Trainer',
    class: 'hobTest',
    path: 'placeholder'
  },
  {
    id: 5,
    category: 'hobby',
    title: 'Hacking Competitions',
    tags: ['HackTheBox', 'NahamSec', 'CTF'],
    desc: 'Participated in various CTFs as well as crackme challenges for Reverse Engineering',
    image: ctf,
    altimg: 'Hacking example',
    class: 'hobTest',
    path: 'placeholder'
  },
]

const Portfolio = () => {

  const [filter, setFilter] = React.useState('work');

  // set initial useState to work-filtered projects
  let JSXProjects: JSX.Element[] = [];
  let filteredProjects = projects.filter(project => project.category == filter);
  filteredProjects.forEach(project => JSXProjects.push(<Grid item xs={6}><Project key={project.id} {...project}/></Grid>)) 

  
  const [shownProjects, setProjects] = React.useState(JSXProjects);

  // handles change in toggle filter
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newFilter: string | null,
    ) => {
      // prevent filter from being null bug 
      if (newFilter !== null) {
        
        setFilter(newFilter);
        console.log(filter);
        let JSXProjects: JSX.Element[] = [];
        let filteredProjects = projects.filter(project => project.category !== filter);
        filteredProjects.forEach(project => {
          // console.log(project.id);
          JSXProjects.push(<Grid item xs={6}><Project key={project.id} {...project}/></Grid>)
        }) 
        setProjects(JSXProjects);
      }
    }
  
  
  

  return (
    <div className='Portfolio'>
      <div className='info'>
        <div className='title'>Software Engineer, Security Analyst, Adrenaline Seeker</div>
        <div className='intro'>
          <p>Hello! I'm a software engineer who likes security.
            <br />
            I'm currently working on protecting systems
            <br />
            at an undisclosed company!

          </p>
        </div>
      </div>
      

      {/* Section for Card Filter Toggle */}
      <div className='base-page'>
      <div className='project-area'>
        <div className='filter-button'>
        <p>filter:   </p>
      <ToggleButtonGroup 
        value={filter}
        exclusive={true}
        onChange={handleChange}
      >
        <ToggleButton className='t-button' value='work'>
          Work
        </ToggleButton>
        <ToggleButton className='t-button' value='hobby'>
          Hobby
        </ToggleButton>
      </ToggleButtonGroup>
        </div>
      

      {/* Cards */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {shownProjects}
      </Grid>
      </div>
      </div>
      
    </div>
  );
}


export default Portfolio;


// {
//   <Project {...projects.filter(project => project.category == filter)}/> 
//  }
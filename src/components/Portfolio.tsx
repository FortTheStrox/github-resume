import * as React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import Project from './Project';

import ceTest from './../img/portfolio/ce.png';

import './../css/main.min.css';

// Define Card attributes here 
const projects = [
  {
    id: 0,
    category: 'work',
    title: 'Installation Wizard full-stack Development',
    tags: ['Angular'],
    desc: 'Providing a intuitive user interface for team\'s main product',
    class: 'tes',
  },
  {
    id: 1,
    category: 'hobby',
    title: 'External Cheat Trainer',
    tags: ['Cheat Engine', 'Visual Code', 'C++'],
    desc: 'Providing a loud version of a cheat trainer',
    class: 'hobTest',
    path: 'placeholder'
  },
  {
    id: 2,
    category: 'work',
    title: 'DevOps Automation',
    tags: ['Bash', 'Jenkins', 'Artifactory'],
    desc: 'Created scripts to automated manual processes to reduce error and work hours',
    class: 'tes',
  },
  {
    id: 4,
    category: 'hobby',
    title: 'Internal Cheat Trainer',
    tags: ['Cheat Engine', 'Visual Code', 'C++'],
    desc: 'Providing a silent version of a cheat trainer',
    class: 'hobTest',
    path: 'placeholder'
  },
]

const Portfolio = () => {

  const [filter, setFilter] = React.useState('work');

  // set initial useState to work-filtered projects
  let JSXProjects: JSX.Element[] = [];
  let filteredProjects = projects.filter(project => project.category == filter);
  filteredProjects.forEach(project => JSXProjects.push(<Project key={project.id} {...project}/>)) 

  
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
          JSXProjects.push(<Project key={project.id} {...project}/>)
        }) 
        setProjects(JSXProjects);
      }
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
        exclusive={true}
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
      {shownProjects}
      </div>
    </div>
  );
}


export default Portfolio;


// {
//   <Project {...projects.filter(project => project.category == filter)}/> 
//  }
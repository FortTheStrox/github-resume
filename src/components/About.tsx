import collage from './../img/collage.jpg';

import './../css/main.min.css';


const About = () => {
    return (
      <div className='about'>
        <header className='landing'>
          <div className='firstRow'>
            <div className='picture'>
              <img src={collage} />
            </div>
            <div className='quote'>
            <h1>Passion in</h1>
              <h1>Coding</h1>
              <h1>Passion in</h1>
              <h1>Security</h1>
              <h1>Passion in</h1>
              <h1>Learning</h1>
            </div>
          </div>
          <div className='secondRow'>
            <div>
              <h2 className='tagline'>I'm Jared Erlien, I'm a Cyber Security Analyst leveraging my experience as a Software Engineer to pursue my passion in Application Security and all things Security related! 🐱‍💻</h2>
            </div>
          </div>
        </header>
        
      </div>
    );
}

export default About;
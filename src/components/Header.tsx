import './../css/main.min.css';
import Nav from './Nav';


const Header = () => {
    return (
      <div className='header'>
        <header className='landing'>
            <Nav></Nav>
            <h1>Test</h1>
            <h2 className='tagline'>I'm Jared Erlien, I'm a Cyber Security Analyst leveraging my experience as a Software Engineer to pursue my passion in Application Security and all things Security related! 🐱‍💻</h2>
            <h3>Test</h3>
        </header>
      </div>
    );
}

export default Header;
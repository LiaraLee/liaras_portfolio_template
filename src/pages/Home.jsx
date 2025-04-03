import { NavLink } from "react-router-dom";
import Stars from '../assets/Green.jpg'

const fullName = 'LIARA LEE TITE';
const personalQuote = 'Creative Full Stack Developer and aspiring Video Game Developer';
const professionalSummary = 'I am a Full Stack Developer with a passion for art, video games, and coding. I have experience working with a variety of technologies and programming languages such as HTML, CSS, JavaScript, Python, React, Express, and MongoDb. I am always looking to learn new things and improve my skills as well as myself as a person. I am currently working on expanding my knowledge of video game development and hope to one day to develop my own game based on my childhood growing up in a cult.';

const Home = () => {
  return (
    <main className="home-container">
      <section className="home-hero home-subsection">
        <h1 className="text-4xl mb-2">HELLO, I AM {fullName}</h1>
        <p className="subsection-paragraph">{personalQuote}</p>
        <NavLink to="/contact">
        Contact Me
        </NavLink>
        {/* Replace the src with your own placeholder and change the alt to match the description */}
        <img className="hero-background" src={Stars} alt="Dark green Background with tiny white stars" />
      </section>
      <section className="overview home-subsection">
        <h3 className="subsection-intro-header">Introduction</h3>
        <h2 className="subsection-big-header">Overview.</h2>
        <p className="subsection-paragraph">{professionalSummary}</p>
        <NavLink to="/about">
        Learn More About Me
        </NavLink>
      </section>
      <section className="projects home-subsection">
        <h3 className="subsection-intro-header">My Works</h3>
        <h2 className="subsection-big-header">Projects.</h2>
        <p className="subsection-paragraph">I have worked on multiple projects that showcase not only my ability to work with multiple coding languages but also express my creativity and the desires of my clients.  If you are interested in my work click on the link below to go to the project page. Each project is briefly described and includes links to code repositories that showcase my ability to tackle challenging problems.</p>
        <NavLink to="/projects">
        View Projects
        </NavLink>
      </section>
    </main>
  )
}

export default Home
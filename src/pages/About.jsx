import { NavLink } from 'react-router-dom';
import LiaraLee from '../assets/LiaraLee.jpg';

// Replace these variables with your information
const firstName = 'Liara Lee Tite';
const jobTitle = 'Aspiring Full Stack Developer, Current Door Dash Driver and student.';
const company = 'Door Dash, Freelance';
const mainDuty = 'Currently I am a door dash driver who develops websites and games in my spare time.';
const jobLocation = 'I am currently located in Palmdale California, but I am open to relocating for the right opportunity.';
const briefJobDescription = 'As I am currently a student, I am learning the fundamentals of web development and game development. I am currently working on a few projects that I am really enjoying. If you would like to see my work please check them out on my Projects page.';
const careerObjective = 'I would love to not only learn and grow as a developer but to also help individuals achieve their goals and dreams. I am currently looking for a job that will help do just that. I am open to any opportunity that will help me grow and learn.';
const personalLife = 'I am a creative, and anything I can do to be creative, grow and work with others I am all for. I love to play video games, paint, build and read. Coding is an exciting and ever expanding way to explore and connect in the digital creative world. I am the type of person who gets very invested in the creative process of something and will learn anything to expand that creativity.';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          <img className='headshot' src={LiaraLee} alt="Liara Lee Headshot" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} working for, {company} on {mainDuty} located in, {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;
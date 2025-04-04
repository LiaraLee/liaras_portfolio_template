import { FaGithub } from "react-icons/fa6";

const myProjects = [
  {
    title: 'Capstone',
    description: 'Food Delivery',
    repositoryLink: 'https://github.com/LiaraLee/Capstone.git',
  },
  {
    title: 'Liara Lee Library',
    description: 'A library of my favorite books and where to get them.',
    repositoryLink: 'https://github.com/LiaraLee/Liara-Lee-s-Library.git',
  },
  {
    title: 'API Library',
    description: 'A library of books from an API that I worked on with my wonderful team.',
    repositoryLink: 'https://github.com/zinaldesai/p2t_domproject.git',
  },
  {
    title: 'Weather App',
    description: 'A weather app that tells you the weather based on zip code, location, and coordinates.',
    repositoryLink: 'https://github.com/LiaraLee/Weather-App-Template.git',
  },
  {
    title: 'FallOut Email',
    description: 'An email template created to look like a terminal in the FallOut video game series.',
    repositoryLink: 'https://github.com/LiaraLee/CSSProject.git',
  },
  {
    title: 'HTML Team sign up sheet',
    description: 'A sign up sheet for the wonderful Study Room 2 group!',
    repositoryLink: 'https://github.com/LiaraLee/Path2Tech_HTML_Project.git',
  },
  {
    title: 'Terminal ToDo List',
    description: 'A ToDO list in your terminal, add, delete and verify all tasks for your day.',
    repositoryLink: 'https://github.com/LiaraLee/JS_PROJECT.git',
  },
];
const Projects = () => {
  return (
    <main className="projects-container">
      {myProjects.map((project) => (
        <section key={project.title} className="project-item border border-2 rounded-lg">
          <section className="project-image-container">
            <FaGithub className="project-icon" />
          </section>
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-lg">{project.description}</p>
          <p>Check out the link to the project repository <a href={project.repositoryLink} target="_blank">Here</a> </p>

        </section>
      ))}
    </main>
  )
}

export default Projects
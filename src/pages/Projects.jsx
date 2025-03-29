import { FaGithub } from "react-icons/fa6";

// Replace the projects inside the myProjects array with your own projects. Right now the array has sample data. You can add as many projects as you want. Each project should be an object with the following
// properties:
// - title: The title of the project
// - description: A description of the project
// - repositoryLink: A link to the GitHub repository of the project
// You can also add more properties if you want to display more information about your projects.
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
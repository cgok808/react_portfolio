import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { HiLink } from "react-icons/hi";
import theimage from "../assets/library.png";

const ProjectCard = ({
  id,
  img,
  title,
  subtitle,
  description,
  GHLink,
  LLink,
}) => {
  return (
    <li key={id} className='mb-36'>
      <div className='project__wrapper'>
        <img
          src={require("../assets/" + img + ".png")}
          alt='my project'
          className='project__img'
        />
        <div className='project__wrapper--bg'></div>
        <div className='project__description'>
          <h3 className='project__description--title font-bold'>{title}</h3>
          <h4 className='project__description--sub-title font-semibold'>
            {subtitle}
          </h4>
          <p className='project__description--para'>{description}</p>
          <div className='project__description--links flex'>
            <a href={GHLink}>
              <AiOutlineGithub className='text-2xl mr-3' />
            </a>
            <a href={LLink}>
              <HiLink className='text-2xl' />
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      img: "library",
      title: "Library",
      subtitle: "React | Javascript",
      description:
        "A responsive React e-commerce application that displays data about popular and recommended books for sale. Has full functionality and features of an e-commerce app. Utilizes a mock API and shows demonstrations of UX design with loading states.",
      GHLink: "https://github.com/cgok808/Library-Project-REACT",
      LLink: "https://library-react-cgok.netlify.app/",
    },
    {
      id: 2,
      img: "crypto-min",
      title: "Cryptocurrency Tracker",
      subtitle:
        " React | JavaScript | Firebase | Material UI | Chart.js | Context API",
      description:
        "A responsive Cryptocurrencies tracker application. Has many features including login functioinality, adding any cryptocurrency of your choice to a watchlist, and much more. Utilizes Coin Gecko API for data shown.",
      GHLink: "https://github.com/cgok808/CryptoTracker-v2",
      LLink: "https://cryptotracker-chay.netlify.app/",
    },
    {
      id: 3,
      img: "e-port",
      title: "E-Portfolio for Client",
      subtitle: "HTML | CSS | JavaScript",
      description:
        "Responsive and multi-platform E-Portfolio built for a client using semantic HTML5 and CSS3 (+BEM) best practices. Personal information and projects were replaced with my own information to maintain privacy.",
      GHLink: "https://github.com/cgok808/E-Portfolio",
      LLink: "https://cgok808.github.io/E-Portfolio/",
    },
  ];

  return (
    <section id='projects'>
      <div className='container my-12 flex justify-center items-center'>
        <div className='w-full max-w-5xl my-auto mx-0 py-0 px-3'>
          <h1 className='text-center text-5xl mb-14 font-bold'>
            Here are some of my <span className='text-cOrange'>projects</span>
          </h1>
          <ul>
            {projectsList.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  img={project.img}
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;

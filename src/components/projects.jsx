import React from 'react';
import '../index.css';
import ToggleProject from './toggleProject.jsx';
import ToggleCode from './toggleCode.jsx';
import VideoPlayer from './videoPlayer.jsx';
import Video from '../assets/video.mp4'
import Slider from './slider.jsx';

const landingPage = [
  {
    title: "Project Overview",
    description:
      "The PolicyCON landing page was developed as the main entry point for a platform that connects policy analysts with subscribers, helping them make informed decisions. The primary goal was to present information in a structured, user-friendly way while showcasing key sections like 'Popular Analyst Areas' and 'Featured Analysts.' Ensuring clarity and engagement was essential to enhance user interaction.",
  },
  {
    title: "Technologies Used",
    description:
      "Languages: React, TypeScript\nStyling: Tailwind CSS\nDesign & Prototyping: Figma\nVersion Control: Git, GitHub\nDesign & User Experience (UX): The design process started with Figma, where we mapped out the layout to ensure a clean and intuitive user experience. The main objective was to highlight important areas, such as Popular Analyst Areas and Featured Analysts, without overwhelming the user. Additionally, the page was built with responsive design in mind, making it adaptable to smaller screens like phones and tablets, ensuring the platform is accessible across all devices.",
  },
  {
    title: "Development Process",
    description:
      "Development was highly collaborative. I worked closely with the frontend team, providing design feedback and iterating on the visuals to improve clarity and usability. We followed Agile methodology throughout the process to ensure continuous improvements and quick issue resolution. Git and GitHub were used for version control, with frequent code pushes and peer reviews to maintain high-quality code and minimize bugs.",
  },
  {
    title: "Mobile Responsiveness",
    description:
      "We focused on making the landing page fully responsive. This involved adapting the layout to mobile and tablet screen sizes, ensuring that the user experience remained seamless and intuitive, regardless of the device.",
  },
  {
    title: "Outcomes & Learnings",
    description:
      "The project successfully met its goals of providing a structured, visually appealing landing page. The team was able to collaborate effectively using Agile practices, and the end product showcased a polished, responsive design. I gained valuable experience working with TypeScript and React, as well as improved my skills in design feedback and collaboration.",
  },
];

const Projects = () => (
  <div id='projects' className='flex flex-col items-center justify-center h-auto xs:mt-[5rem] lg:mt-0'>

    <h3 className='mb-[8rem] font-bold text-myBlack lg:text-5xl md:text-6xl xs:text-3xl lg:mt-0 xs:mt-[9rem]'>
      My Projects
    </h3>

    <div className='mb-6'>
      <h2 className='text-3xl text-myBlack font-bold text-right pb-4'>
        PolicyCON Landing Page
      </h2>
      <h3 className='text-myBlack text-center font-bold text-lg mb-10'>
        React | TypeScript | Tailwind
      </h3>
    </div>

    <VideoPlayer src={Video} />
    <Slider slides={landingPage} />
    <ToggleCode />

    <div className='mb-6'>
      <h2 className='text-3xl text-white font-bold text-right pb-4'>
        PolicyCON Landing Page
      </h2>
      <h3 className='text-white text-center font-bold text-lg mb-10'>
        React | TypeScript | Tailwind
      </h3>
    </div>

    <VideoPlayer src={Video} />
    <Slider slides={landingPage} />
    <ToggleCode />

  </div>
);

export default Projects;

import React ,{useState} from "react";
import hikr from '../assets/android-chrome-192x192.png'
import projectCritter from '../assets/Screenshot 2023-06-12 175939.png'
import parkify from '../assets/Screenshot 2023-06-12 175727.png'

const Projects= () =>{

    const projects = [
        {
          id: 1,
          name: "HIKR",
          image: hikr,
          link1: "https://github.com/bsmisson/HikR",
          link2: "https://bsmisson.github.io/HikR/",
        },
        {
          id: 2,
          name: "PARKIFY",
          image: parkify,
          link1: "https://github.com/BrianLucy/Georgia-on-your-mind",
          link2: "https://parkify.herokuapp.com/",
        },
        {
            id: 3,
            name: "ProjectCritter",
            image: projectCritter,
            link1: "https://github.com/BJThompson12/projeCritter",
            link2: "https://projecritter.herokuapp.com/",
          },
      ];
    
      const [activeProject, setActiveProject] = useState(null);
    
      const handleProjectClick = (projectId) => {
        setActiveProject(projectId === activeProject ? null : projectId);
      };
    
      return (
        <div>
        <h1>projects</h1>
        <div id="work" className="bg-indigo-200 flex justify-center items-center">
          {projects.map((project) => (
            <div key={project.id} onClick={() => handleProjectClick(project.id)}>
              <img src={project.image} alt={project.name} className="p-4 " />
              {activeProject === project.id && (
                <div>
                  <a href={project.link1}>Github repository</a>
                  <a href={project.link2}>Deployed link</a>
                </div>
              )}
            </div>
          ))}
        </div>
        </div>
      );
    };

export default Projects;
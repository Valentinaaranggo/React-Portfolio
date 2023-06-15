import React, { useState } from "react";
import hikr from '../assets/android-chrome-192x192.png'
import projectCritter from '../assets/Screenshot 2023-06-12 175939.png'
import parkify from '../assets/Screenshot 2023-06-12 175727.png'

const Projects = () => {
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
      name: "ProjectCritter",
      image: parkify,
      link1: "https://github.com/BJThompson12/projeCritter",
      link2: "https://projecritter.herokuapp.com/",
    },
    {
      id: 3,
      name: "Parkify",
      image: projectCritter,
      link1: "https://github.com/BrianLucy/Georgia-on-your-mind",
      link2: "https://parkify.herokuapp.com/",
    },
  ];

  const [hover, setHover] = useState(null);

  return (

    <div className="bg-slate-100 pt-36"id="work">
      <div className="text-center p-4 text-7xl headerFont">Projects </div>
    <div className="flex flex-row flex-wrap justify-center items-center ">
      {projects.map((project)=> (
         <ul>
         <div className="relative headerFont text-3xl" key={project.id}>
           <h1 className="relative headerFont text-center p-3">{project.name}</h1>
           <div className="p-4" onMouseEnter={()=> setHover(project.id)} onMouseLeave={() => setHover(null)}>
           <img className='w-[240px] h-[240px]  rounded-lg  transition ease-in-out delay-150 hover:opacity-75' src={project.image} alt={project.name}/>
           {hover === project.id && (
                  <div className="absolute inset-0 flex flex-col justify-center items-center opacity-100 transition-opacity duration-300">
                    <div className="pt-10">
                    <a href={project.link1} className=" text-center p-2 rounded-md mx-2 opacity-100 bg-black bg-opacity-50 text-slate-100">
                      Github
                    </a>
                    </div>
                    <div className="pt-8">
                    <a href={project.link2} className="text-center p-2 rounded-md mx-2 bg-black bg-opacity-50 text-slate-100">
                      Application
                    </a>
                    </div>
                  </div>
                  )}
         </div>
         </div>
       </ul>
 
      ))}
     
    </div>
   </div>
    // <div id="work" className="pt-48">
    //   <h1 className="text-center text-5xl font-bold text-black pb-5">Projects</h1>
    //   <div className="bg-slate-100 flex justify-center items-center">
    //     {projects.map((project) => (
    //       <div
    //         key={project.id}
    //         className="p-4 relative cursor-pointer hover:opacity-100"
    //         on={() => setActiveProject(project.id)}
    //         onMouseLeave={() => setActiveProject(null)}
    //       >
    //         <img
    //           src={project.image}
    //           alt={project.name}
    //           className="w-50 h-50"
    //         />
    //         {activeProject === project.id && (
    //           <div className="absolute inset-0 flex items-center bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100">
    //             <div className="text-white flex flex-col pl-10">
    //               <div className="text-center font-semibold">{project.name}</div>
    //               <a
    //                 href={project.link1}
    //                 className="text-lg font-semibold text-center underline mb-2"
    //               >
    //                 Github repository
    //               </a>
    //               <a
    //                 href={project.link2}
    //                 className="text-lg font-semibold text-center underline"
    //               >
    //                 Deployed link
    //               </a>
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Projects;
import React from "react";
import valentinaImage from '../assets/valentina.png'

const Home = () => {
  return (
    <div id="home" className="bg-slate-100 relative">
      <div className="flex flex-row justify-center items-center h-screen">
        <div className="flex flex-col lg:flex-row justify-center items-center"> 
        <div className="text-center w-1/2">
          <h1 className="text-3xl headerFont md:text-3xl lg:text-8xl font-bold text-black pb-3">Hello.</h1> 
          <h1 className="text-3xl headerFont md:text-3xl lg:text-4xl font-bold text-black pb-3">My name is Valentina Arango.</h1>
          <h1 className="text-3xl headerFont  md:text-3xl lg:text-5xl font-bold text-black pb-3">Full Stack Developer.</h1> 
          <div>
          <p className="text-black headerFont ">an aspiring software engineer currently pursuing a BS in Computer Science at Georgia State University.</p>
          </div>
        </div>
        <div className="p-6 lg:p-10">
        <img
            src={valentinaImage}
            alt="Valentina Arango"
            className="w-[150px] h-auto rounded-xl md:w-[250px] shadow-[0.4rem_0.4rem_#94a3b8]"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

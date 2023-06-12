import React from "react";
import valentinaImage from '../assets/valentina.png'

const Home = () => {
  return (
    <div id="home" className="bg-indigo-200 text-white relative">
    <div className="flex justify-center items-center h-screen bg-indigo-200">
      <div className="flex flex-col items-center">
        <img
          src={valentinaImage}
          alt="Valentina Arango"
          className="w-48 h-auto rounded-full mb-4"
        />
        <h1 className="text-5xl font-bold text-black pb-3">Hi I'm Valentina Arango,</h1>
        <p className="text-center  text-black w-2/4"> an aspiring software engineer currently pursuing a BS in Computer Science at Georgia State University. In addition to my academic pursuits, I am also completing a Full Stack Web Development Bootcamp at the Georgia Institute of Technology. Alongside my educational background, I possess strong leadership, problem-solving, and communication skills. I have gained extensive experience working with a variety of technologies, including HTML, CSS, JavaScript, Node.js, Express.js, SQL, MongoDB, React, GraphQL, Apollo, and Java.
        My ultimate goal is to leverage my skills and knowledge to contribute value to any workplace that appreciates dedication and hard work.Let's work together to bring your ideas to life and make a difference through technology.</p>
      </div>
    </div>
  </div>
  );
};

export default Home;

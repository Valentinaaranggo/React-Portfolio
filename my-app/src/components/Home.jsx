import React from "react";
import valentinaImage from '../'

const Home = () => {
  return (
    <div id="home" className="bg-indigo-200 text-white py-32 relative">
      <div className="flex justify-center items-center h-screen bg-indigo-200">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-4">Valentina Arango</h1>
          <img
            src={valentinaImage}
            alt="Valentina Arango"
            className="w-32 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

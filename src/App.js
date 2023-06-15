import logo from './logo.svg'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';


import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <div className='bg-slate-100'>
        <Home/>
        <Projects/>
        <Contact/>
      </div>
     <Footer/>
     </>

  );
}

export default App;

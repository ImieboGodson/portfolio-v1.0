import './App.scss';
import LayoutWrapper from './pages/layoutWrapper/LayoutWrapper';
import About from './pages/about/About';
import {
  Routes,
  Route
} from "react-router-dom";
import Project from './pages/project/Project';
import Header from './components/header/Header';
import Preloader from './components/preloader/Preloader';
import { useEffect, useState } from 'react';
import { ProjectsArray } from './data';

function App() {

  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)



  useEffect(() => {

      setLoading(true);

      let progressPercentage = 0;
      
      for(let i = 0; i <= 1000; i++) {
          progressPercentage = Math.floor((i / 1000) * 100);

          console.log('Progress: ', progressPercentage);

          setProgress(progressPercentage);
      }

      console.log('Final Progress: ', progressPercentage);

      // setTimeout(() => {
      //     setLoading(false)
      // }, 5000)
  }, []);



  return (
    <div className="app">

              {
                !loading 
                ?
                (
                  <>
                    <Header />
                    <Routes>
                      <Route path='/' element={<LayoutWrapper />}/>
                      <Route path='/about' element={<About />}/>
                      <Route path='/projects/:name' element={<Project />}/>
                    </Routes>
                  </>
                )
                :
                (
                    <Preloader progress={progress}/>
                )
              }
      
    </div>
  );
}

export default App;

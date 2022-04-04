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

function App() {

  const [loading, setLoading] = useState(true);



  useEffect(() => {

      setLoading(true);

      setTimeout(() => {
          setLoading(false)
      }, 5000);

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
                  <Preloader />
                )
              }
      
    </div>
  );
};

export default App;

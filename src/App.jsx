import './App.scss';
import LayoutWrapper from './pages/layoutWrapper/LayoutWrapper';
import About from './pages/about/About';
import {
  Routes,
  Route
} from "react-router-dom";
import Project from './pages/project/Project';
import Header from './components/header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<LayoutWrapper />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects/:name' element={<Project />}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.scss';
import LayoutWrapper from './pages/layoutWrapper/LayoutWrapper';
import About from './pages/about/About';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<LayoutWrapper />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;

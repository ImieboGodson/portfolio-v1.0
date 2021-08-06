import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="app">
      <Header />
      <section className='section'>
        <Hero />
        <Projects />
      </section>
    </div>
  );
}

export default App;

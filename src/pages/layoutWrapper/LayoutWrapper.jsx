import './layoutWrapper.scss';
import Header from '../../components/header/Header';
import Hero from '../../sections/hero/Hero';
import Projects from '../../sections/projects/Projects'
import Contact from '../../sections/contact/Contact';
import AboutMe from '../../sections/aboutMe/AboutMe';

const LayoutWrapper = () => {
    return (
        <div className='layoutWrapper'>
            <Header />
            <Hero />
            <AboutMe />
            <Projects />
            <Contact />
        </div>
    )
}

export default LayoutWrapper;

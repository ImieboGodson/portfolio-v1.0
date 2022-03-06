import './layoutWrapper.scss';
import Hero from '../../sections/hero/Hero';
import Projects from '../../sections/projects/Projects'
import Contact from '../../sections/contact/Contact';
import AboutMe from '../../sections/aboutMe/AboutMe';
import Footer from '../../components/footer/Footer';
import Preloader from '../../components/preloader/Preloader';

const LayoutWrapper = () => {

    return (
        <div className='layoutWrapper'>
            <Hero />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
            <Preloader />
        </div>
    )
}

export default LayoutWrapper;

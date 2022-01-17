import './layoutWrapper.scss';
import Header from '../../components/header/Header';
import Hero from '../../sections/hero/Hero';
import Projects from '../../sections/projects/Projects'
import Contact from '../../sections/contact/Contact';
import AboutMe from '../../sections/aboutMe/AboutMe';
import Footer from '../../components/footer/Footer';

const LayoutWrapper = () => {
    return (
        <div className='layoutWrapper'>
            <Header />
            <Hero />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default LayoutWrapper;

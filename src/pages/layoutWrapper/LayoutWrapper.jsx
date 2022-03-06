import './layoutWrapper.scss';
import Hero from '../../sections/hero/Hero';
import Projects from '../../sections/projects/Projects'
import Contact from '../../sections/contact/Contact';
import AboutMe from '../../sections/aboutMe/AboutMe';
import Footer from '../../components/footer/Footer';
import Preloader from '../../components/preloader/Preloader';
import { useEffect, useState } from 'react';

const LayoutWrapper = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3500)
    }, [])
    

    return (
        <div className='layoutWrapper'>

            {
                !loading 
                ?
                (
                    <>
                        <Hero />
                        <AboutMe />
                        <Projects />
                        <Contact />
                        <Footer />
                    </> 
                )
                :
                (
                    <Preloader />
                )
            }
        </div>
    )
}

export default LayoutWrapper;

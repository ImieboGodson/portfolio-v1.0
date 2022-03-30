import './layoutWrapper.scss';
import Hero from '../../sections/hero/Hero';
import Projects from '../../sections/projects/Projects'
import Contact from '../../sections/contact/Contact';
import AboutMe from '../../sections/aboutMe/AboutMe';
import Footer from '../../components/footer/Footer';
import Preloader from '../../components/preloader/Preloader';
import { useEffect, useState } from 'react';
import { ProjectsArray } from '../../data';

const LayoutWrapper = () => {

    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        setLoading(true);
        
        for(let i = 0; i <= ProjectsArray.length; i++) {
            let progressPercentage = Math.floor((i / ProjectsArray.length) * 100);

            setProgress(progressPercentage);
            console.log('Progress: ', progressPercentage);
        }

        // setLoading(false);
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])

    // const percentage = () => {

        
    // }
    

    return (
        <div className='layoutWrapper'>

            {
                !loading 
                ?
                (
                    <>
                        <Hero />
                        <AboutMe />
                        <Projects projects={ProjectsArray}/>
                        <Contact />
                        <Footer />
                    </> 
                )
                :
                (
                    <Preloader progress={progress}/>
                )
            }
        </div>
    )
}

export default LayoutWrapper;

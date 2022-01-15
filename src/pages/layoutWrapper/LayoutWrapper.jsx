import './layoutWrapper.scss';
import Header from '../../components/header/Header';
import Hero from '../../sections/hero/Hero';
import Projects from '../../sections/projects/Projects'

const LayoutWrapper = () => {
    return (
        <div className='layoutWrapper'>
            <Header />
            <Hero />
            <Projects />
        </div>
    )
}

export default LayoutWrapper;

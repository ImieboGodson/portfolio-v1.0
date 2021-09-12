import './intro.scss';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';

const hero = () => {
    return (
        <div className='intro'>
            <Header />
            <Hero />
        </div>
    )
}

export default hero;

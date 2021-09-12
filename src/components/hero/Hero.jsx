import './hero.scss';
import { GiAmericanFootballPlayer } from "react-icons/gi";
import { GiArrowhead } from "react-icons/gi";


const Hero = () => {
    return (
        <div className='hero'>
          <div className='hero-wrapper container'>
            <div className='hero-left'>
              <div className='introTexts'>
                <h1>Hello! I am Godson Imiebo.</h1>
                <p>Frontend developer. Attention to detail and beauty are just things I can't do without.</p>
              </div>
              <div className='btnWrapper'>
                <a href='mailto:imiebo.godson@gmail.com' className='btn'>let's talk <GiAmericanFootballPlayer /></a>
              </div>
              <div className='hero-social-links-wrapper'>
                <a href='#' target='_blank' className='socialLink twitter'>Twitter</a>/
                <a href='https://www.linkedin.com/in/godson-imiebo-3b9878190/' target='_blank' className='socialLink linkedin'>LinkedIn</a>/
                <a href='https://github.com/ImieboGodson' target='_blank' className='socialLink github'>Github</a>
              </div>
            </div>
            <div className='hero-right'>
            <img src='assets/cross.png' alt='cross' className='hero-right-bg'/>
              <div className='image-wrapper'>
                <img src='assets/greekhead.png' alt='greek head' className='statue-image'/>
              </div>
            </div>
          </div>
          <div className='copyright'> &copy; 2021 GODSON IMIEBO </div>
        </div>
    )
}

export default Hero;

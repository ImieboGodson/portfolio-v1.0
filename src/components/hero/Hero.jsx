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
                <a href='' className='btn'>let's talk <GiAmericanFootballPlayer /></a>
              </div>
              <div className='hero-social-links-wrapper'>
                <a href='#' className='social-link twitter'>Twitter</a>/
                <a href='#' className='social-link linkedin'>LinkedIn</a>/
                <a href='#' className='social-link github'>Github</a>
              </div>
            </div>
            <div className='hero-right'>
            <img src='assets/cross.png' alt='cross' className='hero-right-bg'/>
              <div className='image-wrapper'>
                <img src='assets/greekhead.png' alt='greek head' className='statue-image'/>
              </div>
            </div>
          </div>
          <div className='scrolldown-pointer'>SCROLL DOWN <GiArrowhead className='arrowIcon'/></div>
        </div>
    )
}

export default Hero;

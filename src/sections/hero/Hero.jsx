import './hero.scss';
import { GiAmericanFootballPlayer } from "react-icons/gi";
import { BsArrowDownShort } from "react-icons/bs";


const Hero = () => {
    return (
        <div className='hero'>
          <div className='hero-wrapper container'>
            <div className='hero-left'>
              <div className='introTexts'>
                <h1>Hello! I am Godson Imiebo.</h1>
                <p className='hero-intro-text'><span>Frontend developer.</span> Attention to detail and beauty are just things I can't do without.</p>
              </div>
              <div className='btnWrapper'>
                <a href='mailto:imiebo.godson@gmail.com' className='btn'>let's talk <GiAmericanFootballPlayer /></a>
              </div>
              <div className='hero-social-links-wrapper'>
                <a href='https://twitter.com/dev_oye' target='_blank' rel='noreferrer' className='socialLink twitter'>Twitter</a>/
                <a href='https://www.linkedin.com/in/godson-imiebo-3b9878190/' target='_blank' rel='noreferrer' className='socialLink linkedin'>LinkedIn</a>/
                <a href='https://github.com/ImieboGodson' target='_blank' rel='noreferrer' className='socialLink github'>Github</a>
              </div>
            </div>
            <div className='hero-right'>
            <img src='assets/cross.png' alt='cross' className='hero-right-bg'/>
              <div className='image-wrapper'>
                <img src='assets/greekhead.png' alt='greek head' className='statue-image'/>
              </div>
            </div>
          </div>
          <a className='scrolldown-wrapper' href='#aboutMe'>
            <div className='scrolldown'> <p className='scrolldown-text'>SCROLL DOWN</p> <BsArrowDownShort className='scrolldown-icon'/></div>
          </a>
        </div>
    )
}

export default Hero;
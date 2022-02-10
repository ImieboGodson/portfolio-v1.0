import './aboutMe.scss';
// import { GiBandana } from "react-icons/gi";

const AboutMe = () => {
    return (
        <div id='aboutMe' className='aboutMe'>
            <div className='aboutMe-wrapper container'>
                <div className='top-of-section-texts-wrapper'>
                    <div className='top-of-section-texts'>
                        <div className='top-of-section-texts-items'>
                            <div className='left-text'>
                                <p>N</p>
                                <p className='smaller-left-text'>o</p>
                                <p className='left-text-number'>2</p>
                            </div>
                            <p className='right-text'>What I am about?</p>
                        </div>
                        
                    </div>
                </div>
                {/* <div className='projects-toptext'>
                    <div className='topmost-smalltext-wrapper'>
                        <p>ABOUT ME</p><span>-</span>
                    </div>
                    <div className='topmost-bigtext-wrapper'>
                        <p className='topmost-bigtext'>What I Am About?</p>
                        <GiBandana className='folder-icon'/>
                    </div>
                </div> */}
                <div className='aboutMe-main-content-wrapper'>
                    <div className='aboutMe-text-main-wrapper'>
                        <p className='aboutMe-text-main'>Passionate Front-end Developer, a <span>fast learner</span> and a <span>visually-oriented</span> engineer adept at delivering <span>amazing user experiences</span>.</p>
                    </div>
                    <div className='aboutMe-stacklist-wrapper'>
                        <p><span>STACK</span> Adept with technologies such as; JavaScript, React, Redux, NextJS, CSS, SCSS, CSS-in-JS, NodeJS, ExpressJS, MongoDB, PostgreSQL...<br/><a href='https://github.com/ImieboGodson' target='_blank' rel='noreferrer' className='aboutMe-links'>SEE MY GITHUB</a></p>
                        {/* <a href='https://github.com/ImieboGodson' target='_blank' rel='noreferrer' className='aboutMe-links'>Checkout My Github</a> */}
                    </div>
                    <div className='aboutMe-hobbies-wrapper'>
                        <p><span>HOBBIES</span> I spend my time; Visiting new places, Hanging out with friends, Listening to podcasts about the state of tech in Africa, Trying to learn a new language, writing about random stuff,  Watching Football or Basketball, Playing Video games, Watching movies...<br/><a href='https://dev.to/imiebogodson' target='_blank' rel='noreferrer' className='aboutMe-links'>VIEW MY WRITINGS</a></p>
                        {/* <a href='https://github.com/ImieboGodson' target='_blank' rel='noreferrer' className='aboutMe-links'>Checkout My Github</a> */}
                    </div>
                    <div className='aboutMe-quote-wrapper'>
                        <p><span>Words of Wisdom</span><br/> "The function of man is to live, not to exist.<br/> I shall not waste my days trying to prolong them. I shall use my time."</p>
                        {/* <a href='https://github.com/ImieboGodson' target='_blank' rel='noreferrer' className='aboutMe-links'>Checkout My Github</a> */}
                    </div>
                </div>
                    
            </div>
        </div>
    )
}

export default AboutMe

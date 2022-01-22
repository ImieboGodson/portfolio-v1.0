import './aboutMe.scss';
import { GiBandana } from "react-icons/gi";

const AboutMe = () => {
    return (
        <div id='aboutMe' className='aboutMe'>
            <div className='aboutMe-wrapper container'>
                <div className='projects-toptext'>
                    <div className='topmost-smalltext-wrapper'>
                        <p>ABOUT ME</p><span>-</span>
                    </div>
                    <div className='topmost-bigtext-wrapper'>
                        <p className='topmost-bigtext'>What I Am About?</p>
                        <GiBandana className='folder-icon'/>
                    </div>
                </div>
                <div className='aboutMe-main-content-wrapper'>
                    <div className='aboutMe-text-main-wrapper'>
                        <p className='aboutMe-text-main'>Passionate Front-end Developer, a <span>fast learner</span> and a <span>visually-oriented</span> engineer adept at delivering <span>great user experience</span>.</p>
                    </div>
                    <div className='aboutMe-stacklist-wrapper'>
                        <p>STACKS</p>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}

export default AboutMe

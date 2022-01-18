import './aboutMe.scss';
import { GiBandana } from "react-icons/gi";

const AboutMe = () => {
    return (
        <div className='aboutMe'>
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
                    Main part
                </div>
                    
            </div>
        </div>
    )
}

export default AboutMe

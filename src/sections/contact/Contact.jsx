import './contact.scss';
import { GiRaiseZombie, GiTargeting } from "react-icons/gi";

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-wrapper'>
                <div className='contact-center-texts'>
                    <p className='contact-bold-text'>Let's work together.</p>
                    <p className='contact-small-text'>Feel free to reach out if you want to collaborate with me or simply have chat.</p>
                </div>
                <div className='say-hello-btn-wrapper'>
                    <a href='mailto:imiebo.godson@gmail.com' className='say-hello-btn'>Hit Me Up!<GiRaiseZombie className='say-hello-btn-icon'/></a>
                </div>
                {/* <div className='underlay-icon-wrapper'>
                    <GiTargeting className='underlay-icon'/>
                </div> */}
            </div>
        </div>
    )
}

export default Contact

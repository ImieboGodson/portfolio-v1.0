import './footer.scss';
import { RiTwitterLine, RiGithubLine, RiLinkedinBoxLine } from "react-icons/ri";
import { FaDev } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-wrapper'>
                <div className='copyright'> &copy; 2022 GODSON IMIEBO </div>
                <div className='footer-social-links-wrapper'>
                    <a href='https://twitter.com/dev_oye' target='_blank' rel='noreferrer' className='twitter2'>
                        <RiTwitterLine className='footer-social-links'/>
                    </a>
                    <a href='https://github.com/ImieboGodson' target='_blank' rel='noreferrer' className='twitter2'>
                        <RiGithubLine className='footer-social-links'/>
                    </a>
                    <a href='https://www.linkedin.com/in/godson-imiebo/' target='_blank' rel='noreferrer' className='twitter2'>
                        <RiLinkedinBoxLine className='footer-social-links'/>
                    </a>
                    <a href='https://dev.to/imiebogodson' target='_blank' rel='noreferrer' className='twitter2'>
                        <FaDev className='footer-social-links'/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer

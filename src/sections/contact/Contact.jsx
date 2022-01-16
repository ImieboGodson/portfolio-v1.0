import './contact.scss';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-wrapper'>
                <div className='contact-center-texts'>
                    <p className='contact-bold-text'>Let's work together.</p>
                    <p className='contact-small-text'>Feel free to reach out if you want to collaborate with me or simply have chat.</p>
                </div>
                <div className='say-hello-btn-wrapper'>
                    <a href='mailto:imiebo.godson@gmail.com' className='btn'>Say Hello</a>
                </div>
            </div>
        </div>
    )
}

export default Contact

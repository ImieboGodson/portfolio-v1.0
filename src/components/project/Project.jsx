import './project.scss';

const Project = () => {
    return (
        <div className='project'>
            <div className='project-wrapper'>
                <div className='project-details-wrapper'>
                    <div className='project-details-left'>
                        <div className='project-deco'>
                            <div className='line'></div>
                            <p className='project-number'>01</p>
                        </div>
                        <div className='project-details'>
                            <p className='project-name'>Monsters 'n' Funk</p>
                            <p className='project-type'>React Application</p>
                        </div>
                    </div>
                    <div className='project-details-right'>
                        <div className='project-btn'>
                            <p>View Project</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;

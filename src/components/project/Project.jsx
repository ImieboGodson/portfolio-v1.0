import './project.scss';

const Project = ({proj}) => {
    return (
        <div className='project'>
            <div className='project-wrapper'>
                <div className='project-details-wrapper'>
                    <div className='project-details-left'>
                        <div className='project-deco'>
                            <div className='line'></div>
                            <p className='project-number'>{`0${proj.id}`}</p>
                        </div>
                        <div className='project-details'>
                            <p className='project-name'>{proj.name}</p>
                            <p className='project-type'>{proj.type}</p>
                        </div>
                    </div>
                    <div className='project-details-right'>
                        <div className='project-btn'>
                            <p>VIEW PROJECT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;

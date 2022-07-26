import { useLocation } from 'react-router-dom';
import { ProjectsArray } from '../../data';
import './project.scss';

const Project = () => {

    const location = useLocation();
    const path = location.pathname.split('/')[2]
    const project = ProjectsArray.find(p => p.title === path)

  return (
    <div className='project-page'>
        <div className='project-page-wrapper'>
            <div className='project-image-wrapper'>
                <p className='project-name'>{project.name}</p>
            </div>
            <div className='project-details-wrapper container'>
                <div className='abouttheprojecttext-wrapper'>
                    <h1 className='abouttheproject-text'>About the Project.</h1>
                </div>
                <div className='projectdetails-wrapper'>
                    <p className='projectdetails-summary-text'>
                        {project.discription}
                    </p>
                    <div className='projectdetails-tools-wrapper'>
                        <h3 className='projectdetails-tools-header'>Tools & Technologies</h3>
                        <p className='projectdetails-tools-text'>{project.tools.map((p) => {
                            return p + '  /  ';
                        })}</p>
                    </div>
                    {/* <div className='project-status-wrapper'><p className='project-status'>Not Completed</p></div> */}
                    <div className='projectdetails-buttons-wrapper'>
                        <a href={`${project.githubLink}`} target='_blank' rel='noreferrer' className='projectdetails-button'>_Github Repo</a>
                        <a href={`${project.liveLink}`} target='_blank' rel='noreferrer' className='projectdetails-button'>_Live Link</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project
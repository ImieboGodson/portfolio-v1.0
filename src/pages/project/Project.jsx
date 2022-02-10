import './project.scss';

const Project = () => {
  return (
    <div className='project-page'>
        <div className='project-page-wrapper container'>
            <div className='project-image-wrapper'></div>
            <div className='project-details-wrapper'>
                <div className='abouttheprojecttext-wrapper'>
                    <h1 className='abouttheproject-text'>About the Project</h1>
                </div>
                <div className='projectdetails-wrapper'>
                    <p className='projectdetails-summary-text'></p>
                    <div className='projectdetails-tools-wrapper'></div>
                    <div className='projectdetails-buttons-wrapper'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project
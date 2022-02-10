import './project.scss';

const Project = () => {
  return (
    <div className='project-page'>
        <div className='project-page-wrapper'>
            <div className='project-image-wrapper'>
                <p className='project-name'>PROJECT NAME</p>
            </div>
            <div className='project-details-wrapper container'>
                <div className='abouttheprojecttext-wrapper'>
                    <h1 className='abouttheproject-text'>About the Project.</h1>
                </div>
                <div className='projectdetails-wrapper'>
                    <p className='projectdetails-summary-text'>
                    Movx is a React JS application that lets you browse for movies, tv-shows and actors. You can watch trailers, add or remove certain movie to your favorites collection and discover upcoming or trending movies. This application was built with React JS, Redux with Redux-Saga for better handling side effects and asynchronous operations and TMDB API for consuming all the data. You can view the source code on my github repository.
                    </p>
                    {/* <div className='projectdetails-contributors-wrapper'>
                        <h3 className='projectdetails-contributors-header'>Credits</h3>
                        <div className='projectdetails-contributors-list-wrapper'>
                            <div className='projectdetails-contributor'>
                                <h3 className='projectdetails-contributor-header'>Designer</h3>
                                <p className='projectdetails-contributor-text'></p>
                            </div>
                        </div>
                    </div> */}
                    <div className='projectdetails-tools-wrapper'>
                        <h3 className='projectdetails-tools-header'>Tools & Technologies</h3>
                        <p className='projectdetails-tools-text'>Adobe XD /   HTML5 /   CSS3 /   JavaScript /   SASS /   React JS /   Redux /   Redux-Saga /   Webpack /   TMDB API</p>
                    </div>
                    <div className='projectdetails-buttons-wrapper'>
                        <a href='https://dev.to/imiebogodson' target='_blank' rel='noreferrer' className='projectdetails-button'>_Github Repo</a>
                        <a href='https://dev.to/imiebogodson' target='_blank' rel='noreferrer' className='projectdetails-button'>_Live Link</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project
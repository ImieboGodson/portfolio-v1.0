import './preloader.scss'
// import ProgressBar from "@ramonak/react-progress-bar";

const Preloader = ({ progress }) => {
  return (
    <div className='preloader'>
        <div className='progress-bar-wrapper'>
          <div className='progress-bar'>
            <div className='progress-bar-content' style={{width: `${progress}%`, height: '100%', backgroundColor: '#fff', transition: 'ease-in-out 5s'}}></div>
          </div>
          <p className='progress-bar-label'>{`${progress}%`}</p>
        </div>
        <div className='preloader-name-wrapper'>
          <p className='preloader-name'>Godson Imiebo</p>
        </div>
        <div className='preloader-subtext-wrapper'>
          <p className='preloader-subtext'>Frontend Developer in Lagos, Nigeria</p>
        </div>
    </div>
  )
}

export default Preloader
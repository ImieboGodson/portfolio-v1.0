import './preloader.scss'
import { preLoaderAnim } from '../../animations/index'
import { useEffect } from 'react';
// import ProgressBar from "@ramonak/react-progress-bar";

const Preloader = () => {

  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Curator,</span>
        <span>Vibes.</span>
      </div>
    </div>
    // <div className='preloader'>
    //     <div className='progress-bar-wrapper'>
    //       <div className='progress-bar'>
    //         <div className='progress-bar-content' style={{width: `${progress}%`, height: '100%', backgroundColor: '#fff', transition: 'ease-in-out 10s'}}></div>
    //       </div>
    //       <p className='progress-bar-label'>{`${progress}%`}</p>
    //     </div>
    //     <div className='preloader-name-wrapper'>
    //       <p className='preloader-name'>Godson Imiebo</p>
    //     </div>
    //     <div className='preloader-subtext-wrapper'>
    //       <p className='preloader-subtext'>Frontend Developer in Lagos, Nigeria</p>
    //     </div>
    // </div>
  )
}

export default Preloader
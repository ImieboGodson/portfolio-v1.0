import './preloader.scss'
import { preLoaderAnim } from '../../animations/index'
import { useEffect } from 'react';

const Preloader = () => {

  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Learner,</span>
        <span>Dreamer.</span>
      </div>
    </div>
  )
}

export default Preloader
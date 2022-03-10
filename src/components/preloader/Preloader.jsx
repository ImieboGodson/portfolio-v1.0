import './preloader.scss'
// import ProgressBar from "@ramonak/react-progress-bar";

const Preloader = () => {
  return (
    <div className='preloader'>
        <div className='preloader-image-wrapper'>
            <img src='assets/progressbar-1.gif' alt='preloader' className='preloader-image'/>
            {/* <ProgressBar 
              completed={34}
              bgColor="#000000"
              height="100%"
              width="100%"
              borderRadius=""
              labelAlignment="outside"
              baseBgColor="#ffffff"
              labelColor="#000000"
              labelSize="35px"
              transitionDuration="15s"
              animateOnRender
              maxCompleted={100}
            /> */}
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
import './preloader.scss'

const Preloader = () => {
  return (
    <div className='preloader'>
        <div className='preloader-image-wrapper'>
            <img src='assets/tractor-preloader.gif' alt='preloader' className='preloader-image'/>
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
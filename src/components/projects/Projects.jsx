import './projects.scss';
import { AiTwotoneFolderOpen } from "react-icons/ai";

const Projects = () => {
    return (
        <div className='projects'>
           <div className='projects-wrapper container'>
            <div className='projects-toptext'>
                <div className='topmost-smalltext-wrapper'>
                    <p>FEATURED PROJECTS</p><span>-</span>
                </div>
                <div className='topmost-bigtext-wrapper'>
                    <p className='topmost-bigtext'>Stuffs I've Worked On</p>
                    <AiTwotoneFolderOpen className='folder-icon'/>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Projects;

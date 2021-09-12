import './projects.scss';
import { AiTwotoneFolderOpen } from "react-icons/ai";
import Header from '../../components/header/Header';
import ProjectsList from '../../components/projectsList/ProjectsList';

const Projects = () => {
    return (
        <>
            <Header />
            <div className='projects'>
                <div className='projects-wrapper container'>
                    <div className='projects-toptext'>
                        <div className='topmost-smalltext-wrapper'>
                            <p>FEATURED PROJECTS</p><span>-</span>
                        </div>
                        <div className='topmost-bigtext-wrapper'>
                            <p className='topmost-bigtext'>Stuff I've Worked On</p>
                            <AiTwotoneFolderOpen className='folder-icon'/>
                        </div>
                    </div>
                    <ProjectsList />
                    <div className='bottom-wrapper'>
                        <div className='bottom-smalltext-wrapper'>
                            <p className='bottom-smalltext'>There's more</p>
                        </div>
                        <div className='viewallproject-btn'>
                            <p className='btn-text'>View all projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;

import './projects.scss';
// import { AiTwotoneFolderOpen } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";
import Header from '../../components/header/Header';
import ProjectsList from '../../components/projectsList/ProjectsList';

const Projects = ({ projects }) => {
    return (
        <>
            <Header />
            <div className='projects'>
                <div className='projects-wrapper container'>
                    <div className='top-of-section-texts-wrapper'>
                        <div className='top-of-section-texts'>
                            <div className='top-of-section-texts-items'>
                                <div className='left-text'>
                                    <p>N</p>
                                    <p className='smaller-left-text'>o</p>
                                    <p className='left-text-number'>3</p>
                                </div>
                                <p className='right-text'>Stuff I have Built</p>
                            </div>
                            
                        </div>
                    </div>
                    {/* <div className='projects-toptext'>
                        <div className='topmost-smalltext-wrapper'>
                            <p>FEATURED PROJECTS</p><span>-</span>
                        </div>
                        <div className='topmost-bigtext-wrapper'>
                            <p className='topmost-bigtext'>Stuff I've Worked On</p>
                            <AiTwotoneFolderOpen className='folder-icon'/>
                        </div>
                    </div> */}
                    <div className='projectlist-wrapper'>
                        <ProjectsList projects={projects}/>
                    </div>
                    <div className='bottom-wrapper'>
                        <div className='bottom-smalltext-wrapper'>
                            <p className='bottom-smalltext'>There's more</p>
                        </div>
                        <div className='viewallproject-btn-wrapper'>
                            <a className='viewallproject-anchorTag' href='https://github.com/ImieboGodson' target='_blank' rel='noreferrer'>
                                <div className='viewallproject-btn'>
                                    <p className='btn-text'>View all projects</p>
                                    <BiRightArrow className='viewallproject-btn-icon'/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;

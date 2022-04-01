import Project from '../project/Project';
import './projectsList.scss';
// import { Projects } from '../../data';

const ProjectsList = ({ projects }) => {
    return (
        <div className='projects-list'>
            {projects.map(proj => <Project key={proj.id} proj={proj}/>)}
        </div>
    )
}

export default ProjectsList;

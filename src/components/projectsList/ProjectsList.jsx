import Project from '../project/Project';
import './projectsList.scss';
import { Projects } from '../../data';

const ProjectsList = () => {
    return (
        <div className='projects-list'>
            {Projects.map(proj => <Project key={proj.id} proj={proj}/>)}
        </div>
    )
}

export default ProjectsList;

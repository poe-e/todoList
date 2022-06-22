import {useState} from 'react'
import AddProject from './AddProject';

const PersonalProjects = (props) =>{

  const [addProj, setAddProj] = useState(false);


    return(
        <div className='personal-projects'>
          <h1 id='projectsHeader'>Projects</h1>
          {props.personalProjects.map((item, index)=>(
            <button className='projectUnSelected' key={index} id={item} onClick={(e)=>props.selectProject(e)}>{item}</button>
          ))}
          {addProj
            ? <AddProject setTrigger={setAddProj} submitProject={props.submitProject}/>
            : <button className='addProject' onClick={()=>setAddProj(true)}>+ Add Project</button>
          }
          
          
          {/* <button className='addProject' onClick={()=>addProject()}>+ Add Project</button> */}
        </div>
    );
}

export default PersonalProjects;
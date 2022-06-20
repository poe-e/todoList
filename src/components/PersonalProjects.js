

const PersonalProjects = (props) =>{


    return(
      <div className='personal-projects'>
        <h1 id='projectsHeader'>Projects</h1>
        <button className='projectUnSelected' onClick={(e)=>props.selectProject(e)}>P1</button>
      </div>
    );
}

export default PersonalProjects;
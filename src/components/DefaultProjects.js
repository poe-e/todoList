
const DefaultProjects = (props) =>{



    return(
      <div className='default-projects'>
        <button className='projectSelected' id='inbox' onClick={(e)=>props.selectProject(e)}>inbox</button>
        <button className='projectUnSelected' id='today' onClick={(e)=>props.selectProject(e)}>today</button>
        <button className='projectUnSelected' id='this-week' onClick={(e)=>props.selectProject(e)}>this week</button>
      </div>
    );
}

export default DefaultProjects;
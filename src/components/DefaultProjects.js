

const DefaultProjects = (props) =>{



    return(
      <div className='default-projects'>
        <button className='projectUnSelected' onClick={(e)=>props.selectProject(e)}>inbox</button>
        <button className='projectUnSelected' onClick={(e)=>props.selectProject(e)}>today</button>
        <button className='projectUnSelected' onClick={(e)=>props.selectProject(e)}>this week</button>
      </div>
    );
}

export default DefaultProjects;
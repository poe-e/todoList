import './projectItem.css'

const ProjectItems = (props) =>{

  function deleteTask(e){
    console.log(e.target.parentNode.parentNode.parentNode);
    let taskToDelete = e.target.parentNode.parentNode.parentNode.id;
    props.deleteTask(taskToDelete)
  }

    return(
      <div>
          {props.currentProj.map((item, index)=>(
            <div key={index} id={index} className='projectItem'>
              <div className='priority'>{'!'.repeat(item.priority)}</div>
              <div className='project'>
                <div>{item.description}</div>
                <div className='rightTask'>
                  <div>{item.date}</div>
                  <button id='closeButton' onClick={(e)=>deleteTask(e)}></button>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
}

export default ProjectItems;
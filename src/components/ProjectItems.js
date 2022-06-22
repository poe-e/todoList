import './projectItem.css'

const ProjectItems = (props) =>{

  console.log(props.currentProj);

    return(
      <div>
          {props.currentProj.map((item, index)=>(
            <div key={index} className='projectItem'>
              <div className='priority'>
                {'!'.repeat(item.priority)}
              </div>
                <div className='project'>
                  <div>{item.description}</div>
                  <div className='rightTask'>
                    <div>Date</div>
                    <div>X</div>
                  </div>
                  {/* <button id='closeButton'>X</button> */}
                </div>
            </div>
          ))}
      </div>
    );
}

export default ProjectItems;
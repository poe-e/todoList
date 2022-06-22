import './addproj.css'

const AddProject = (props) =>{


    function addProject(){
      props.setTrigger(false);
      let value = document.getElementById('projText').value;
      if(!value) return;
      props.submitProject(value);
    }


    return(
      <div id='projectInput'>
        <textarea id='projText' className='projTextArea' required></textarea>
        <div style={{display: 'flex', justifyContent:'space-between'}}>
          <button className='projectButtonAdd' onClick={()=>addProject()}>Add</button>
          <button className='projectButtonCancel' onClick={()=>props.setTrigger(false)}>Cancel</button>
        </div>
      </div>
    );
}

export default AddProject;
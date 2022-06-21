import {useState} from 'react'
import Popup from './Popup';
import './selectedProj.css'

const SelectedProject = (props) =>{

  const [currentProj, setCurrentProj] = useState('');
  const [popup, setPopup] = useState(false);

    return(
      <div>
        <h2>{props.current}</h2>
        <div className='projectList'></div>
        <button className='curProj' onClick={()=>setPopup(true)}>+Add Task</button>
        <Popup trigger={popup} setTrigger={setPopup} submitTask={props.submitTask}/>
      </div>
    );
}

export default SelectedProject;
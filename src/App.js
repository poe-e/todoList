import './App.css';
import DefaultProjects from './components/DefaultProjects';
import PersonalProjects from './components/PersonalProjects';
import SelectedProject from './components/SelectedProject';
import React, { useState } from 'react';

function App() {

  //const [currentProj, setCurrentProj] = useState([]);
  const [projName, setProjName] = useState('inbox');
  const [currentProj, setCurrentProj] = useState(
    JSON.parse(localStorage.getItem('inbox')) || []
  );

  function highlightSelected(e){
    if(document.getElementsByClassName('projectSelected').length > 0) document.getElementsByClassName('projectSelected')[0].className = 'projectUnSelected';
    e.target.className = 'projectSelected';
    setCurrentProj(e.target.id.replace('-',' '));
  }
  function submitTask(task){
    let selectedProj = document.getElementsByClassName('projectSelected')[0].id;
    currentProj.push(task)
    localStorage.setItem(selectedProj, JSON.stringify(currentProj));
    setCurrentProj([...currentProj]);
    console.log(currentProj);
  }
  return (
    <div className="App">
      <header className='header'>
        <div className="headContainer">
          <h1 style={{fontSize: "50px"}}>Todo List</h1>
        </div>
      </header>
      
      <div className='mainContainer'>
        <div className='navBar'>
          <DefaultProjects selectProject={highlightSelected}/>
          <PersonalProjects selectProject={highlightSelected}/>
        </div>
        <div className='todoListContainer'>
          <SelectedProject current={projName} submitTask={submitTask}/>
          {currentProj.map((item, index)=>(
            <div key={index}>{item.description}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

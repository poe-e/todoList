import './App.css';
import DefaultProjects from './components/DefaultProjects';
import PersonalProjects from './components/PersonalProjects';
import SelectedProject from './components/SelectedProject';
import ProjectItems from './components/ProjectItems';
import React, { useEffect, useState } from 'react';

function App() {

  //const [currentProj, setCurrentProj] = useState([]);
  const [projName, setProjName] = useState('inbox');
  const [personalProjects, setPersonalProjects] = useState(
    JSON.parse(localStorage.getItem('projectList')) || []
  );
  const [currentProj, setCurrentProj] = useState(
    JSON.parse(localStorage.getItem('inbox')) || []
  );

  function highlightSelected(e){
    if(document.getElementsByClassName('projectSelected').length > 0) document.getElementsByClassName('projectSelected')[0].className = 'projectUnSelected';
    e.target.className = 'projectSelected';
    setProjName(e.target.id.replace('-',' '));
    //loadStorage();
  }
  function submitProject(value){
    console.log(value);
    personalProjects.push(value);
    localStorage.setItem('projectList', JSON.stringify(personalProjects))
    setPersonalProjects([...personalProjects]);
  }
  function submitTask(task){
   // let selectedProj = document.getElementsByClassName('projectSelected')[0].id;
    currentProj.push(task)
    localStorage.setItem(projName, JSON.stringify(currentProj));
    setCurrentProj([...currentProj]);
    console.log(currentProj);
  }
  function deleteTask(task){
    console.log(projName)
    currentProj.splice(task, 1);
    localStorage.setItem(projName, JSON.stringify(currentProj))
    setCurrentProj([...currentProj]);
  }
  useEffect(()=>{
    const loadStorage = () =>{
      setCurrentProj(JSON.parse(localStorage.getItem(projName)) || []);
    }
    loadStorage();
  }, [projName]);

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
          <PersonalProjects selectProject={highlightSelected} personalProjects={personalProjects} submitProject={submitProject}/>
        </div>
        <div className='todoListContainer'>
          <SelectedProject current={projName} submitTask={submitTask}/>
          <ProjectItems currentProj={currentProj} deleteTask={deleteTask}/>
        </div>
      </div>
    </div>
  );
}

export default App;

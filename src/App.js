import './App.css';
import DefaultProjects from './components/DefaultProjects';
import PersonalProjects from './components/PersonalProjects';
// import React, { useState } from 'react';

function App() {

  function highlightSelected(e){
    if(document.getElementsByClassName('projectSelected').length > 0) document.getElementsByClassName('projectSelected')[0].className = 'projectUnSelected';

    e.target.className = 'projectSelected';
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
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';

import './App.css';

// custom imports
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Todocard from './Components/Todocard';
import Addtodo from './Components/Addtodo';


// data in custom file
import data from './Data';

function App( ) {

  const [tasks, setTasks] = useState(data.tasks);
  const [addTodo, setAddTodo] = useState(false);

  return (
    <div className="App">
      <Sidebar addTask={ [addTodo, setAddTodo] }/>
      
      <div className="AppBody">
        <Navbar />

        <div className="CardsContainer">
          <Todocard tasks={tasks} setTasks={setTasks} title="Todo" status="new" color="#4caf50">
            <Addtodo display={ [addTodo, setAddTodo] } tasksList={ [tasks, setTasks] }/>
          </Todocard>

          <Todocard tasks={tasks} setTasks={setTasks} title="Doing" status="ongoing" color="#ff9800"/>

          <Todocard tasks={tasks} setTasks={setTasks} title="Done" status="done"/>
        </div>
      </div>

    </div>
  );
}

export default App;

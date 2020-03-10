import React, { useState } from 'react';
import './App.css';

// custom imports
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Todocard from './Components/Todocard';

// data in custom file
import data from './Data';

function App( ) {

  const [tasks, setTasks] = useState(data.tasks);

  return (
    <div className="App">
      <Sidebar />
      
      <div className="AppBody">
        <Navbar />

        <div className="CardsContainer">
          <Todocard todos={tasks} setTodos={setTasks} title="Todo" status="new" color="#4caf50"/>

          <Todocard todos={tasks} setTodos={setTasks} title="Doing" status="ongoing" color="#ff9800"/>

          <Todocard todos={tasks} setTodos={setTasks} title="Done" status="done"/>
        </div>
      </div>

    </div>
  );
}

export default App;

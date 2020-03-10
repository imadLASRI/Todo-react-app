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
          <Todocard setTodos={setTasks} todos={tasks} title="Todo" status="new" color="#4caf50"/>

          <Todocard setTodos={setTasks} todos={tasks} title="Doing" status="ongoing" color="#ff9800"/>

          <Todocard setTodos={setTasks} todos={tasks} title="Done" status="done"/>

        </div>
      </div>

    </div>
  );
}

export default App;

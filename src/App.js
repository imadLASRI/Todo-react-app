import React, { useState } from 'react';
import './App.css';

// custom imports
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Todocard from './Components/Todocard';

function App( ) {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        todo: 'Learn react',
        deadline: 'in 1 month',
        status: 'ongoing'
    },
    {
        id: 2,
        todo: 'Backend dev with laravel',
        deadline: 'whenever',
        status: 'ongoing'
    },
    {
        id: 3,
        todo: 'Make coffee',
        deadline: 'whenever',
        status: 'new'
    },
    {
        id: 4,
        todo: 'Play music',
        deadline: 'whenever',
        status: 'done'
    }
]);


  return (
    <div className="App">
      <Sidebar />
      
      <div className="AppBody">
        <Navbar />

        <div className="CardsContainer">
          <Todocard todos={tasks} title="Todo" status="new" color="#4caf50"/>

          <Todocard todos={tasks} title="Doing" status="ongoing" color="#ff9800"/>

          <Todocard todos={tasks} title="Done" status="done"/>

        </div>
      </div>

    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([
    { name: "Buy milk", isPriority: false },
    { name: "Formula1 @10pm", isPriority: true },
    { name: "Doctor @1pm", isPriority: false },
  ])


  const [newTask, setNewTask] = useState("");


  const taskNodes = tasks.map((task, index) => {
    return (
      <li key={index} className={task.isPriority ? "priority" : "not-priority"}>
      <span>{task.name}</span>
      {task.isPriority? <span className="priority"><button>Done</button></span> : <button onClick={() => priorityTask(index)}>To do</button>}
      </li>
    )
  })


  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const saveNewTask = (event) => { 
    event.preventDefault();
    const copyTasks = [...tasks]
    copyTasks.push({name: newTask, isPriority: false})
    setTasks(copyTasks)
    setNewTask("")
  }


  const priorityTask = (index) => {
    const copyTasks = [...tasks]
    copyTasks[index].isPriority = true;
    setTasks(copyTasks)
  }

  return (
    <div className="App">

      <h1>To do list</h1>


      <ul>
        {taskNodes}
      </ul>

      <form onSubmit={saveNewTask}>
        <label htmlFor="new-task">Add a new task:</label>
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput} />
        <input type="submit" value="Save New Task" />
      </form>



    </div>
  );

}

export default App;

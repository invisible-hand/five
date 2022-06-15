import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'


function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "test task one",
        day: "Feb 5th at 2:20pm",
        reminder: true
    },
    {
        id: 2,
        text: "test two",
        day: "Feb 5th at 2:21pm",
        reminder: true
    },
    {
        id: 3,
        text: "test three",
        day: "Feb 5th at 2:24pm",
        reminder: true
    }


])

//AddTask

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  
  const newTask = {id, ... task}

  setTasks([...tasks, newTask])

}



//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}


// Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))
}


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}
      title="Helllo from react prop"/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No active tasks"}

    </div>
  );
}

export default App;

import './App.css'

import AddTask from './components/AddTasks';
import Footer from './components/Footer';
import GridTask from './components/GridTasks';


const tasks = [
  {
    "id": 1,
    "status": "completed",
    "title": "Task 1",
    "comment": "This task was completed successfully"
  },
  {
    "id": 2,
    "status": "in progress",
    "title": "Task 2",
    "comment": "Currently working on this task"
  },
  {
    "id": 3,
    "status": "pending",
    "title": "Task 3",
    "comment": "This task is yet to be started"
  },
  {
    "id": 4,
    "status": "completed",
    "title": "Task 4",
    "comment": "Task completed ahead of schedule"
  },
  {
    "id": 5,
    "status": "in progress",
    "title": "Task 5",
    "comment": "Experiencing some delays with this task"
  }
];

function App() {
  return (
    <>
      <h1>Tasks</h1>
      <AddTask tasks={tasks}/>
      <h1>Tasks list</h1>
      <GridTask tasks={tasks}/>
      <Footer/>
    </>
  )
}
export default App
import './App.css'
import { useEffect, useState } from 'react';

import tasksService from './services/tasks';
import AddTask from './components/AddTasks';
import Footer from './components/Footer';

function App() {

  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);
    
    useEffect(()=> {
        tasksService.getAll().then(response => {
        setTasks(response);
      })
    }, []);  

    const cantidadRegistros = tasks;

    const addTask = (newTask) => { 
      setTasks(tasks.concat(newTask));
    }

  return (
    <>
      <h1>Tasks</h1>
        <AddTask onTaskToAdd={addTask} onQuantityTask={cantidadRegistros}/>
      <h1>Tasks list</h1>
      <table className='tableList'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Title</th>
            <th scope='col'>Comment</th>
            <th scope='col'>Status</th>
          </tr>
        </thead>
        <tbody>
            {
              tasks.map(task => (
              <tr key={task.id}>
                <th scope='row'>{task.id}</th>
                <td>{task.title}</td>
                <td>{task.comment}</td>
                <td>{task.status}</td>
              </tr>
              ))
            }    
        </tbody>
      </table>
      <Footer/>
    </>
  )
}
export default App
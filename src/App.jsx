import './App.css'
import { useEffect, useState } from 'react';

import tasksService from './services/tasks';
import AddTask from './components/AddTasks';
import Footer from './components/Footer';

function App() {

  const [tasks, setTasks] = useState([]);
  const [saveOk, setSaveOk] = useState(null);
    
    useEffect(()=> {
        tasksService.getAll().then(response => {
        setTasks(response);
      })
    }, []);  

    const cantidadRegistros = tasks;

    const mostrarSaveOk = () => {
      setSaveOk('The task was saved successfully');
      setTimeout(()=> {
        setSaveOk(null);
      }, 5000);
    }

    const addTask = (newTask) => { 
      setTasks(tasks.concat(newTask));
    }

  return (
    <>
      <h1>Tasks</h1>
        <AddTask onTaskToAdd={addTask} onQuantityTask={cantidadRegistros} onTaskCreated={mostrarSaveOk}/>
      <h1>Tasks list</h1>
      <div>
        {saveOk && <div className='save-ok'>{saveOk}</div>}
      </div>
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
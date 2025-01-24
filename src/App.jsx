import './App.css'
import { useEffect, useState } from 'react';

import tasksService from './services/tasks';
import AddTask from './components/AddTasks';
import Footer from './components/Footer';
import Notification from './components/Notification';
import Delete from './components/Delete';

function App() {
  const [tasks, setTasks] = useState([]);
  const [warningMessage, SetWarningMessage] = useState(null);
  const [warningMessageDelete, SetWarningMessageDelete] = useState(null);
    
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await tasksService.getAll();
        if(res.success){
          setTasks(res.data);
        }else{
          console.error(res.error)
        }
      }catch(error){
        console.error('Error al obtener las tareas');
      };
    }
      fetchData();
  },[]);

  const messageOK = (message) => {
    console.log(message);
    SetWarningMessage(message);
    setTimeout(()=> {
      SetWarningMessage(null);
    }, 5000);
  }

    const mostrarDeleteOk = () => {
      SetWarningMessageDelete('The task was Deleted successfully');
      setTimeout(()=> {
        SetWarningMessageDelete(null);
      }, 5000);
    }

    const addTask = (newTask) => { 
      setTasks(tasks.concat(newTask));
    }

  return (
    <>
      <h1>Tasks</h1>
        <AddTask onTaskToAdd={addTask}
                 tasks={tasks}
                 onTaskCreated={messageOK}
                  />
      <h1>Tasks list</h1>
      <div>
        {warningMessage && (<Notification message={warningMessage}/>)}
      </div>
      <table className='tableList'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Title</th>
            <th scope='col'>Comment</th>
            <th scope='col'>Status</th>
            <th scope='col'>Delete</th> 
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
                <td><Delete 
                  taskId={task.id} 
                  onTaskToDelete={mostrarDeleteOk}/></td>
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
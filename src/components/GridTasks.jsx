import React, { useState } from "react";
import { FaRegCheckCircle,FaRegTrashAlt } from "react-icons/fa";

const GridTask = (props) => {

    const [ tasks, setTasks ] = useState(props.tasks);

    function onDeleteTask(taskId){
        const result = tasks.findIndex(task => task.id === taskId);
        if(result !== -1){
            tasks.splice(result, 1);
            setTasks(tasks.map(task => task));
        }else{
            console.log(`Task ${taskId} not found`);
        }
    }

    function onCompleteTask() {
        console.log('No information Jet!');
    }

  return(
    <>
    <table className='tableList'>
        <tr>
            <th>Title</th>
            <th>Comment</th>
            <th>Status</th>
            <th></th>
        </tr>
        {tasks.map(task => (
            <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.comment}</td>
                <td>{task.status}</td>
                <td>
                <td>
                    <li className='deleteTask' onClick={() => onDeleteTask(task.id)}><FaRegTrashAlt/></li>
                    <li className='doneTask' onClick={() => onCompleteTask(task.id)}><FaRegCheckCircle /></li>
                </td>
                </td>
                </tr>
            ))}                
    </table>
    </>
  )
}

export default GridTask;
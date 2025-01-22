import React, { useState, useEffect } from "react";
import { FaRegCheckCircle,FaRegTrashAlt } from "react-icons/fa";
import taskService from "../services/tasks";

const TableTasks = (props) => {

    

  return(
    <>
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
    </>
  )
}

export default TableTasks;
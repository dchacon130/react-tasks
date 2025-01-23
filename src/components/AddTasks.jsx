import React, { useState } from "react";
import tasksService from '../services/tasks';

const AddTask = (props) => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState('');

  const addTask = (event) => {
    event.preventDefault();
    const taksObject = {
      id: props.onQuantityTask,
      title: title, 
      comment: comment, 
      status: status
    }
    tasksService.create(taksObject).then(response => {
      console.log(response);
      props.onTaskCreated();
      props.onTaskToAdd(response);
    });
  }

  return(
    <div className='formDiv'>
      <form onSubmit={addTask}>
        <div>
          <label htmlFor="title">Title</label><br/>
          <input 
            type='text' 
            className='txtTitleTask' 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title' 
            required/>
        </div>
        <div>
          <label htmlFor='comment'>Comment</label><br/>
          <textarea 
            id="comment"
            className='txtCommnetTask' 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="5" 
            cols="55"></textarea>
        </div>
        <div>
          <label htmlFor='status'>Status</label><br/>
          <select 
            className='slStatusTask' 
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required>
            <option value={""}>Select status</option>
            <option value={"completed"}>Completed</option>
            <option value={"in progress"}>In progress</option>
            <option value={"pending"}>Pending</option>
          </select>
          <button className='buttonAdd' type='submit'>Add Task</button>
        </div>
      </form>
    </div>
  )
}

export default AddTask;
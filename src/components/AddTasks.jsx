import React, { useState } from "react";

const AddTask = (props) => {

  const [ tasks, setTasks ] = useState(props.tasks);
  const [ title, setTitle ] = useState('');
  const [ comment, setComment ] = useState('');

  const addNewTask = (event) => {
    event.preventDefault();
    const NewObject = {
      id: tasks.lenght + 1,
      title: title,
      comment: comment,
      
    }
  }

  return(
    <div className='formDiv'>
      <form>
        <div>
        <label className='lblTitleTask'>Title</label><br/>
        <input type='text' className='txtTitleTask' id='txtTitleTask' placeholder='Title' required/>
        </div>
        <div>
        <label className='lblCommentTask'>Comment</label><br/>
        <textarea id='txtCommnetTask' value={setComment} className='txtCommnetTask' rows="5" cols="55"></textarea>
        </div>
        <div>
        <label className='lblStatusTask'>Status</label><br/>
        <select className='slStatusTask' id='slStatusTask'>
          <option value={""}>Select</option>
          <option value={"completed"}>Completed</option>
          <option value={"in progress"}>In progress</option>
          <option value={"pending"}>Pending</option>
        </select>
        <button className='buttonAdd' type='button'>Add Task</button>
        </div>
      </form>
    </div>
  )
}

export default AddTask;
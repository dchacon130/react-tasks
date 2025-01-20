import './App.css'
import { FaRegCheckCircle,FaRegTrashAlt } from "react-icons/fa";

function AddTask(){
  return(
    <div className='formDiv'>
      <form>
        <div>
        <label className='lblTitleTask'>Title</label><br/>
        <input type='text' className='txtTitleTask' id='txtTitleTask' placeholder='Title' required/>
        </div>
        <div>
        <label className='lblCommentTask'>Comment</label><br/>
        <textarea id='txtCommnetTask' className='txtCommnetTask' rows="5" cols="55"></textarea>
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

function GridTask(){
  return(
    <>
    <h1>Task list</h1>
    <table className='tableList'>
      <tr>
        <th>Title</th>
        <th>Comment</th>
        <th>Status</th>
        <th></th>
      </tr>
      <tr>
        <td>Task001</td>
        <td>asdf asdf asf</td>
        <td>In progress</td>
        <td>
          <li className='doneTask'><FaRegCheckCircle /></li>
          <li className='deleteTask'><FaRegTrashAlt /></li>
        </td>
      </tr>
    </table>
    </>
  )
}

function App() {

  return (
    <>
      <h1>Task list</h1>
      <AddTask/>
      <GridTask/>
    </>
  )
}

export default App

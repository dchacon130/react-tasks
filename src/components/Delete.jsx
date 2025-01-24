import React, {useState} from "react";
import tasksService from '../services/tasks';
import { FaRegTrashAlt } from "react-icons/fa";

const Delete = (props) => {
    const [ confirmarEliminacion, setConfirmarEliminacion ] = useState(false);

    const handleClick = () => {
        setConfirmarEliminacion(true)
    };

    const handleConfirmDelete = () => {
        tasksService.setDelete(props.taskId)
        .then(response => {
            console.log(`Response: ${response.data} | success: ${response.success}`);
        }).catch(error => {
            console.error('Error: ', error);
        })
        setConfirmarEliminacion(false);
    }

    const handleCancelDelete = () => {
        setConfirmarEliminacion(false);
    }

    return(
        <div className="delete-icon" onClick={handleClick} aria-label="Delete">
            <FaRegTrashAlt />
            {
                confirmarEliminacion && (
                    <div className="confirmacion">
                        <p>Are you sure to delete this task?</p>
                        <button onClick={handleConfirmDelete}>Yes</button>
                        <button onClick={handleCancelDelete}>No</button>
                    </div>
                )
            }
        </div>
    );
}

export default Delete;
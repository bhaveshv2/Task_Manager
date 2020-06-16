import React from 'react';
import './TaskItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaskItem = (props)=>{
    const {title,date,onDelete,onEdit} =props;
    return (
        <div className="task-item">
            <li className="list-group-item d-flex justify-content-between my-2 bg-transparent border border-white">
                <h6>{title}</h6>
                <h6>Deadline :{date}</h6>
                <div className="task-icons">
                    <span className="mx-2 text-success" onClick={onEdit}>
                        <FontAwesomeIcon icon={['fas','pen']}/>
                    </span>
                    <span className="text-danger mx-2" onClick={onDelete}>
                        <FontAwesomeIcon icon={['fas','trash']}/>
                    </span>
                </div>
            </li>
        </div>
    )
}

export default TaskItem;

import React from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends React.Component{
    render(){
        const { tasks, onDelete, onEdit }=this.props;
        return(
            <ul className="list-group my-5 bg-dark text-white p-4">
                <h3 className="text-center">Task List</h3>
                {
                    tasks.map((task)=>{
                        return (
                            <TaskItem key={task.id} title={task.task} date={task.date} onDelete={()=>onDelete(task.id)} onEdit={()=>onEdit(task.id)}/>
                        )
                    })
                }
            </ul>
        )
    }
}

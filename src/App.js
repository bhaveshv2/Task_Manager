import React from 'react';
import TaskList from './TaskList';
import './App.css';
// import uuid from 'uuid';   

class App extends React.Component{
  constructor(){
    super();
    this.state={
      tasks:[],
      id:Math.ceil(Math.random()*1000),
      task:'',
      date:'',
      editTask:false
    }
  }

  handleTask = (e)=>{
    this.setState({
      task:e.target.value
    });
  };

  handleDate=(e)=>{
    this.setState({
      date:e.target.value
    })
  }

  handleAdd=(e)=>{
    e.preventDefault();

    const newTask = {
      id:this.state.id,
      task:this.state.task,
      date:this.state.date
    }

    const updatedTasks = [...this.state.tasks,newTask]; //Used spread operator so that updatedTasks array got all the items in tasks array

    this.setState({
      tasks:updatedTasks,
      id:Math.ceil(Math.random()*1000),
      task:'',
      date:'',
      editTask:false
    })

    console.log(newTask);
  };

  handleDelete = (id)=>{
    const items = this.state.tasks.filter((item)=>item.id!==id);
    
    this.setState({
      tasks:items
    });
  };

  handleEdit=(id)=>{
    const items = this.state.tasks.filter((item)=>item.id!==id);
    
    const selectItem = this.state.tasks.find(item=>item.id===id);

    this.setState({
      tasks:items,
      task:selectItem.task,
      date:selectItem.date,
      editTask:true,
      id:id
    })
  }

  render(){
    return (
      <div className="container-fluid">
          <div id="main-container" className="container">
            <h1 style={{textAlign:'center',margin:'20px 0px'}}>Task Manager</h1>
            <form className="form-group bg-secondary p-5" onSubmit={this.handleAdd}>
                <input type="text" className="form-control my-3" placeholder="Enter the task here..." value={this.state.task} onChange={this.handleTask}/>
                <input type="date" className="form-control my-3" placeholder="dd/mm/yyyy" value={this.state.date} onChange={this.handleDate}/>
                {
                  this.state.editTask
                  ?
                  <button type="submit" className="btn btn-success ml-1 mt-3 font-weight-bold" id="add">
                    Update Task
                  </button>
                  :
                  <button type="submit" className="btn btn-danger ml-1 mt-3 font-weight-bold" id="add">
                    + Add Task
                  </button>
                }
                
            </form>
            <TaskList tasks={this.state.tasks} onDelete={this.handleDelete} onEdit={this.handleEdit}/>
          </div>
      </div>
    );
  }
}

export default App;

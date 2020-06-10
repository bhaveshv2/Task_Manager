import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App container-fluid">
        <div id="main-container" className="container">

            

            <form className="form-group mt-5">
                <input className="form-control" placeholder="Enter the task here..."/>
                <input id="add" className="btn btn-primary" value="+ ADD TASK"/>
            </form>



        </div>
    </div>
  );
}

export default App;

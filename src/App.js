import React from 'react';
import './css/bootstrap.min.css'
import './css/todolist.css'
// import './javascripts/jquery.min.js'
// import './javascripts/popper.min.js'
// import './javascripts/bootstrap.min.js'
import './App.css';

import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App">
        {/* <TodoItem title="First job to do" options = {{isDone: true}} />
        <TodoItem title="Second job to do" options = {{isDone: false}} />
        <TodoItem title="Last job to do" options = {{isDone: false}} /> */}
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="container d-flex justify-content-center">
                <div className="col-lg-12">
                    <div className="card px-3">
                        <div className="card-body">
                            <h2 className="card-title my-3">Awesome Todo list</h2>
                            <div className="add-items d-flex">
                              <input type="text" className="form-control todo-list-input" placeholder="What do you need to do today?" /> 
                              <button className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button> 
                            </div>
                            <div className="list-wrapper">
                              <ul className="d-flex flex-column-reverse todo-list">
                                <li>
                                    <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox"/> For what reason would it be advisable. <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li className="completed">
                                    <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" checked /> For what reason would it be advisable for me to think. <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li>
                                    <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox"/> it be advisable for me to think about business content? <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li>
                                    <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox"/> Print Statements all <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li className="completed">
                                    <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" checked /> Call Rampbo <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li>
                                    <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox"/> Print bills <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
                                </li>
                              </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;

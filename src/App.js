import React, { Component } from 'react';
import './css/bootstrap.min.css'
import './css/todolist.css'
// import './javascripts/jquery.min.js'
// import './javascripts/popper.min.js'
// import './javascripts/bootstrap.min.js'
import './App.css';

import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super()
    this.listItems = [
      {
        title: 'For what reason would it be advisable.',
        isCompleted: false
      },
      {
        title: 'For what reason would it be advisable for me to think.',
        isCompleted: true
      },
      {
        title: 'It be advisable for me to think about business content?',
        isCompleted: false
      },
      {
        title: 'Print Statements all',
        isCompleted: false
      },
      {
        title: 'Call Rampbo',
        isCompleted: true
      },
      {
        title: 'Print bills',
        isCompleted: false
      }
    ]
  };

  render() {
    return (
      <div className="App">
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
                                  {
                                    this.listItems.map((item, index) => <TodoItem isCompleted={item.isCompleted} key={index} title={item.title} />)
                                  }
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
}

export default App;

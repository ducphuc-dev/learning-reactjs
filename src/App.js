import React, { Component } from 'react';
import './css/bootstrap.min.css'
import './css/todolist.css'
// import './javascripts/jquery.min.js'
// import './javascripts/popper.min.js'
// import './javascripts/bootstrap.min.js'
import './App.css';

import TodoItem from './components/TodoItem';

const textHolders = ['What do you need to do today?', 'What next you want to do?', 'Type your job!']
class App extends Component<{}, any> {

  // Avoid error: Property 'name of variable' does not exist on type 'Component's name' 
  refNewJobItem: any;

  // constructor function
  constructor(props) {
    super(props)

    // state
    this.state = {
      placeholderForInput: 0,
      listItems: [
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
    }

    this.refNewJobItem = React.createRef();

    // this.toggleComplete = this.toggleComplete.bind(this)
    this.createNewJobItem = this.createNewJobItem.bind(this)

    // change state
    setInterval(() => {
      this.setState({
        placeholderForInput: this.getPlaceholderInput(this.state.placeholderForInput)
      })
    }, 2000);
  };

  // change placeholder of input new job
  getPlaceholderInput(currentPosition) {
    switch (currentPosition) {
      case textHolders.length - 1:
        return 0
      default:
        return currentPosition + 1
    }
  }

  // handle toggle complete job
  toggleComplete(key) {
    var arrListItems = this.state.listItems
    arrListItems[key].isCompleted = !arrListItems[key].isCompleted
    this.setState({
      listItems: arrListItems
    })
  }

  // create new job
  createNewJobItem() {
    console.log(this.refNewJobItem.current.value)
    var arrListItems = this.state.listItems
    arrListItems.push({
      title: this.refNewJobItem.current.value,
      isCompleted: false
    })
    this.setState({
      listItems: arrListItems
    })
  }

  // render
  render() {
    const {placeholderForInput} = this.state // this syntax only useable from ES6
    const {listItems} = this.state 
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
                                {/* DMSt: demo for state */}
                                <input type="text" className="form-control todo-list-input" ref={this.refNewJobItem} placeholder={textHolders[placeholderForInput]} />
                                {/* end DMSt */}
                                <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={this.createNewJobItem}>Add</button> 
                              </div>
                              <div className="list-wrapper">
                                <ul className="d-flex flex-column-reverse todo-list">
                                  {
                                    listItems.length > 0 && listItems.map((item, index) => <TodoItem item={item} key={index} onClick={this.toggleComplete.bind(this,index)} />)
                                    // listItems.length > 0 && listItems.map((item, index) => <TodoItem item={item} key={index} onClick={() => this.toggleComplete(index)} />)
                                  }
                                  {
                                  listItems.length === 0 &&
                                  <div className="App">
                                    <p className="alert alert-info">You have not job yet</p>
                                  </div>
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

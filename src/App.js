import React, { Component } from 'react';
import classNames from 'classnames'
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
      valueInput: '',
      currentTab: 'all',
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
    this.onTypeJob = this.onTypeJob.bind(this)
    this.onChangeTypeJob = this.onChangeTypeJob.bind(this)
    // this.deleteJob = this.deleteJob.bind(this)

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
  toggleComplete(item) {
    const isCompleted = item.isCompleted
    const {listItems} = this.state
    const index = listItems.indexOf(item)

    this.setState({
      listItems: [
        ...listItems.slice(0,index),
        {
          ...item,
          isCompleted: !isCompleted
        },
        ...listItems.slice(index + 1)
      ]
    })
  }

  // create new job - demo for REF in React
  createNewJobItem() {
    const title = this.refNewJobItem.current.value
    if(title.trim()) {
      const {listItems} = this.state
      this.setState({
        listItems: [
          ...listItems,
          {
            title: title,
            isCompleted: false
          }
        ]
      })
    }
    else {
      alert('Job can not be empty')
    }
  }

  // change value of Input when type
  onChangeTypeJob(event) {
    this.setState({
      valueInput: event.target.value
    })
  }

  // handle key up of input job
  onTypeJob(event) {
    const title = event.target.value
    if(event.keyCode === 13) {
      if(title.trim()) {
        const {listItems} = this.state
        this.setState({
          listItems: [
            ...listItems,
            {
              title: title,
              isCompleted: false
            }
          ]
        })
      }
      else {
        alert('Job can not be empty')
      }
      this.setState({
        valueInput: ''
      })
    }
  }
  
  // Delete a job
  deleteJob(item) {
    const {listItems} = this.state
    const index = listItems.indexOf(item)
    this.setState({
      listItems: [
        ...listItems.slice(0, index),
        ...listItems.slice(index + 1)
      ]
    })
  }

  // change tab
  onChangeTab(tab) {
    this.setState({
      currentTab: tab
    })
  }

  // render
  render() {
    const {placeholderForInput} = this.state // this syntax only useable from ES6
    const {listItems, valueInput, currentTab} = this.state
    var displayItems = [...listItems]
    if(currentTab === 'active') {
      displayItems = listItems.filter((item) => item.isCompleted === false)
    }
    else if(currentTab === 'completed'){
      displayItems = listItems.filter((item) => item.isCompleted === true)
    } 
    return (
      <div className="App">
          <div className="page-content page-container" id="page-content">
            <div className="padding">
              <div className="container d-flex justify-content-center">
                  <div className="col-lg-12">
                      <div className="card px-3">
                          <div className="card-body">
                              <h2 className="card-title my-3">Awesome Todo list</h2>
                                {
                                  listItems.length > 0 &&
                                  <p>{listItems.length} {listItems.length > 1 ? 'items' : 'item'} left</p>
                                }
                              <div className="add-items d-flex">
                                {/* DMSt: demo for state */}
                                <input type="text" value={valueInput} onChange={this.onChangeTypeJob} className="form-control todo-list-input" onKeyUp={this.onTypeJob} ref={this.refNewJobItem} placeholder={textHolders[placeholderForInput]} />
                                {/* end DMSt */}
                                <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={this.createNewJobItem}>Add</button> 
                              </div>
                              <div className="list-wrapper">
                                <ul className="d-flex flex-column-reverse todo-list">
                                  {
                                    // listItems.length > 0 && listItems.map((item, index) => <TodoItem item={item} key={index} onClick={this.toggleComplete.bind(this,index)} />)
                                    displayItems.length > 0 && displayItems.map((item, index) => <TodoItem item={item} key={index} onDeleteJob={() => this.deleteJob(item)} onToggleJobComplete={() => this.toggleComplete(item)} />)
                                  }
                                  {
                                  displayItems.length === 0 &&
                                  <div className="App">
                                    <p className="alert alert-info">You have not job yet</p>
                                  </div>
                                  }
                                </ul>
                              </div>
                          </div>
                          <div className="card-footer">
                            <ul className="filter-nav">
                              <li className={classNames('filter-item mx-2', { active:  currentTab === 'all'})} onClick={() => this.onChangeTab('all')}>All</li>
                              <li className={classNames('filter-item mx-2', { active:  currentTab === 'active'})} onClick={() => this.onChangeTab('active')}>Active</li>
                              <li className={classNames('filter-item mx-2', { active:  currentTab === 'completed'})} onClick={() => this.onChangeTab('completed')}>Completed</li>
                            </ul>
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

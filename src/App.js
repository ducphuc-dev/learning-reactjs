import React, {useState, useEffect } from 'react';
import classNames from 'classnames';
import './css/bootstrap.min.css';
import './css/todolist.css';
import './App.css';

import TodoItem from './components/TodoItem';

const textHolders = ['What do you need to do today?', 'What next you want to do?', 'Type your job!'];
const listItemDatas = [
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

export default function() {
    const [placeholderForInput, setPlaceHolderForInput] = useState(0);
    const [valueInput, setValueInput] = useState('');
    const [currentTab, setCurrentTab] = useState('all');
    const [listItems, setListItem] = useState(listItemDatas);
    const [refNewJobItem] = useState(React.createRef());

    // change placeholder of input new job
    var getPlaceholderInput = async (currentPosition) => {
        switch (currentPosition) {
        case textHolders.length - 1:
            return 0;
        default:
            return currentPosition + 1;
        }
    }

    useEffect(() => {
        refNewJobItem.current.focus();
        // change state
        var x = setInterval(() => {
            getPlaceholderInput(placeholderForInput).then((data) => {
                setPlaceHolderForInput(data);
            })
            clearInterval(x)
        }, 3000);   
    });

    // handle toggle complete job
    var toggleComplete = (item) => {
        const index = listItems.indexOf(item)
        const updatedListItems = [
            ...listItems.slice(0, index),
            {
                ...item,
                isCompleted: !item.isCompleted
            },
            ...listItems.slice(index + 1)
        ]
        setListItem(updatedListItems)
    }

    // create new job - demo for REF in React
    var createNewJobItem = () => {
        const title = refNewJobItem.current.value
        if (title.trim()) {
            const newListItems = [
                ...listItems,
                {
                    title: title,
                    isCompleted: false
                }
            ]
            setListItem(newListItems)
            setValueInput('')
        }
        else {
            alert('Job can not be empty')
        }
    }

    // change value of Input when type
    var onChangeTypeJob = (event) => {
        setValueInput(event.target.value) 
    }

    // handle key up of input job
    var onTypeJob = (event) => {
        const title = event.target.value
        if(event.keyCode === 13) {
            if(title.trim()) {
                const newListItems = [
                    ...listItems,
                    {
                        title: title,
                        isCompleted: false
                    }
                ]
                setListItem(newListItems)
            }
            else {
                alert('Job can not be empty')
            }
            setValueInput('')
        }
    }

    // Delete a job
    var deleteJob = (item) => {
        const index = listItems.indexOf(item)
        const deletedListItems = [
            ...listItems.slice(0, index),
            ...listItems.slice(index + 1)
        ]
        setListItem(deletedListItems)
    }

    // change tab
    var onChangeTab = (tab) => {
        setCurrentTab(tab)
    }

    // on filter list items
    var filterListItems = () => {
        if(currentTab === 'active') {
            return listItems.filter((item) => item.isCompleted === false)
        }
        else if(currentTab === 'completed'){
            return listItems.filter((item) => item.isCompleted === true)
        }
        else {
            return listItems
        } 
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
                                        <input type="text" value={valueInput} onChange={(e) => onChangeTypeJob(e)} className="form-control todo-list-input" onKeyUp={(e) => onTypeJob(e)} ref={refNewJobItem} placeholder={textHolders[placeholderForInput]} />
                                        <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={createNewJobItem}>Add</button> 
                                    </div>
                                    <div className="list-wrapper">
                                        <ul className="d-flex flex-column-reverse todo-list">
                                            {
                                                filterListItems().length > 0 && filterListItems().map((item, index) => 
                                                    <TodoItem item={item} key={index} onDeleteJob={() => deleteJob(item)} onToggleJobComplete={() => toggleComplete(item)} />
                                                )
                                            }
                                            {
                                                filterListItems().length === 0 &&
                                                <div className="App">
                                                    <p className="alert alert-info">You have not job yet</p>
                                                </div>
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <ul className="filter-nav">
                                        <li className={classNames('filter-item mx-2', { active:  currentTab === 'all'})} onClick={() => onChangeTab('all')}>All</li>
                                        <li className={classNames('filter-item mx-2', { active:  currentTab === 'active'})} onClick={() => onChangeTab('active')}>Active</li>
                                        <li className={classNames('filter-item mx-2', { active:  currentTab === 'completed'})} onClick={() => onChangeTab('completed')}>Completed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )

}
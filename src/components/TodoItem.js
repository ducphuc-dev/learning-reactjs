import React from 'react';

export default function(props) {
    const {item, onToggleJobComplete, onDeleteJob} = props
    return (
        <li className={item.isCompleted === true ? 'completed' : ''}>
            <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" checked={item.isCompleted} onChange={onToggleJobComplete} /> {item.title} <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline" onClick={onDeleteJob}></i>
        </li>
    );
}
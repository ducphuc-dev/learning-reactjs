import React, { Component } from 'react';
class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.description = props.title;
    }

    render() {
        const {item, onClick} = this.props
        return (
            <li className={this.props.item.isCompleted === true ? 'completed' : ''}>
                <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" defaultChecked={item.isCompleted} onClick={onClick} /> {item.title} <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
            </li>
        );
    }
}

export default TodoItem;
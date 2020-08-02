import React, { Component } from 'react';
import PropTypes from 'prop-types'
class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.description = props.title;
    }

    render() {
        const {item, onDeleteJob, onToggleJobComplete} = this.props
        return (
            <li className={this.props.item.isCompleted === true ? 'completed' : ''}>
                <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" checked={item.isCompleted} onChange={onToggleJobComplete} /> {item.title} <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline" onClick={onDeleteJob}></i>
            </li>
        );
    }

    componentDidMount() {
        console.log('Render Job Item')
    }

    componentDidUpdate() {
        console.log('Updated Job Item')
    }

    componentWillUnmount() {
        console.log('Job Item will be removed')
    }
}

// Define props type
TodoItem.propTypes = {
    item: PropTypes.shape({
        isCompleted: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }),
    onToggleJobComplete: PropTypes.func
}

export default TodoItem;
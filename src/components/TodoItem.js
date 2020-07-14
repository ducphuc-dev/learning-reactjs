import React, { Component } from 'react';
class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.description = props.title;
    }

    render() {
        return (
            <div className="TodoItem">
                <p className={(this.props.options.isDone == true ? 'done-job ' : '') + 'job-title text-info'} data-description={this.description}>{this.props.title}</p>
            </div>
        );
    }
}

export default TodoItem;
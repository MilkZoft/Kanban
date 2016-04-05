'use strict';

import React from 'react';

class Note extends React.Component {
    constructor(props) {
        super(props);

        // Track editing state.
        this.state = {
            editing: false
        };
    }

    render() {
        if (this.state.editing) {
            return this.renderEdit();
        }

        return this.renderNote();
    }

    renderEdit = () => {
        return <input
            type="text"
            ref={
                (e) => e ? e.selectionStart = this.props.task.length : null
            }
            autoFocus={true}
            defaultValue={this.props.task}
            onBlur={this.finishEdit}
            onKeyPress={this.checkEnter} />;
    };

    renderNote = () => {
        const onDelete = this.props.onDelete;

        return (
            <div onClick={this.edit}>
                <span className="task">{this.props.task}</span> &nbsp;
                {onDelete ? this.renderDelete() : null}
            </div>
        );
    };

    edit = () => {
        this.setState({
            editing: true
        });
    };

    checkEnter = (e) => {
        if (e.key === 'Enter') {
            this.finishEdit(e);
        }
    };

    finishEdit = (e) => {
        const value = e.target.value;

        if (this.props.onEdit) {
            this.props.onEdit(value);

            // Exit edit mode
            this.setState({
                editing: false
            });
        }
    };

    renderDelete = () => {
        return <button className="delete-note" onClick={this.props.onDelete}>x</button>;
    };
}

export default Note;

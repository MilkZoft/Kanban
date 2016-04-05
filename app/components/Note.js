import React from 'react';

class Note extends React.Component {
    constructor(props) {
        super(props);

        // Track editing state.
        this.state = {
            editing: false
        };
    }

    handleEdit = () => {
        this.setState({
            editing: true
        });
    };

    handleCheckEnter = (e) => {
        if (e.key === 'Enter') {
            this.handleFinishEdit(e);
        }
    };

    handleFinishEdit = (e) => {
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

    renderEdit = () => {
        return (
            <input
                autoFocus
                defaultValue={this.props.task}
                onBlur={this.handleFinishEdit}
                onKeyPress={this.handleCheckEnter}
                ref={
                    (e) => e ? e.selectionStart = this.props.task.length : null
                }
                type="text"
            />
        );
    };

    renderNote = () => {
        const onDelete = this.props.onDelete;

        return (
            <div onClick={this.handleEdit}>
                <span className="task">{this.props.task}</span> &nbsp;
                {onDelete ? this.renderDelete() : null}
            </div>
        );
    };

    render() {
        if (this.state.editing) {
            return this.renderEdit();
        }

        return this.renderNote();
    }
}

export default Note;

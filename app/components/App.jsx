'use strict';

import AltContainer from 'alt-container';
import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

class App extends React.Component {
    /**
     * @name: constructor
     * @description: Sets the current state.
     */
    constructor(props) {
        super(props);

        this.state = NoteStore.getState();
    }

    /**
     * @name: componentDidMount
     * @description: Is called before render()
     */
    componentDidMount() {
        NoteStore.listen(this.storeChanged);
    }

    /**
     * @name: componentWillUnmount
     * @description: Is called after render()
     */
    componentWillUnmount() {
        NoteStore.unlisten(this.storeChanged);
    }

    render() {
        const notes = this.state.notes;

        return (
            <div>
                <button className="add-note" onClick={this.addNote}>+</button>

                <Notes
                    notes={notes}
                    onEdit={this.editNote}
                    onDelete={this.deleteNote} />
            </div>
        );
    }

    storeChanged = (state) => {
        this.setState(state);
    }

    /**
     * @name: addNote
     * @description: Adds a new note
     */
    addNote = () => {
        NoteActions.create({
            task: 'New Task'
        });
    };

    editNote = (id, task) => {
        NoteActions.update({id, task});
    };

    deleteNote = (id, e) => {
        e.stopPropagation();

        NoteActions.delete(id);
    };
}

export default App;

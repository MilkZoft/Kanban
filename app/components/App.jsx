'use strict';

import AltContainer from 'alt-container';
import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

class App extends React.Component {
    render() {
        return (
            <div>
                <button className="add-note" onClick={this.addNote}>+</button>
                <AltContainer
                    stores={[NoteStore]}
                    inject={{
                        notes: () => NoteStore.getState().notes
                    }}
                >
                    <Notes onEdit={this.editNote} onDelete={this.deleteNote} />
                </AltContainer>
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

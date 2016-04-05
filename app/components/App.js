import AltContainer from 'alt-container';
import React from 'react';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

class App extends React.Component {
    /**
     * @name: addNote
     * @description: Adds a new note
     */
    handleAddNote = () => {
        NoteActions.create({
            task: 'New Task'
        });
    };

    handleDeleteNote = (id, e) => {
        e.stopPropagation();

        NoteActions.delete(id);
    };

    handleEditNote = (id, task) => {
        NoteActions.update({id, task});
    };

    storeChanged = (state) => {
        this.setState(state);
    };

    render() {
        return (
            <div>
                <button className="add-note" onClick={this.handleAddNote}>+</button>
                <AltContainer
                    inject={{
                        notes: () => NoteStore.getState().notes
                    }}
                    stores={[NoteStore]}
                >
                    <Notes
                        onDelete={this.handleDeleteNote}
                        onEdit={this.handleEditNote}
                    />
                </AltContainer>
            </div>
        );
    }
}

export default App;

import React from 'react';
import Note from './Note';

export default ({notes, onEdit, onDelete}) => {
    return (
        <ul className="notes">
            {notes.map(note =>
                <li className="note" key={note.id}>
                    <Note
                        onDelete={onDelete.bind(null, note.id)}
                        onEdit={onEdit.bind(null, note.id)}
                        task={note.task}
                    />
                </li>
            )}
        </ul>
    );
};

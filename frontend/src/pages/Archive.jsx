import React from "react";
import { NoteArchive } from "../components/NoteArchive";

export const Archive = ({ show_archive, notes, setShow_archive, setShow_notes, setNotes, filter_list }) => {
    if (show_archive == false) return null
    return (
        <section>
            <header>
                <button onClick={() => (setShow_archive(false), setShow_notes(true))}>«</button>
            </header>
            <div className="notes_container">
                {notes.map(note => <NoteArchive key={note.id} note={note} setNotes={setNotes} notes={notes} setShow_archive={setShow_archive} setShow_notes={setShow_notes} filter_list={filter_list} />)}
            </div>
        </section>
    )
}
import { useState } from "react";
import { EditNotes } from "../pages/EditNotes";

export const NoteItem = ({ note, setShow_notes, setShow_edit, setId_edit, notes, setNotes, filter_list }) => {
    if (note.archived == true) return null
    if (!note.categories.includes(filter_list) && filter_list != "") return null


    const [archived, setArchived] = useState(true)

    const archive = () => {
        const newNote = { ...note, archived }
        const newNotes = notes.map(item => {
            if (item.id == note.id) {
                item = newNote
            }
            return item
        })
        setNotes(newNotes)

    }

        return (
            <section className="note_display">
                <div onClick={() => (setShow_notes(false), setShow_edit(true), setId_edit(note.id))}>
                    <h4>{note.title.length > 50 ? (note.title.substring(0, 50)) + '...' : note.title}</h4>
                    <p>{note.date}</p>
                </div>
                <button onClick={archive}>Archive</button>
            </section>
        )

}
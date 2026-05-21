import { useState } from "react"

export const NoteArchive = ({ note, setNotes, notes, filter_list }) => {
    if (note.archived == false) return null
    if (!note.categories.includes(filter_list) && filter_list != "") return null

    const [archived, setArchived] = useState(false)

    const unarchive = () => {
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
            <div>
            <h4>{note.title.length > 50 ? (note.title.substring(0, 50)) + '...' : note.title}</h4>
            <p>{note.date}</p>
            <button onClick={unarchive}>Unarchive</button>
            </div>
        </section>
    )
}
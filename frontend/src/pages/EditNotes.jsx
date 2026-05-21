import React, { useState } from "react";
import { useCreateDate } from "../components/useCreateDate";

export const EditNotes = ({ show_edit, setShow_edit, setShow_notes, id_edit, notes, setNotes, category_list }) => {
    if (show_edit == false) return null
    const note = notes.find((item) => item.id == id_edit)
    const [title, setTitle] = useState(note.title)
    const [body, setBody] = useState(note.body)
    const [categories, setCategories] = useState(note.categories)
    const date = useCreateDate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title && body) {
            const newNote = { ...note, title, body, date, categories }
            const newNotes = notes.map(item => {
                if (item.id == id_edit) {
                    item = newNote
                }
                return item
            })
            console.log(newNotes)
            setNotes(newNotes)
        }
        returnToMenu()
    }

    const handleDelete = () => {
        const newNotes = notes.filter(item => item.id != id_edit)
        setNotes(newNotes)
        returnToMenu()
        //Extra: Create delete confirmation
    }

    const returnToMenu = () => {
        setShow_edit(false), setShow_notes(true)
    }

    const asignCategory = (category) => {
        if (categories.includes(category)) {
            const newCategories = categories.filter(categories => categories != category)
            setCategories(newCategories)
            console.log(categories)
        } else {
            const newCategories = [...categories, category]
            setCategories(newCategories)
            console.log(categories)
        }
    }

    return (
        <section>
            <header className="create-note__header">
                <button className="btn cat_btn" onClick={() => (setShow_edit(false), setShow_notes(true))}>«</button>
                <button className="btn add_btn" onClick={handleSubmit}>Save</button>
                <button className="btn bad_btn" onClick={handleDelete}>Delete</button>
            </header>
            <form className="create-note__form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea rows={28} placeholder="Note details..." value={body} onChange={(e) => setBody(e.target.value)} />
            </form>
            {category_list.map(category =>
                <div>
                    <input type="checkbox" value={category} onClick={() => asignCategory(category)} checked={(categories.includes(category))} />
                    <label>{category}</label>
                </div>)}
        </section>
    )
}
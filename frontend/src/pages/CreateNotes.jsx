import React, { useState } from "react";
import { useCreateDate } from "../components/useCreateDate";
import {v4 as uuid} from 'uuid'

export const CreateNotes = ({show_create, setShow_create, setShow_notes, setNotes, category_list}) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [archived, setArchived] = useState(false)
    const [categories, setCategories] = useState([])
    const date = useCreateDate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title && body) {
            const note = {id: uuid(), title, body, date, archived, categories}
            console.log(note)
            setNotes(prevNotes => [note, ...prevNotes])
            returnToMenu()
        }
    }

    const returnToMenu = () => {
        setShow_create(false), setShow_notes(true)
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

    if (show_create == false) return null
    return (
        <section>
            <header className="create-note__header">
                <button className="btn cat_btn" onClick={() => (setShow_create(false), setShow_notes(true))}>«</button>
                <button className="btn add_btn" onClick={handleSubmit}>Save</button>
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
import React from "react";
import { useState } from 'react'
import { NoteItem } from "../components/NoteItem";
import { CreateNotes } from "./CreateNotes";


export const Notes = ({ show_notes, setShow_create, setShow_notes, notes, setShow_edit, setId_edit, setShow_archive, setNotes, setShow_categories, filter_list }) => {
    if (show_notes == false) return null
    return (
        <section>
            <header className="notes_header">
                <h2>My notes</h2>
                {/* <input type='text' autoFocus placeholder="Search..."></input>
                <button className="btn">🔎</button> */}
            </header>
            <div className="notes_container">
                {notes.map(note => <NoteItem key={note.id} note={note} setShow_notes={setShow_notes} setShow_edit={setShow_edit} setId_edit={setId_edit} notes={notes} setNotes={setNotes} filter_list={filter_list} />)}
            </div>
            <button className="btn add_btn" onClick={() => (setShow_create(true), setShow_notes(false))}>➕Create note</button>
            <button className="btn arc_btn" onClick={() => (setShow_archive(true), setShow_notes(false))}>⬆️Open Archive</button>
            <button className="btn cat_btn" onClick={() => (setShow_categories(true), setShow_notes(false))}>📦Categories</button>
        </section>
    )
}
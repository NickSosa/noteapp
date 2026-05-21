import { useEffect, useState } from 'react'
import { Notes } from './pages/Notes'
import { CreateNotes } from './pages/CreateNotes'
import { EditNotes } from './pages/EditNotes'
import { Archive } from './pages/Archive'
import { Categories } from './pages/Categories'
import { getNotes, getCategories } from './logic/api'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [show_notes, setShow_notes] = useState(true)
  const [show_create, setShow_create] = useState(false)
  const [show_edit, setShow_edit] = useState(false)
  const [show_archive, setShow_archive] = useState(false)
  const [show_categories, setShow_categories] = useState(false)
  const [id_edit, setId_edit] = useState()
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  const [category_list, setCategory_list] = useState(JSON.parse(localStorage.getItem('category_list')) || [])
  const [filter_list, setFilter_list] = useState("")

  //I tried, but in the end, I just couldn't find a way to map the data (given the format that the JSON fetched gives me).
  //I'm sorry
  /*const [notes, setNotes] = useState([])
    const [category_list, setCategory_list] = useState([]) 
      useEffect(() => {
      getNotes()
      .then(response => setNotes([response]))
      .then(console.log("Notes ", notes))
    }, [])
  
    useEffect(() => {
      getCategories()
      .then(response => setCategory_list([response]))
      .then(console.log("Categories ", category_list))
    }, []) */

  useEffect(() => { //Replace with Database
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  useEffect(() => { //Replace with Database
    localStorage.setItem('category_list', JSON.stringify(category_list))
  }, [category_list])

  const filter = (event) => {
    const category = event.target.value

    if (category == "--No filter applied--") {
      const newFilter = ""
      setFilter_list(newFilter)
    } else {
      const newFilter = category
      setFilter_list(newFilter) 
    }
    
  }

  return (
    <main id="app">
      <label> Filter by category: </label>
      <select onChange={filter}>
        <option>--No filter applied--</option>
        {category_list.map(category =>
          <option value={category}>{category}</option>
        )}
      </select>

      <Notes show_notes={show_notes} setShow_create={setShow_create} setShow_notes={setShow_notes} notes={notes} setShow_edit={setShow_edit} setId_edit={setId_edit} setShow_archive={setShow_archive} setNotes={setNotes} setShow_categories={setShow_categories} filter_list={filter_list} />
      <CreateNotes show_create={show_create} setShow_create={setShow_create} setShow_notes={setShow_notes} setNotes={setNotes} category_list={category_list} />
      <EditNotes show_edit={show_edit} setShow_edit={setShow_edit} setShow_notes={setShow_notes} id_edit={id_edit} notes={notes} setNotes={setNotes} category_list={category_list} />
      <Archive show_archive={show_archive} notes={notes} setShow_archive={setShow_archive} setShow_notes={setShow_notes} setNotes={setNotes} filter_list={filter_list} />
      <Categories show_categories={show_categories} setShow_categories={setShow_categories} setShow_notes={setShow_notes} category_list={category_list} setCategory_list={setCategory_list} />
    </main>
  )
}

export default App

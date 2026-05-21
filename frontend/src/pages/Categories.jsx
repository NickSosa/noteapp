import { useState } from 'react'
import { CategoryItem } from '../components/CategoryItem'

export const Categories = ({ show_categories, setShow_categories, setShow_notes, category_list, setCategory_list }) => {
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        if (name) {
            e.preventDefault()
            const newCategories = [...category_list, name]
            setCategory_list(newCategories)
        }
    }

    if (show_categories == false) return null
    return (
        <section>
            <button onClick={() => (setShow_categories(false), setShow_notes(true))}>«</button>
            <h4>Categories</h4>
            <div className="notes_container">
                {category_list.map(category => <CategoryItem key={category.id} category={category} setCategory_list={setCategory_list} category_list={category_list} />)}
            </div>
            ---
            <div>
                <h4>Create new categories</h4>
                <input type="text" placeholder='New category name' autoFocus value={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={handleSubmit}>Submit!</button>
            </div>
        </section>

    )
}
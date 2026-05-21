import { useState } from "react";

export const CategoryItem = ({category, setCategory_list, category_list}) => {

    const handleDelete = () => {
        const newCategories = category_list.filter(item => item != category)
        setCategory_list(newCategories)
    }

    return (
        <section className="category_display">
        <h4>{category}</h4>
        <button onClick={handleDelete}>Delete</button>    
        </section>
        
    )
}
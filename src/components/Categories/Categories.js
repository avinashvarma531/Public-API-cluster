import React from 'react';
import './Categories.css'

function Categories({ categories, setCategory }) {
    const mappedCategories = categories.map(category => {
        return (
            <a
                href="#main"
                className="category-item"
                key={category}
                onClick={() => setCategory(category)}
            >
                {category}
            </a>
        );
    })
    return (
        <div className="category-wrapper">
            <h2>Categories</h2>
            <hr />
            <div className="category-list">
                {mappedCategories}
            </div>
        </div>
    );
}

export default Categories;
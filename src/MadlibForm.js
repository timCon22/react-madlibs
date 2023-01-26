import React, { useState } from "react"

function NewMadlibForm(){
    const initialState = {
        noun1: "",
        noun2: "",
        adj: "",
        color: ""
    }

    const [formData, setFormData] = useState(initialState)
    

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const { noun1, noun2, adj, color } = formData
        alert(`There was a ${color} ${noun1} who loved a ${adj} ${noun2}`)
        setFormData(initialState)
    }


    return(
        <form onSubmit={handleSubmit}>
            <h1>Make a madlib!</h1>
            <h3>There was a (color) (first noun) who loved a (adjective) (second noun)</h3>
            <input 
                id="noun1"
                name="noun1"
                type="text"
                placeholder="First noun"
                onChange={handleChange}
                value={formData.noun1}
            />
            <input 
                id="noun2"
                name="noun2"
                type="text"
                placeholder="Second noun"
                onChange={handleChange}
                value={formData.noun2}
            />
            <input 
                id="adj"
                name="adj"
                type="text"
                placeholder="Adjective"
                onChange={handleChange}
                value={formData.adj}
            />
            <input 
                id="color"
                name="color"
                type="text"
                placeholder="Color"
                onChange={handleChange}
                value={formData.color}
            />
            <button>Get Story</button>
        </form>
    )
}

export default NewMadlibForm
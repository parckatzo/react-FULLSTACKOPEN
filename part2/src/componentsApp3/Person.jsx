import React from 'react'

const Person = ({name, number, handleDelete}) => {
     return (
        <div>
            <li>
                {name.name} {number.number}
                <button onClick={handleDelete}>Delete</button>
            </li>
        </div>
    )
}

export default Person
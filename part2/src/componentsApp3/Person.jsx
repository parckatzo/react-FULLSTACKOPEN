import React from 'react'

const Person = ({name, number}) => {
     return (
        <div>
            <li>{name.name} {number.number}</li>
        </div>
    )
}

export default Person
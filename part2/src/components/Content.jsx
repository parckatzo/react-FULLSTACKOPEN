import React from 'react'
import Part from './Part'

const Content = ({parts}) => {

    const total = parts.reduce((a,b) =>{
        console.log("el reducer", a , b.exercises)
        return a + b.exercises ; //para objetos en un array sumar a + b.objeto
    }, 0)

    console.log(total)
  return (
    <div>
        {parts.map(parts => 
            <Part key={parts.id} name={parts.name} exercises={parts.exercises}/>
            )}
        <p><strong>Total of {total} exercises</strong></p>
    </div>
  )
}

export default Content
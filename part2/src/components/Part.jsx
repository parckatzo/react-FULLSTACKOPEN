import React from 'react'

const Part = (props) => {
    console.log("Part",props)
  return (
    <div>{props.name} {props.exercises}</div>
  )
}

export default Part
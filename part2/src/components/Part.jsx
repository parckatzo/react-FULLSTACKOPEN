import React from 'react'

const Part = (props) => {
    console.log(props)
  return (
    <div>{props.name} {props.exercises}</div>
  )
}

export default Part
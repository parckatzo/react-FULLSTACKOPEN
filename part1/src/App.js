import { useState } from 'react';
import { AppDos } from './AppDos';

const Header = (props) =>{
  return(
    <div>{props.course}</div>  
  )
}


const Part = (props) => {
  console.log("parts",props)
  return (
    <p>
      {props.parts.name} {props.parts.exercises}
    </p>
  )
}

const Content = (props) => {
  console.log("Content", props)
  return (
    <div>
      <p> 
        <Part parts={props.parts[0]}/>
        <Part parts={props.parts[1]}/>
        <Part parts={props.parts[2]}/> 
      </p>
    </div>
  )
}


const Total = (props) => {

return(
  <p>Number of exercises {props.parts.reduce((total, part) => part.exercises + total, 0)}
  </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Cuco />
      <AppDos></AppDos>
    </div>
  )
}
export default App


const Cuco = () => {

  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => { 
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }
  return (
    <div>
      <Display counter={counter}/>
      <Button 
      handleClick={increaseByOne}
      text="plus"
      />
      <Button 
      handleClick={setToZero}
      text="zero"
      />
      <Button 
      handleClick={decreaseByOne}
      text="minus"
      />
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({handleClick, text}) => 
    <button onClick={handleClick}>
       {text}
    </button>


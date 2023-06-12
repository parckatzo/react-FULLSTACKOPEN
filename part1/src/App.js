import { useState } from 'react';
import { AppDos } from './AppDos';
import { AppTres } from './AppTres';
import { Unicafe } from './Unicafe';

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
      <AppTres></AppTres>
      <Unicafe></Unicafe>
      <Anecdotes></Anecdotes>
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


//--------------------------------------------------
const Anecdotes= () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]



  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Uint8Array(anecdotes.length)) //Creamos un array de length anecdotes que contengan numeros 0
 


  const handleClick = () =>{
    setSelected(Math.floor(Math.random() * anecdotes.length)) //Math.random + los 8 index de {vote}
  }

  const handleClickVote = () =>{
    const copyPoints = [...vote] //Crea una copia del array (no se deben mutar)
    copyPoints[selected]+= 1 //le agregamos 1 voto al array selecionado por el numero random
    setVote(copyPoints)
    console.log(...vote)
  }

  const mostVotes = vote.indexOf(Math.max(...vote)) //sacamos el numero mas alto del array


  return (
    <div className='anecdotes'>
      <h1>Anecdote of the day</h1> 
      {anecdotes[selected]}
      <br/>
      has {vote[selected]} votes
      <br/>
      <button onClick={handleClickVote}>vote</button>
      <button onClick={handleClick}>random</button>
      <br />
      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVotes]} 
      <br />
      has {vote[mostVotes]} votes
    </div>
  )
}


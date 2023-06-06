const Header = (props) =>{
  return(
    <div>{props.course}</div>  
  )
}
const Part = props =>{
  <p>
    {props.part.name} {props.part.exercises}
  </p>
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      {props.name} {props.exercises}
    </div>
  )
}


const Total = (props) => <p>Number of exercises {props.parts.reduce((total, part) => part.exercises + total)}</p>

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
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}
export default App
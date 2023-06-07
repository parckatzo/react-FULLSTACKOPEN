const Header = (props) =>{
  return(
    <div>{props.course}</div>  
  )
}


const Part = (props) => {
  return (
    <p>
      {props.parts.name} {props.parts.exercises}
    </p>
  )
}

const Content = (props) => {
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
  <p>Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
)
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total total={parts}></Total>
    </div>
  )
}
export default App
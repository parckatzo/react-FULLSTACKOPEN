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
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}></Total>
    </div>
  )
}
export default App
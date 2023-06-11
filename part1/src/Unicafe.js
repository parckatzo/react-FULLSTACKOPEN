import { useState } from 'react'


const Button = (props) => (
    <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const StatisticsLine = (props) =>{
    return(
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>

    )
}

const Statistics = (props) => {
    if (props.total !== 0){
    return(
        <div>
        <h1>Statistics</h1>
        <table>
            <tbody>
                <StatisticsLine text='good' value={props.good}/>
                <StatisticsLine text='neutral' value={props.neutral}/>
                <StatisticsLine text='bad' value={props.bad}/>
                <StatisticsLine text='total' value={props.total}/>
                <StatisticsLine text='average' value={props.average}/>
                <StatisticsLine text='positive' value={`${props.positive}%`}/>
            </tbody>
        </table>
    </div>
    )}
    return (
        <div>
            <h1>Statistics</h1>
            <p>No feedback given</p>
        </div>

    )
}



export const Unicafe = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
  
    const goodFeedback = () => {
      const goodPLus = good + 1 
      setGood(goodPLus)
    }
    const neutralFeedback = () => {
      const neutralPLus = neutral + 1 
      setNeutral(neutralPLus)
    }
    const badFeedback = () => {
      const badPLus = bad + 1 
      setBad(badPLus)
      console.log(bad)
    }
    const total = good + neutral + bad

    const average = total/3

    const positive = (good / total) * 100;
  
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={goodFeedback} text='good'/>
        <Button handleClick={neutralFeedback} text='neutral'/>
        <Button handleClick={badFeedback} text='bad'/>
        <Statistics 
            total={total}
            good={good} 
            neutral={neutral} 
            bad={bad} 
            average={average} 
            positive={positive}
        />
      </div>
    )
  }

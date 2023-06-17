
const Languages = ({country}) => {

    const cLanguages = Object.keys(country.languages)
    console.log('languages',cLanguages)
  return (
    <div>
        <h3>languages:</h3>
        <ul>
            {Object.values(country.languages).map(l =>{
                <li key={l}>{l}</li>
            })}
        </ul>
    </div>
  )
}

export default Languages
import Person from "./Person"

const Persons = ({filterName}) => {
  return (
    <div>
          <ul>
            {filterName.map(p => 
                <Person 
                key={p.id}
                name={p}
                number={p}/>
            )}
        </ul>
    </div>
  )
}

export default Persons
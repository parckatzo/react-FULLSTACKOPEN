const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())

morgan.token('type', function (req, res) { return JSON.stringify(req.body) })


app.use(morgan(':method :url :status :res[content-length] - :response-time ms :type'))

let numbers = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello world!</h1>')
})

app.get('/api/numbers', (request, response) => {
    response.json(numbers)
})

const date = new Date()

app.get('/info', (request, response) => {
    response.send(
        `<p>Phonebook has info for ${numbers.length} people</p><b>
        ${date}`
    )
})

app.get('/api/numbers/:id', (request, response) => {
    const id = Number(request.params.id)
    const number = numbers.find(number => number.id === id)
    console.log(number)

    if (number) {
        response.json(number)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/numbers/:id', (request, response) => {
    const id = Number(request.params.id)
    numbers = numbers.filter(number => number.id !== id)

    response.status(204).end()
})
const generateId = () => {
    const maxId = numbers.length > 0
        ? Math.max(...numbers.map(n => n.id))
        : 0
    return maxId + 1
}

app.post('/api/numbers', (request, response) => {
    const body = request.body

    if(!body.name || !body.number){
        return response.status(400).json(
            { error: 'name and nuber must be filled'}     
          )
    }else if (numbers.some(person => person.name === body.name)){
        return response.status(400).json(
            { error: 'name must be unique'}     
          )
    }
    const number = {
        name : body.name,
        number : body.number,
        id : generateId(),
    }
    numbers = numbers.concat(number)

    response.json(number)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
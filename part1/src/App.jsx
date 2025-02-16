const Hello = (props) => {

  console.log(props)
  return (
    <div>
      <p>

        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {

  const nimi = 'Pekka'
  const ika = 10

  return (
    <div>
      <h1>Greetings</h1>

      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
      <Footer />
    </div>
  )
}

/* tuo toinen kohta
const App = () => {
  const friends = [
    { name: 'Leevi', age: 4 },
    { name: 'Venla', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}

export default App*/


const Footer = () => {
  return (
    <div>
      example footer text 1
    </div>
  )
}

export default App

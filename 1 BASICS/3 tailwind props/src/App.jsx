
import './App.css'
import Card from './Card'

function App() {

  return (
    <div className='flex'>
      <h1 className='bg-green-300 text-black p-3'>Hello Pokemons</h1>
      <Card photu= "https://images.unsplash.com/photo-1640271443625-3276ed8f62b5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" naam = "Charmander" power = "93"/>
      <Card photu= "https://images.unsplash.com/photo-1609372332255-611485350f25?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" naam = "Pikachu" power = "100"/>
      <Card photu= "https://images.unsplash.com/photo-1590955559496-50316bd28ff2?q=80&w=1511&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" naam = "Bulbasaur" power = "86"/>
      <Card photu= "https://images.unsplash.com/photo-1625916355623-d3ae32fa4e30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBva2Vtb258ZW58MHx8MHx8fDA%3D" naam = "Hakuru" power = "79"/>
    </div>
  )
}

export default App

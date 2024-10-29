import './App.css'
import {Provider} from "react-redux"
import store from './utils/store'
import AddTodo from "./components/AddTodo"
import DisplayTodos from "./components/DisplayTodos"

function App() {

  return (
    <Provider store={store}>
        <AddTodo />
        <DisplayTodos />
    </Provider>
  )
}

export default App

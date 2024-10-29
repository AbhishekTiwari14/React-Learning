import { Provider } from "react-redux"
import AddTodo from "../AddTodo"
import store from "../../utils/store" 
import { render } from "@testing-library/react"

test("Input task should work properly", ()=> {
    const addTodo = render( 
    <Provider store={store}>
        <AddTodo /> 
    </Provider> )
})
import Header from "../Header"
import { render } from "@testing-library/react"

test("test react logo load", ()=> {
    const header = render(<Header />);
    const reactLogo = header.getAllByTestId("reactLogo");
    console.log(reactLogo); //returns an array of all objects with data-testid = "reactLogo"(here, its just 1 object present with this dataid)
    expect(reactLogo[0].src).toBe("http://localhost/imageMock.png")
})
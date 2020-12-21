import { render, screen, cleanup, getByLabelText, getByRole, fireEvent } from "@testing-library/react";
import { Login } from "./components/Login";


describe("Login component",  () => {
    describe("with valid inputs", ()=>{
        it.todo("calls the onsubmit function",async ()=>{
            const mockOnSubmit=jest.fn()
            const {getByLabelText, getByRole}=render(<Login onSubmit={mockOnSubmit}/>)

            await act(async()=>{
                fireEvent.change(getByLabelText("Email  Address *"),{target:{value:"email@test.com"}})
            })
          expect(mockOnSubmit).toHaveBeenCalled()
           
        })
    })

//   it("Should have title Public News Board", () => {
//     const { queryByTitle } = render(<App />);
//     const title = queryByTitle("t");
//     expect((title.innerHTML = "Public News Board")).toBe("Public News Board");
 

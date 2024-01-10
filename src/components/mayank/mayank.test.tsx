import { render, screen } from "@testing-library/react"
import { Mayank } from "./mayank"

describe("Mayank", () => {

    test('Mayank renders correctly ', () => {
        render(<Mayank />);
        const textElement = screen.getByText(/Hello/)
        expect(textElement).toBeInTheDocument()
    })


    
})


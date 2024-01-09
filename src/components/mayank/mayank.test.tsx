import {render, screen } from "@testing-library/react"
import { Mayank } from "./mayank"

test('Mayank renders correctly ', () => {
 render(<Mayank/>);
 const textElement = screen.getByText('Hello')
 expect(textElement).toBeInTheDocument()
})

test('Mayank renders with a name ', () => {
    render(<Mayank name= 'Mayank' />)
    const textElement = screen.getByText('Hello Mayank')
    expect(textElement).toBeInTheDocument()
})
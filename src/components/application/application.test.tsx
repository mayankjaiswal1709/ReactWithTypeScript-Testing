import { render ,screen } from "@testing-library/react";
import { Appliacation } from "./application";

describe('Application',()=>{
    test("render correctly" ,() =>{
        render(<Appliacation/>);
        const nameElement = screen.getByRole('textbox')
        expect(nameElement).toBeInTheDocument(); 

        const jobLocationElement =screen.getByRole("combobox")
        expect (jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument();
    });

});
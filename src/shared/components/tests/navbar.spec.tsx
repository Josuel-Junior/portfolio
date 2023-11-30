import { fireEvent, render, screen } from "@testing-library/react"
import { NavBar } from "../navbar/NavBar"
import "@testing-library/jest-dom"

describe("NavBar", () => {
    it("should render correctly", () => {
        render(<NavBar children={undefined} />)
        console.log(NavBar)
        expect(screen.getByText("Home")).toBeInTheDocument();
    })

    it("should group button correctly", () => {
        render(<NavBar children={undefined} />)
        const button = screen.getByRole('button', { name: /button group/i })

        fireEvent.click(button)
        screen.getByText(/estrutura de pilha/i)

    })
})


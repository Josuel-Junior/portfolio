import { render, screen  } from "@testing-library/react"
import { NavBar } from "../navbar/NavBar"
import { DrawerComponent } from "../drawerComponent/DrawerComponent"
import "@testing-library/jest-dom"

describe("NavBar", () => {
    it("should render correctly",  () => {
        render(<NavBar children={undefined}/>)
        console.log(NavBar)
         expect(screen.getByText("Home")).toBeInTheDocument();
    })
    it("should render correctly",  () => {
        render(<NavBar children={undefined}/>)
        console.log(NavBar)
         expect(screen.getByText("Serviços")).toBeInTheDocument();
    })
    it("should render correctly",  () => {
        render(<NavBar children={undefined}/>)
        console.log(NavBar)
         expect(screen.getByText("Tecnologias")).toBeInTheDocument();
    })
    it("should render correctly",  () => {
        render(<NavBar children={undefined}/>)
        console.log(NavBar)
         expect(screen.getByText("Projetos")).toBeInTheDocument();
    })
    it("should render correctly",  () => {
        render(<NavBar children={undefined}/>)
        console.log(NavBar)
         expect(screen.getByText("Estrutura de dados")).toBeInTheDocument();
    })
    it("should render correctly",  () => {
        render(<NavBar children={undefined}/>)
        console.log(NavBar)
         expect(screen.getByText("Contato")).toBeInTheDocument();
    })
})
describe("DrawerComponent", () => {
    it("should click toggle thema correctly",  () => {
        render(<DrawerComponent/>)
        console.log(DrawerComponent)
      
    })
})


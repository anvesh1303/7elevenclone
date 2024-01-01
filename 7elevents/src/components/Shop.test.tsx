import { render, screen } from "@testing-library/react"
import Shop from "./Shop"

test("should display shopping", ()=>{
    render(<Shop/>);
    expect(screen.getByText("Shopping")).toBeInTheDocument();
})
import Todolist from "./Crudtelugu";
import { render, screen } from "@testing-library/react";

test('render react text', () => {
    render(<Todolist/>)
    const ElementText = screen.getByText("Todolist Applciation");
    expect(ElementText).toBeInTheDocument();
})
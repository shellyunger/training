import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./components/counter";

test("initial counter is 0", () => {
    render(<Counter />);
    const counterElement = screen.getByText("0");
    expect(counterElement).toBeInTheDocument();
});

test ("counter plus by 1 when button is clicked", () => {
    render(<Counter />);
    const buttonElement = screen.getByText("Plus");
    fireEvent.click(buttonElement);
    const counterElement = screen.getByText("1");
    expect(counterElement).toBeInTheDocument();
});

test ("counter minus by 1 when button is clicked", () => {
    render(<Counter />);
    const buttonElement = screen.getByText("Minus");
    fireEvent.click(buttonElement);
    const counterElement = screen.getByText("-1");
    expect(counterElement).toBeInTheDocument();
});

test("handle input change text", () => {
    render (<Counter />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: {value: "Hello World!"} });

    expect(input.value).toBe("Hello World!");
});

test ("handle input change number", () => {
    render(<Counter />);

    const input = screen.getByPlaceholderText("number");
    fireEvent.change(input, { target: { value: "0"} });

    expect(input.value).toBe("0");
});

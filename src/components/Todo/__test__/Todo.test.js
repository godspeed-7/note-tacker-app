import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTasks = (tasks) => {
  const inputElem = screen.getByPlaceholderText(/Add a new task here.../);
  const btnElem = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElem, { target: { value: task } });
    fireEvent.click(btnElem);
  });
};
describe("Todo", () => {

  beforeEach(() => {
    render(<MockTodo />);
  });

  it("should show added items in Todo List", () => {
    addTasks(["Go Home", "Go to Sleep"]);
    const divElems = screen.getAllByTestId("item");
    expect(divElems).toHaveLength(2);
  });

  it("task should not be completed when rendered", () => {
    addTasks(['Go Home']);
    const divElem = screen.getByText(/Go Home/);
    expect(divElem).not.toHaveClass("todo-item-active");
  });

  it("task should  be completed when clicked", () => {
    addTasks(['Go Home']);
    const divElem = screen.getByText(/Go Home/);
    fireEvent.click(divElem);
    expect(divElem).toHaveClass("todo-item-active");
  });
  
});

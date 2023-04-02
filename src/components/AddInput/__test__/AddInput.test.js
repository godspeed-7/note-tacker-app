import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddInput from '../AddInput';

describe("AddInput block", () => {

    beforeEach(() => {
        render(<AddInput 
            todos={[]}
             setTodos={jest.fn()}
        />);
    })
    
    it("should render Input element", () => {
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument(); 
    });

    it("should be able to type into Input element", () => {
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        userEvent.type(inputElement, 'Go Home');
        // fireEvent.change(inputElement, {target: {value : 'Go Home'}}); 
        expect(inputElement.value).toBe("Go Home");
    });

    it("should have empty value after button is clicked", () => {
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const btnElem = screen.getByRole('button', {name: /Add/i});
        fireEvent.change(inputElement, {target: {value : 'Go Home'}}); 
        fireEvent.click(btnElem);
        expect(inputElement.value).toBe("");
    })

})
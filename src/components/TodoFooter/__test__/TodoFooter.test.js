import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';


const MockFooter = ({numberOfIncompleteTasks}) => {
    return (
        <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
        </BrowserRouter>
    )
}


describe('TodoFooter', () => {

  it('should render correct task (singular)', () => {
    // AAA Arrange Act Assert
    render(<MockFooter numberOfIncompleteTasks={1}/>);

    const paragraphElement = screen.getByText(/1 task left/);
    
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render correct tasks (plural)', () => {  
    render(<MockFooter numberOfIncompleteTasks={2}/>);
    const paragraphElement = screen.getByTestId('footer-para');
    expect(paragraphElement).toHaveTextContent(/2 tasks left/);
  });

})
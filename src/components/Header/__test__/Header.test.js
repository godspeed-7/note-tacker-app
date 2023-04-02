import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {

  test('should show default header if no prop passed', () => {
    render(<Header/>);
    // const headerText = screen.getByText(/default Header/i);
    const headerText = screen.getByRole("heading", {name: /default Header/i});
    expect(headerText).toBeInTheDocument();
  });

    test('prop data should be present in header', () => {
        render(<Header title='My Header'/>);
        const headerText = screen.getByText(/My Header/i);
        expect(headerText).toBeInTheDocument();
      });


})
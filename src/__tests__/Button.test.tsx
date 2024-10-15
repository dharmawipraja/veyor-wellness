import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('Button component', () => {
  it("should match snapshot", () => {
    const handleClick = jest.fn();
    const { asFragment } = render(<Button title="Click Me" onClick={handleClick} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should renders with correct title', () => {
    render(<Button title="Click Me" />);

    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('should has the correct default type', () => {
    render(<Button title="Click Me" />);
    
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toHaveAttribute('type', 'button');
  });

  it('should calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button title="Click Me" onClick={handleClick} />);

    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should applies correct styles for PRIMARY variant', () => {
    render(<Button title="Click Me" variant="PRIMARY" />);
    
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toHaveClass('text-white bg-black');
  });

  it('should applies correct styles for SECONDARY variant', () => {
    render(<Button title="Click Me" variant="SECONDARY" />);
    
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toHaveClass('text-black bg-white border border-gray-700');
  });

  it('should renders with custom type', () => {
    render(<Button title="Submit" type="submit" />);
    
    const buttonElement = screen.getByText(/Submit/i);
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });
});

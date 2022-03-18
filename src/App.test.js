import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';



test('renders the header', () => {
    render(<App />);
    const element = screen.getByText('Submit');
    expect(element).toBeInTheDocument();
  });

  test ("fireEvent on submit button", ()=>{
    render (<App />)
    const submitButton = screen.getByText("Submit")
    fireEvent.click(submitButton)
    const deleteButton = screen.getByText("Done")
    expect(deleteButton).toBeInTheDocument()
  })


  test('input value is rendered', () =>{
    render(<App />)
    const inputElement = screen.getByPlaceholderText("what do you need")
    fireEvent.change(inputElement, {target: {value: "cake"}})
    expect(inputElement.value).toBe("cake")
  })

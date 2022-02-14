import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Form from "./App";

test('renders learn react link', () => {
  render(<App />);
  const element = screen.getByText(/Add, Remove or mark an item as complete/i);
  expect(element).toBeInTheDocument();
});

it("submits", () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<Form onSubmit={onSubmit} />);
  fireEvent.submit(getByTestId("form"));
  expect(onSubmit).toHaveBeenCalled();
});

test('Renders submit button', () => {
  render(<App />);
  const element = screen.getByRole('button');
  expect(element).toBeInTheDocument();
});
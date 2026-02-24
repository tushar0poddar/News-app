import { render, screen } from '@testing-library/react';
import App from './App';

test('renders category filter', () => {
  render(<App />);
  const filterElement = screen.getByLabelText(/filter:/i);
  expect(filterElement).toBeInTheDocument();
});

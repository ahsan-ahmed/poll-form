import React from 'react';
import { render, screen } from '@testing-library/react'
import App from './App';

test('App renders successfully', () => {
  render(<App />);
  const linkElement = screen.getByText(/How was you week overall?/i);
  expect(linkElement).toBeInTheDocument();
});

// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FluxXeno title', () => {
    render(<App />);
    const titleElement = screen.getByText(/FluxXeno/i);
    expect(titleElement).toBeInTheDocument();
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './Components/App';

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);
    screen.debug();
    // check if App component renders headline
  });
});

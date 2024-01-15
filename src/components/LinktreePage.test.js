import { render, screen } from '@testing-library/react';
import LinktreePage from './LinktreePage';

test('renders Abbie Daniel content', () => {
  render(<LinktreePage />);
  const contentElement = screen.getByText('Abbie Daniel');
  expect(contentElement).toBeInTheDocument();
});

test('renders Github link when URL is provided', () => {
    render(<LinktreePage />);
    const githubLink = screen.getByText('Github');
    expect(githubLink).toBeInTheDocument();
  });
  
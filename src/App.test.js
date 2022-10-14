import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';
import AnalyseArticle from './pages/AnalyseArticle';
import SubmitArticle from './pages/SubmitArticle';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Test analyse article render", () => {
  act(() => {
    render(<AnalyseArticle />, container);
  });
  expect(screen.getByTitle("title")).toHaveValue("");
});

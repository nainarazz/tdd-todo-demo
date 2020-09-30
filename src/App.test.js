import React from 'react';
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import mockData from './mockData';

describe("<App /> test", () => {
  beforeEach(() => fetchMock.resetMocks())
  
  it("should render <App /> component", async () => {
    fetchMock.once(JSON.stringify(mockData))
    render(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    expect(screen.getByText(/My Todo List/i)).toBeInTheDocument();
  });

  it("should add a todo item", async () => {
    fetchMock.mockResponses(
      [
        JSON.stringify(mockData)
      ],
      [
        JSON.stringify({
          userId: 3,
          id: Math.floor(Math.random() * 100) + 1 ,
          title: 'Do math homework',
          completed: false
        })
      ]
    )

    render(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    
    fireEvent.change(screen.getByRole("textbox"), { target: { value: 'Do math homework'}});
    fireEvent.click(screen.getByRole("button", { name: /Add new todo/i }));
    await waitForElementToBeRemoved(() => screen.getByText(/saving/i));
    expect(screen.getByText(/Do math homework/i)).toBeInTheDocument();

  });

  it("remove todo from list", async () => {
    fetchMock.once(JSON.stringify(mockData))
    render(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    fireEvent.click(screen.getByTestId('3'));
    expect(screen.queryByText(/fugiat veniam minus/i)).not.toBeInTheDocument();
  });
});

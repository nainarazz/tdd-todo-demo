import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TodoItem from './TodoItem';
import mockData from '../../mockData';

describe('<TodoItem /> tests', () => {
  it("should render todo item with close button.", () => {
    render(<TodoItem todo={mockData[0]} />);
    expect(screen.queryByText(/eat breakfast/i)).toBeInTheDocument();
    expect(screen.getByTestId('close-btn-1')).toBeInTheDocument();
  });
  
  it("should render todo item with checkbox.", () => {
    render(<TodoItem todo={mockData[0]} />);
    expect(screen.getByTestId('checkbox-1')).toBeInTheDocument();
    expect(screen.queryByText(/eat breakfast/i)).toBeInTheDocument();
  });
})
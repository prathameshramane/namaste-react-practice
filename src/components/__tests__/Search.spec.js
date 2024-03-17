import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Body from "../Body";
import MOCK_RESTAURANT_DATA from "../../mocks/restaurantList.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_RESTAURANT_DATA) })
);

describe("Search", () => {
  it("should render all restaurants when search is empty", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    expect(screen.getAllByTestId("restaurant-list-card").length).toBe(20);
  });

  it("should filter restaurants based on search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const searchInput = screen.getByPlaceholderText("Type here...");
    const searchBtn = screen.getByRole("button", { name: "Search" });
    fireEvent.change(searchInput, { target: { value: "pizza" } });
    fireEvent.click(searchBtn);
    expect(screen.getAllByTestId("restaurant-list-card").length).toBe(2);
  });
});

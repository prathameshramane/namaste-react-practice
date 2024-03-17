import { screen, render, act, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

import Header from "../../components/Header";
import RestaurantMenu from "../../components/RestaurantMenu";
import Cart from "../../components/Cart";
import MOCK_RESTAURANT_MENU_DATA from "../../mocks/restaurantMenu.json";
import appStore from "../../store/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_RESTAURANT_MENU_DATA) })
);

describe("Cart", () => {
  it("should render empty cart", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <BrowserRouter>
            <Header />
            <RestaurantMenu />
            <Cart />
          </BrowserRouter>
        </Provider>
      )
    );
    expect(
      screen.getByText("Please add items to your cart!")
    ).toBeInTheDocument();
  });

  it("should render cart with items", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <BrowserRouter>
            <Header />
            <RestaurantMenu />
            <Cart />
          </BrowserRouter>
        </Provider>
      )
    );

    const firstCategoryAccordion =
      screen.getAllByTestId("category-accordion")[0];
    fireEvent.click(firstCategoryAccordion);
    
    expect(screen.getAllByTestId("restaurant-item").length).toBe(2);

    const addBtns = screen.getAllByRole("button", { name: "Add" });
    fireEvent.click(addBtns[0]);

    expect(screen.getAllByTestId("restaurant-item").length).toBe(3);
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});

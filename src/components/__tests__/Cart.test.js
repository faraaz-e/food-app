import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockRestMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

test("Should load Restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Cakes (22)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(22);

  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart (2)")).toBeInTheDocument(24);

  fireEvent.click(screen.getByRole("button", { name: "Clear cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(22);

  expect(screen.getByText("Cart is empty.")).toBeInTheDocument();
});

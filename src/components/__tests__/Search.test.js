import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should Search Restaurant list for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("restCard");
  expect(cardsBeforeSearch.length).toBe(15);

  const searchBtn = screen.getByTestId("searchBtn");
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  // screen should load 1 restaurant card
  const cardsAfterSearch = screen.getAllByTestId("restCard");

  expect(cardsAfterSearch.length).toBe(1);
});

test("Should Search Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("restCard");
  expect(cardsBeforeFilter.length).toBe(15);

  // screen should load 8 restaurant card
  const topRatedRestaurantsBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedRestaurantsBtn);
  const cardsAfterFilter = screen.getAllByTestId("restCard");
  expect(cardsAfterFilter.length).toBe(8);
});

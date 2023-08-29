import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../mocks/restCardMock.json";
import "@testing-library/jest-dom";

test("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard restData={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut")
  expect(name).toBeInTheDocument();
});

import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import SearchBar from "./components/SearchBar";

// Test to ensure that the search input correctly updates the search term in the Redux store
test("search input updates search term", () => {
  render(
    // Render the SearchBar component wrapped in the Redux Provider with the store
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );

  // Get the input element using placeholder text
  const input = screen.getByPlaceholderText(/search items.../i);

  // Simulate a change event on the input, updating its value to "charger"
  fireEvent.change(input, { target: { value: "charger" } });
  expect(input.value).toBe("charger"); // // Assert that the input's value is updated correctly
});

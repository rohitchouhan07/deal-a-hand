import { render } from "@testing-library/react";
import Table from "./Table";
import Hands from "../Hands/Hands";

jest.mock("../Hands/Hands", () => {
  return () => (
    <div data-testid="mocked-hands-component">Mocked Hands Component</div>
  );
});

describe("Table component", () => {
  test("renders a table div with Hands component", () => {
    const { getByTestId } = render(<Table />);

    // Assert that the Hands component is rendered within the table div
    const mockedHandsComponent = getByTestId("mocked-hands-component");
    expect(mockedHandsComponent).toBeInTheDocument();
  });
});


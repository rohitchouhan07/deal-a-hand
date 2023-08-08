import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  test("renders button with the correct text and class name", () => {
    const buttonText = "Deal a hand";
    const className = "custom-button";
    const status = "enabled";
    const onClickMock = jest.fn();

    const { getByText, getByRole } = render(
      <Button onClick={onClickMock} className={className} isDisabled={status}>
        {buttonText}
      </Button>,
    );

    const buttonElement = getByRole("button");

    expect(buttonElement).toHaveTextContent(buttonText);
    expect(buttonElement).toHaveClass(className);
  });

  test("fires onClick event when button is clicked", () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(
      <Button
        className="test-button"
        onClick={onClickMock}
        isDisabled="enabled"
      >
        Click Me
      </Button>,
    );
    const buttonElement = getByRole("button");

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});


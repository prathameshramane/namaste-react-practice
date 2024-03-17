import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import ContactUs from "../ContactUs";
import UserContext from "../../utils/UserContext";

describe("Contact Us", () => {
  it("should render Contact page", () => {
    render(<ContactUs />);
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(
      screen.getByText("Default Name - default@gmail.com")
    ).toBeInTheDocument();
  });

  it("should fetch context and display user", () => {
    render(
      <UserContext.Provider
        value={{ user: { name: "Prathamesh", email: "prathamesh@gmail.com" } }}
      >
        <ContactUs />
      </UserContext.Provider>
    );
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(
      screen.getByText("Prathamesh - prathamesh@gmail.com")
    ).toBeInTheDocument();
  });
});

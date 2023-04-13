import NavBar from "./NavBar";
import { render, screen } from "@testing-library/react";

describe("NavBar", () => {
  test("NavBar is render", () => {
    render(NavBar);
    screen.debug();
    expect(true).toBe(true);
  });
});

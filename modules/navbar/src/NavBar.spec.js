// import NavBar from "./NavBar";
// import { render, screen } from "@testing-library/react";
import {
  willDispatch,
  willSubscribe,
  navBarPathNameUpdateCallback,
} from "./NavBar";

const subscribeMock = jest.fn();
const dispatchMock = jest.fn();

Object.defineProperty(window, "will", {
  value: {
    subscribe: subscribeMock,
    dispatch: dispatchMock,
  },
});

describe("Test Will", () => {
  test("test will.subscribe", () => {
    const navigate = jest.fn();
    willSubscribe(navigate);

    expect(subscribeMock).toHaveBeenCalledWith(
      "navbar-pathname-update",
      expect.any(Function)
    );
  });

  test("test navBarPathNameUpdateCallback", () => {
    const mockFn = jest.fn();
    const fnToTest = navBarPathNameUpdateCallback(mockFn);
    fnToTest({ route: "/products" });
    expect(mockFn).not.toHaveBeenCalled();
    fnToTest({ route: "/artur" });
    expect(mockFn).toHaveBeenCalledWith("/artur");
  });

  test("test will.dispatch", () => {
    const navigate = jest.fn();
    willDispatch({ pathname: "/cenas" });

    expect(dispatchMock).toHaveBeenCalledWith("route-change", {
      route: "/cenas",
    });
  });
});

import { App } from "./App";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn().mockReturnValueOnce([true, jest.fn]),
  useEffect: jest.fn(),
}));

describe("something", () => {
  test("asdasd", () => {
    console.log(App());
  });
});

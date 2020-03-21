import { ConvertMiles } from "./convert-miles.pipe";

describe("ConvertMiles", () => {
  it("create an instance", () => {
    const pipe = new ConvertMiles();
    expect(pipe).toBeTruthy();
  });
});

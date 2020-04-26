import { getVerse, isVerse } from "./bibleApi.js";
describe("getVerse", () => {
  test("reterives a verse", async () => {
    expect(await getVerse("John 3:16")).not.toBeNull();
  });
  test("doens't retreive a non-existing verse", async () => {
    expect(await getVerse("2 Opinions 3:1")).toBe(
      "Requested passage not found in the undefined. Check your passage and version!"
    );
  });
});

describe("isVerse", () => {
  test("returns whether a verse exists", async () => {
    expect(await isVerse("John 3:16")).toBeTruthy();
    expect(await isVerse("2 Opinions 3:1")).toBeFalsy();
  });
});

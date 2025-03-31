import fetchData from "./fetchData";

test("The data is resolved!", () => {
  return fetchData().then((data) => {
    expect(data).toBe("Data fetched successfully!");
  });
});

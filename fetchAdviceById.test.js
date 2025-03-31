import fetchAdviceById from "./fetchAdviceById";

test("Remember that spiders are more afraid of you, than you are of them.", async () => {
  await expect(fetchAdviceById(1)).resolves.toBe(
    "Remember that spiders are more afraid of you, than you are of them."
  );
});

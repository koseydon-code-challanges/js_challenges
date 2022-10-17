import funnel from './word-funnel-1';

it('runs correctly', () => {
  expect(funnel("leave", "eave")).toBe(true);
  expect(funnel("reset", "rest")).toBe(true);
  expect(funnel("dragoon", "dragon")).toBe(true);
  expect(funnel("eave", "leave")).toBe(false);
  expect(funnel("sleet", "lets")).toBe(false);
  expect(funnel("skiff", "ski")).toBe(false);
});
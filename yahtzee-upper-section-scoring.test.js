import yahtzee_upper from './yahtzee-upper-section-scoring';

it('runs correctly', () => {
  expect(yahtzee_upper([2, 3, 5, 5, 6])).toBe(10);
  expect(yahtzee_upper([1, 1, 1, 1, 3])).toBe(4);
  expect(yahtzee_upper([1, 1, 1, 3, 3])).toBe(6);
  expect(yahtzee_upper([1, 2, 3, 4, 5])).toBe(5);
  expect(yahtzee_upper([6, 6, 6, 6, 6])).toBe(30);

});

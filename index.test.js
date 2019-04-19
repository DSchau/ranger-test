const add = require('./')

test('it can add a single number', () => {
  expect(add(1)).toBe(1)
})

test(`it can add 1 + 1`, () => {
  expect(add(1, 1)).toBe(2)
})

test(`it can add 2 + 2`, () => {
  expect(add(2, 2)).toBe(4)
})


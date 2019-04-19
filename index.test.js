const add = require('./')

test(`it can add 2 + 2`, () => {
  expect(add(2, 2)).toBe(4)
})

const add = require('./')

const delay = duration => new Promise(resolve => setTimeout(resolve, duration))

test(`it can add 1 + 1`, async () => {
  await delay(10000)
  expect(add(1, 1)).toBe(2)
}, 50000)

test(`it can add 2 + 2`, async () => {
  await delay(10000)
  expect(add(2, 2)).toBe(4)
}, 50000)


module.exports = function add(...args) {
  return args.reduce((count, cur) => count + cur, 0)
}

/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
  preferences.forEach(function (item, i) {
    if (([preferences[preferences[item - 1] - 1] - 1]) == i) count++
  })
  return Math.floor(count / 3);
}
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var increase = document.querySelectorAll('ul.ranked-list')
  return increase + n
}

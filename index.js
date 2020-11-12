function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('.target')
}


function increaseRankBy(n) {
  const rank = document.querySelectorAll('.ranked-list');
  for(let i = 0; i < rank.length; i++) {
    rank[i].textContent += n; 
  }
}

function deepestChild() {
  
}
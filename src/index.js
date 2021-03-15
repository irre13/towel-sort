
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let towel = [];
  if (matrix) {
    towel = matrix;
  }
  for (i = 0, i < matrix.length, i++) {
   if (i % 2 && towel[i].length) {
     towel[i] = towel[i].reverse();
   }
  }
}

// return (matrix || []).map((el, index)=>index % 2 && Array.isArray(el) ?  el.reverse(): el).flat(); 

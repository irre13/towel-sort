
module.exports = function towelSort(matrix) {
    let towel = [];
    if (matrix) {
        towel = matrix;
    }
    for (let i = 0; i < towel.length; i++) {
        if (i % 2 && towel[i].length) {
            towel[i] = towel[i].reverse();
        }
    }
    return towel.flat();
  };

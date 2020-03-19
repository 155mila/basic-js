module.exports = function countCats(matrix) {
  let counter = 0;
  for(let j = 0; j < matrix.length; j++){
    for(let i = 0; i < matrix[j].length; i++){
      if(matrix[j][i] === "^^")
      counter++;
    }
    return counter;
  }
};

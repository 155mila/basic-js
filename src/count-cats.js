module.exports = function countCats(backyard) {
  let counter = 0;
  for(let j = 0; j < backyard.length; j++){
    for(let i = 0; i[j] < backyard.length; i++){
      if(backyard[j][i] === "^^")
      counter++;
    }
    return counter;
  }
};

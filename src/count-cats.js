module.exports = function countCats(Array) {
  let number = 0;
  for(let j = 0; j < Array.length; j++){
    for(let i = 0; i < Array[j].length; i++){
      if(Array[j][i] === "^^")
      number++;
    }
    return number;
  }
};

module.exports = function getSeason(date) {
  
   
   if (date instanceof Date && !isNaN(date)) {
   
   
      let mounth = date.getMonth()
     
        if (mounth == 11 || mounth <=1){
          return 'winter'
        }
        if (mounth <= 4){
          return 'spring'
        }
        if (mounth <= 7){
          return 'summer'
        }
        if (mounth <= 10){
          return 'autumn'
        }
    
   } else if (date === undefined ) {
    return 'Unable to determine the time of year!'
      } else {
        throw new Error()
      }

    
};

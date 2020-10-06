const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity == 'string' && parseFloat(sampleActivity) < 0){
    let k = 0.693/HALF_LIFE_PERIOD;
    let res = Math.log(parseFloat(sampleActivity)/MODERN_ACTIVITY);
    let t = Math.ceil(res/k);
    return t; 
  }else{
    return false;
  }
};

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length
  },
  addLink(value) {
    this.result.push(`( ${value} )`)
    return this 
    
  },
  removeLink(position) {
    if(typeof(position) !== 'number' || position < 1 || position > this.result.length){
      this.result = []
      throw new Error
    } else {
      this.result.splice(position-1, 1)
      return this
    } 
  },
  reverseChain() {
    this.result = this.result.reverse()
    return this
  },
  finishChain() {
    let str = this.result.join('~~')
      this.result = []
      return str
  }
};



module.exports = chainMaker;

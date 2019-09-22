function insertionSort(){
  const len = this.dataStore.length;
  for(let i = 1; i < len; i++){
    let currentElem = this.dataStore[i];
    let j;
    for(j = i - 1; j >= 0 && this.dataStore[j] > currentElem; --j){
      this.dataStore[j + 1] = this.dataStore[j];
    }
    this.dataStore[j + 1] = currentElem;
  }
}

module.exports = insertionSort;
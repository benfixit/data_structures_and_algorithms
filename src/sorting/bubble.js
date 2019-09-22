function bubbleSort(){
    for(let i = 0; i < this.dataStore.length; ++i){
        for(let j = i + 1; j < this.dataStore.length; ++j){
            if(this.dataStore[i] > this.dataStore[j]){
                this.swap(this.dataStore, i, j);
            }
        }
    }
}

module.exports = bubbleSort;

function selectionSort(){
    let min;
    for(let i = 0; i < this.dataStore.length; ++i){
        min = i;
        for(let j = i + 1; j < this.dataStore.length; ++j){
            if(this.dataStore[j] < this.dataStore[min]){
                min = j;
            }
        }
        this.swap(this.dataStore, i, min);
    }
}

module.exports = selectionSort;
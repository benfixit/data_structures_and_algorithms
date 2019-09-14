const newArray = require('./index');

function bubbleSort(){
    for(let i = 0; i < this.dataStore.length; ++i){
        for(let j = i + 1; j < this.dataStore.length; ++j){
            if(this.dataStore[i] > this.dataStore[j]){
                this.swap(this.dataStore, i, j);
            }
        }
    }
}

/**************TEST CASE ******************* */
let numElements = 100;
let testData = new newArray(numElements);
testData.setData();
console.log(testData.toString())
console.log()
bubbleSort.call(testData);
console.log(testData.toString())

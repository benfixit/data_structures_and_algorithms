const newArray = require('./index');

function selectionSort(){
    let min;
    for(let i = 0; i < this.dataStore.length; ++i){
        min = i;
        for(let j = i + 1; j < this.dataStore.length; ++j){
            if(this.dataStore[j] < this.dataStore[min]){
                min = j;
            }
        }
        console.log('Value of i :::', i)
        console.log('Value of min :::', min)
        this.swap(this.dataStore, i, min);
    }
}

/**************TEST CASE ******************* */
let numElements = 30;
let testData = new newArray(numElements);
testData.setData();
console.log(testData.toString())
console.log()
selectionSort.call(testData);
console.log(testData.toString())
function CArray(numElements){
    this.setData = setData;
    this.numElements = numElements;
    this.bubbleSort = bubbleSort;
    this.swap = swap;
    this.clear = clear;
    this.toString = toString;
    this.dataStore = [];
    this.pos = 0;
    this.insert = insert;

    for(let i = 0; i < numElements; ++i){
        this.dataStore[i] = i;
    }
}

function setData(){
    for(let i = 0; i < this.numElements; ++i){
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1))
    }
}

function clear(){
    for(let i = 0; i < this.dataStore.length; ++i){
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    let retStr = "";
    for(let i = 0; i < this.dataStore.length; ++i){
        retStr += this.dataStore[i] + " ";
        if(i > 0 && i % 10 === 0){
            retStr += "\n"
        }
    }
    return retStr;
}

function swap(arr, current, next){
    const temp = arr[current];
    arr[current] = arr[next];
    arr[next] = temp;
}

function bubbleSort(){
    for(let outer = this.dataStore.length; outer >= 2; --outer){
        for(let inner = 0; inner <= outer - 1; ++inner){
            if(this.dataStore[inner] > this.dataStore[inner + 1]){
                swap(this.dataStore, inner, inner + 1);
            }
        }
    }
}

/**************TEST CASE ******************* */
let numElements = 10;
let testData = new CArray(numElements);
testData.setData();
console.log(testData.toString())
console.log()
testData.bubbleSort();
console.log(testData.toString())
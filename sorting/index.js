function CArray(numElements){
    this.numElements = numElements;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.insert = insert;
    this.swap = swap;
    this.toString = toString;
    this.setData = setData;
    // this.bubbleSort = bubbleSort;

    for(let i = 0; i < numElements; ++i){
        this.dataStore[i] = i;
    }
}

function toString(){
    let retStr = "";
    for(let i = 0; i < this.dataStore.length; ++i){
        retStr += this.dataStore[i] + " ";
        if(i > 0 && i % 10 === 0){
            retStr += "\n";
        }
    }
    return retStr;
}

function setData(){
    for(let i = 0; i < this.numElements; ++i){
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}

function insert(element){
    this.dataStore[this.pos++] = element;
}

function clear(){
    for(let i = 0; i < this.dataStore.length; ++i){
        this.dataStore[i] = 0;
    }
}

function swap(arr, index1, index2){
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

module.exports = CArray;
const newArray = require('./index');
const bubbleSort = require('./bubble');
const selectionSort = require('./selection');
const insertionSort = require('./insertion');
const shellSort = require('./shell');
const mergeSort = require('./merge');
const quickSort = require('./quick');

const numElements = 1000;
let testData = new newArray(numElements);
testData.setData();
console.log('Starting Bubble Sort');
let start = new Date().getTime();
let stop;
bubbleSort.call(testData);
stop = new Date().getTime();
console.log('Ending Bubble Sort: It took: ', (stop - start), 'milliseconds');

console.log('Starting Selection Sort Sort');
start = new Date().getTime();
selectionSort.call(testData);
stop = new Date().getTime();
console.log('Ending Selection Sort: It took: ', (stop - start), 'milliseconds');

console.log('Starting Insertion Sort');
start = new Date().getTime();
insertionSort.call(testData);
stop = new Date().getTime();
console.log('Ending Insertion Sort: It took: ', (stop - start), 'milliseconds');

console.log('Starting Shell Sort with dynamic sequence');
start = new Date().getTime();
shellSort.shellSort1.call(testData);
stop = new Date().getTime();
console.log('Ending Shell Sort with dynamic sequence: It took: ', (stop - start), 'milliseconds');

console.log('Starting Shell Sort with hard-coded sequence');
start = new Date().getTime();
shellSort.shellSort2.call(testData);
stop = new Date().getTime();
console.log('Ending Shell Sort with hard-coded sequence: It took: ', (stop - start), 'milliseconds');

let data;
console.log('Starting Merge Sort');
start = new Date().getTime();
data = mergeSort(testData.dataStore);
stop = new Date().getTime();
console.log('Ending Merge Sort: It took: ', (stop - start), 'milliseconds');

console.log('Starting Quick Sort');
start = new Date().getTime();
data = quickSort(testData.dataStore);
stop = new Date().getTime();
console.log(data);
console.log('Ending Quick Sort: It took: ', (stop - start), 'milliseconds');
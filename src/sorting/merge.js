function mergeSort(arr){
    const len = arr.length;
    if(len < 2){
        return arr;
    }
    const midPoint = parseInt(len/2);
    const leftArr = arr.slice(0, midPoint);
    const rightArr = arr.slice(midPoint, len);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr){
    const sortedArr = [];
    while(leftArr.length && rightArr.length){
        leftArr[0] < rightArr[0] ? sortedArr.push(leftArr.shift()) : sortedArr.push(rightArr.shift());
    }
    while(leftArr.length){
        sortedArr.push(leftArr.shift());
    }
    while(rightArr.length){
        sortedArr.push(rightArr.shift());
    }
    return sortedArr;
}

module.exports = mergeSort;
function quickSort(arr) {
    if(arr.length === 0){
      return arr;
    }
    const pivot = arr[0];
    const lesser = [];
    const greater = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < pivot){
        lesser.push(arr[i]);
      } else{
        greater.push(arr[i]);
      }
    }
    return quickSort(lesser).concat(pivot, quickSort(greater));
  }

  module.exports = quickSort;
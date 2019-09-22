//Shell sort with dynamic sequence
function shellSort1() {
    let N = this.dataStore.length;
    let h = 1;
    while (h < N/3){
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for(let i = h; i < N; i++){
            for(let j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j-= h){
                this.swap(this.dataStore, j, j - h);
            }
        }
        h = (h - 1)/3;
    }
}

//Shell sort with hard-coded sequence
function shellSort2(){
    for(let g = 0; g < this.gaps.length; ++g){
      for (let i = this.gaps[g]; i < this.dataStore.length; ++i){
        let temp = this.dataStore[i];
        let j;
        for(j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j-= this.gaps[g]){
          this.dataStore[j] = this.dataStore[j - this.gaps[g]];
        }
        this.dataStore[j] = temp;
      }
    }
  }

  module.exports = {
    shellSort1,
    shellSort2
  };
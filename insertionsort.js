function insertionSort(array){
    for(let i=1;i<array.length;i++){
        for(let j=i;j>0;j--){
            if(array[j]<array[j-1]){
                const temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }
            else{
                break;
            }
        }
    }
    return array;
}
const arr = [4,6,7,45,89,2,6];
console.log(insertionSort(arr))
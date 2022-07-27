function bubbleSort(array){
    for(let i=0;i<array.length -1;i++){
        for(let j=0;j<array.length-1-i;j++){
            if(array[j] > array[j+1]){
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}
const arr = [1,4,5,2,67,89,45,3];
console.log(bubbleSort(arr))
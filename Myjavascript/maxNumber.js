const items=[1500,800,3,88,6000]
var largestNumber = (items) =>{
    let max=items[0];
    for( i = 1; i < items.length; i++){
        if (items[i] > max) {
            max=items[i];
        }
        
    }
    console.log("The value of i is : "+i);
    return max;
}
console.log(largestNumber(items));
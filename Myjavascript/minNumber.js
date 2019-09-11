const items=[1500,800,3,88]
var largestNumber = (items) =>{

    let min=items[0];
    for(i=1;i<items.length;i++){
        
        if(items[i] < min)
        
        {

        min=items[i];
 
    }
}
return min;
}
console.log(largestNumber(items));
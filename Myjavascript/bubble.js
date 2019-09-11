var bubbleSort = (items) =>{
  
    for (i=0; i<items.length; i++){
        for ( j=i+1; j<items.length; j++){
 
            if(items[i]>items[j]){
             var temp=items[i];
                 items[i]=items[j];
                 items[j]=temp;
             }
 
        }
     }
        return items;
 }
 
 console.log(bubbleSort([66,88,45,0,55,88,13,23,44,99]));
var a = (items)=>{

     

     for(i=0,j=items.length-1;i<=j;i++,j--){
       
       
       let temp = items[j];
       items[j] = items[i];
       items[i] = temp;  

      }

    return items;
    }
      console.log(a([1,2,3,4,5,6,7,8,9]));
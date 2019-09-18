var a = (items) =>{
    
    for(i=0;i<items.length;i++){
        let item = items[i];
        if(item%2==0){
           item = item*3;
           console.log(item);
        }
        else{
            item=item*5;
            console.log(item);
        }    
    }  
    return items;
    }

console.log(a([2,7,8,10,11,13]));



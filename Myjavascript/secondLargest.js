var secondLargestnumber = (items) =>{

   for(i=0;i<items.length;i++){
       for(j=i+1;j<items.length;j++){

           if(items[i]<items[j]){
            var temp=items[i];
                items[i]=items[j];
                items[j]=temp;


            }
           

       }
    }
       return items[1];
}

       console.log(secondLargestnumber([66,88,45,24,55,44,77]));





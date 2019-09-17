var a = (items) =>{
    var temp=0;

      for(i=2;i<=items-1;i++){
          if(items%i==0){
              temp=temp+1;
            }
        }
      if(temp==0){
          console.log("true");
      }
      else{
          console.log("false");
      }

}
a(10);
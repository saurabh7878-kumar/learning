/*
var number = (item) =>{
    console.log("My item is : "+typeof item)
    if(item%2===0){
        return true;
    }else {
        return false;
        }
    };
    */
var number = (item) =>{
    console.log("My item is : "+typeof item)
    if(item%2===0){
        return true;
    }else {
        return false;
        }
    };
console.log(process.argv);
console.log(number(process.argv[2])
    );



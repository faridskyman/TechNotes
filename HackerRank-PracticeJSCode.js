//Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e., factorial).
//We return the value of 4! = 4*3*2*1
//Solution

function factorial(datain){

    for(var i=datain-1; i>1;i--){
    
        datain = datain * i
    }
    
    return datain
 }

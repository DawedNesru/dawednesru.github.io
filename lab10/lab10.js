function remove(){
   
   

}

const arr = "I love my religion more than anything. It gives me peace of mind";
const str = "love";

let arr5 = [4, 2, 7, 9, 4, 3, 2];

String.prototype.filter = function(str){
    
    const arr2 = arr.split(" ");
    let arr3;
    for(let a of arr2){
        if(a !== str)
       if(arr3 === undefined)
        arr3 = a +"  ";
        else  arr3 += a +"  ";
    }
return arr3;
}

console.log(arr.filter(str))





Array.prototype.bubblesort = function(){
    for (let i = 0; i < arr5.length; i++)      
      
    for (let j = 0; j < arr5.length-1; j++)  
        if (arr5[j] > arr5[j+1])  
        {   arr5 = swap(arr5, arr5[j], arr5[j+1]);  
             }
    return arr5;
}

function swap(arr5, xp, yp)  
{  
    let temp = arr5[xp];  
    arr5[xp] = arr5[yp];  
    arr5[yp] = temp; 
    return arr5; 
}  

console.log(arr5.bubblesort());
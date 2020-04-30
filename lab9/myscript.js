function reverseArrayInPlace(){
    const str = document.getElementById("reversible").value;
    const rev2 = str.split(",");
    for(let j = rev2.length-1; j >= 0;  j--){
        alert(rev2[j]);
    }
  
}

function reverseArray(){
    const funcs = [];
    var str = document.getElementById("reversible").value;
    var rev =str.split(",");
    for (let i = 0; i < rev.length; i++) {
        funcs[i] = function() {
        return rev[i];
        };
        } 
        
        for (let i = funcs.length-1; i >= 0; i--) 
            alert(funcs[i]());
}



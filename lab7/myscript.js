window.onload = function(){
    "use strict";
    // put all of your code here

//This is to give information to the user when he/she visits the website

    alert("please, choose what i want to do first from the radio button");

}

//this is to display the max of two numbers
function maxOfTwo(){
    var x = document.getElementById("firstmaxtwo").value;
    var y = document.getElementById("secondmaxtwo").value;
    if(x > y)
alert(x + "is greater than " + y);
else  if(x < y)
alert(y + " is greater than " + x);
else{
    alert("both are equal");
}
}


//this is to display the max of three numbers
function maxOfThree(){
    var x = document.getElementById("firstmaxthree").value;
    var y = document.getElementById("secondmaxthree").value;
    var z = document.getElementById("thirdmaxthree").value;
    if(x > y)
    {
        if(x > z){
            alert(x + " is the greatest of all");
        }
        else
        if(z > y){
            alert(z + " is the greatest of all");
        }
    }

    else if(y > z)
    {
        alert(y + " is the greatest of all");
    }
else    alert(z + " is the greatest of all");
}

function isVowel(){
    var z = document.getElementById("lettercheck").value;
    var vowelslt = ['a', 'e', 'i', 'o', 'u'];
    var flag = 0;
    if(z.length > 1)
    {
        alert("please enter only one character");
    }
   
    else
    {
        for(var i = 0; i < vowelslt.length; i++){
        if(z === vowelslt[i])
       flag = 1;
        else if(z === 'y')
        flag = 2;
        else
       flag = 0;
        }
    }

    if(flag === 1)
    alert("this letter is a vowel");
    else   if(flag === 2)
    alert("we are confused about this letter. Y/y is sometimes vowel and sometimes Consonant");
    else
    alert("this letter is Consonant");
}




//this is to display the sum of array elements
function sumUp(){
    var nums = document.getElementById("list").value;
  var  values = nums.split(',');
 
alert( values.reduce((preval, ele) => (parseInt(preval) + parseInt(ele))));
}


//this is to display the product of array elements
function product2(){
  var nums2 = document.getElementById("list2").value;
  var  values = nums2.split(',');
   alert( values.reduce((preval, ele) => (parseInt(preval) * parseInt(ele))));
}


//this is to reverse a string
function reverseIt(){
  
    var str = document.getElementById("reversible").value;
     var  values = str.split('');
  
    alert(values.reduce((pre, i) => i + pre));
  
}

//this is to return the longest word
function longerWordValue(){
    var str = document.getElementById("longestcheck").value;
    var splitStr = str.split(",");
    var max = splitStr[0].length;
    var lo = splitStr[0];
    for(var k = 1; k < splitStr.length; k++){
        if(max < splitStr[k].length){
            max = splitStr[k].length;
              lo = splitStr[k];
          }
    }

   alert(lo);
}


//this is to return the index of the longest word
function findLongestWord(){
    var str = document.getElementById("longestcheck").value;
    var splitStr = str.split(",");
    var max = splitStr[0].length;
    var lo = 0;
    for(var k = 1; k < splitStr.length; k++){
          if(max < splitStr[k].length){
              max = splitStr[k].length;
              lo = k;
          }
    }

   alert(lo);
}

//this is to return the array whose length are specified
function filterLongWords(){
    var str = document.getElementById("longestcheck").value;
    var sss = document.getElementById("ivalue").value;
    var splitStr = str.split(",");
  alert(splitStr.filter((ele, sss) => (parseInt(sss) < ele.length)));
}

// this function is about all three questions regarding stream types
function streamTasks(x){
    var a = [1,3,5,3,3]; 
    var b;
    if(x === 1){
       b = a.map(function(elem, i, array) {
            return elem * 10;});// [4,6,8,6,6]
    }
  else  if(x === 2){
         b = a.filter(function(elem, i, array) {
            return elem === 3;});
    }
    else  if(x === 3){
         b = a.reduce(function(prevVal, elem){
            return prevVal * elem;}, 1);
    }
    alert(b);
}
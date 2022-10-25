const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const reset = document.getElementById("reset");
let val = document.getElementById("val");

let count = 0;

inc.addEventListener("click", ()=>{
    count = count + 1;
  val.innerHTML = count;  
});



dec.addEventListener("click", ()=>{
    if (count>0) {
        count + 1
    } else {
        alert("number is 0")
        
    }
    count = count - 1;
    if(count = -1){
        count = 0
    }
  val.innerHTML = count;  
});



reset.addEventListener("click", ()=>{
    count = 0;
  val.innerHTML = count;  
});
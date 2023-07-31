// JavaScript
let value=null;
function dis(num){
    value=num;
}
function submit(){
    if(value!==null)
    {
        const resultDiv=document.querySelector(".result");
        resultDiv.style.display='block';
        document.getElementById("rating").textContent=value;
       const body=document.querySelector(".container");
       body.style.display='none';
    }
    else{
        alert('please select a rating before submit');
    }
}
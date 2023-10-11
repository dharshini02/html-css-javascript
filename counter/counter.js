let count=0;
let number=document.getElementById('calculatenumber');
let btn=document.querySelectorAll('.btns');
btn.forEach(function(button){
button.addEventListener('click',function(e){
    console.log(e);
    const styles=e.currentTarget.classList;
   console.log(styles);
    if(styles.contains("plus"))
    {
        count++;
    }
    else if(styles.contains("minus")){
        count--;
    }
    else{
        count=0;

    }
    if(count>0)
    {
        number.style.color="green";

    }
    else  if(count<0)
    {
        number.style.color="red";
    }
    if(count===0){
        number.style.color="black";
    }
    number.textContent=count;
})
});

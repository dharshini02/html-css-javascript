let col=['green','red','rgb(0,0,255)','#f4f4','brown'];
let color=document.querySelector('.colors');
let btn=document.getElementById('btn');

btn.addEventListener('click',function(){
    let randnum=randomNumber();
document.body.style.backgroundColor=col[randnum];
color.textContent=col[randnum];
});
function randomNumber(){
    return Math.floor(Math.random()*col.length);
   
}
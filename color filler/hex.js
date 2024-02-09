let alphanum=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

let color=document.querySelector('.colors');
let btn=document.getElementById('btn');
btn.addEventListener('click',function(){
    let colorhex='#';
    for(let i=0;i<6;i++){
     colorhex +=alphanum[randnum()];
     
    }
    
    document.body.style.backgroundColor=colorhex;
    color.textContent=colorhex;
});
function randnum(){
 return Math.floor(Math.random()*alphanum.length);
}
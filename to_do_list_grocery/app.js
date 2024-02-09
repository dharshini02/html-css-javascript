const form=document.querySelector('.grocery-form');
const alert=document.querySelector('.alert');
const submit=document.querySelector('.submit-btn');
const grocery=document.getElementById('grocery');
const list=document.querySelector('.grocery-list');
const clearBtn=document.querySelector('.clear-btn');
const container=document.querySelector('.grocery-container');

let editElement;
let editFlag=false;
let editId="";
//add items
form.addEventListener('submit',addItems);
//clear items
clearBtn.addEventListener('click',clearItems);
function addItems(e){
    e.preventDefault();
let values=grocery.value ;
console.log(values);
let id=new Date().getTime().toString();
if(values !=="" && editFlag===false){
    const element=document.createElement('article');
    //add class
    element.classList.add('grocery-item');
    //add id
    const attr=document.createAttribute('data-id');
    attr.value=id;
    element.setAttributeNode(attr);
    element.innerHTML=`
    <p class="title">${values}</p>
    <div class="btn-container">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
    </div>`;
    //delete element
    const deletebt=element.querySelector('.delete-btn');
    deletebt.addEventListener('click',deleteItem);
    //edit element
    const edit=element.querySelector('.edit-btn');
    edit.addEventListener('click',editItems);
    //append child
    list.appendChild(element);
    displayAlert('list added successfully',"success");
   //show container
    container.classList.add("show-container");
    console.log("list added");
    setbackDefault();
    addToLocalStorage(id,values);
}
else if(values!=="" && editFlag===true){
    editElement.innerHTML=values;
    displayAlert("value changed","success");
    setbackDefault();
    editLocalStorage(editId);
    console.log('editing');

}
else{
    displayAlert('please enter value',"danger");
    console.log("empty value");
}

}
function displayAlert(text,action){
  alert.textContent=text;
  alert.classList.add(`alert-${action}`);

  setTimeout(function(){
    alert.textContent="";
  alert.classList.remove(`alert-${action}`);
  },2000)
}
function clearItems(){
    const clear_items=document.querySelectorAll('.grocery-item');
    if(clear_items.length>0){
       clear_items.forEach(function(items)
       {
           list.removeChild(items);
       });
    }
   container.classList.remove("show-container");
   displayAlert("empty list","danger");
   setbackDefault();
   }
function setbackDefault(){
 grocery.value="";
   editFlag=false;
   editId="";
   submit.textContent="submit";
}
//edit function
function editItems(e) {
    const Element = e.currentTarget.parentElement.parentElement;

    editElement = e.currentTarget.parentElement.previousElementSibling; // Fix the typo here
    // Set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editId = Element.dataset.id;
    submit.textContent = "edit"; // Fix the typo here
    editLocalStorage(editId,value);
}

//delete function
function deleteItem(e){
    const remove_item=e.currentTarget.parentElement.parentElement;
    list.removeChild(remove_item);
    let id=e.currentTarget.id;
    displayAlert("list removed","danger");
   if(list.children.length===0){
    container.classList.remove("show-container");
   }  
   setbackDefault();
   removeLocalStorage(id);
}

//add local storage
function addToLocalStorage(id,values){
const grocery={id,values};
const items=getLocalStorage();
items.push(grocery);
localStorage.setItem("list",JSON.stringify(items));
}

function removeLocalStorage(id){
let items=getLocalStorage();
items=items.filter(function(item){
    if(item.id!==id){
     return item;
    }
});
localStorage.setItem("list",JSON.stringify(items));
}
function editLocalStorage(id,values){
    let items=getLocalStorage();
    items=items.map(function(item){
        if(items.id ===  item){
            item.value=values;
        }
        return item;
    });
    localStorage.setItem("list",JSON.stringify(items));
}
function getLocalStorage(){
return localStorage.getItem("list")? JSON.parse(localStorage.getItem("list")):[];
}

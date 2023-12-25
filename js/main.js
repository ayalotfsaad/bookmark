var siteName = document.getElementById('siteName');
var webSite = document.getElementById('webSite');
var button = document.getElementById('btn');
var update = document.getElementById('update')
var alertBox=document.getElementById('alertBox')
var closebtn=document.getElementById('closebtn')
var form=document.getElementById('form')

alertBox.style.display='none';


var webItemArr = [];

(function () {
    if (localStorage.getItem("webItem"))
        webItemArr = JSON.parse(localStorage.getItem("webItem"))
    display()
})();


button.onclick = function () {
    addItem()
    clearForm()
}

function addItem() {
    if(nameRegex() && urlRegex()){
        var webItem = {
            siteName: siteName.value,
            webSite: webSite.value
        }
    
        webItemArr.push(webItem)
        localStorage.setItem('webItem', JSON.stringify(webItemArr))
        display()
    }
    else{
        alertBox.style.display='block';
 
    }
 
}

closebtn.onclick=function(){
    closebtn.style.display='none'
    alertBox.style.display='none';

}




function display() {
    var box = '';
    for (var i = 0; i < webItemArr.length; i++) {
        box += `
        <tr class="text-capitalize text-center ">
        <td >${i + 1}</td>
        <td>${webItemArr[i].siteName}</td>
        <td><button class="btn visit " onclick="openLink(this)" value="${webItemArr[i].webSite}">
        <i class="fa-regular fa-eye"></i>
        Visit
        </button></td>
        <td><button class="btn btn-danger delete-btn" onclick="deleteItem(${i})" >
        <i class="fa-solid fa-trash-can"></i>
        Delete</button></td>
    </tr>
        `
    }
    update.innerHTML = box


}
function openLink(link){
    console.log(link.value);
    window.open(link.value)
}
function clearForm() {
    siteName.value = '';
    webSite.value = '';
}
function deleteItem(index) {

    webItemArr.splice(index, 1)
    localStorage.setItem('webItem', JSON.stringify(webItemArr))
    display()
    
}
// validiation 
function nameRegex(){
    var regex =/^[a-z]{3,}$/;
   return regex.test(siteName.value)
}
function urlRegex(){
    var regex=/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
return regex.test(webSite.value)
};
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInput();
});
function checkInput(){
 const siteName=siteName.value.trim();
 const webSite=webSite.value.trim();
if(siteName === ''){
setsuccessfor(siteName)
}else {
seterrorfor(siteName)
}

}
var userControl=document.querySelectorAll('.user-control')

function setsuccessfor(input){
    userControl=input.parentElement
}


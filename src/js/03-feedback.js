
import Throttle from "lodash.throttle" 
 
    const form = document.querySelector(".feedback-form"); 
    const email = form.querySelector("[name=email]"); 
    const message = form.querySelector("[name=message]"); 

const localKey = "feedback-form-state" 
 
form.addEventListener("input", Throttle(storageFromData, 500)); 
form.addEventListener("submit", onFormSubmit); 

saveMessag();

function saveMessag() {
    const onMessage = localStorage.getItem(localKey);
    if (onMessage) {
        const data = JSON.parse(onMessage);
        message.value = data.message;
        email.value = data.email;
    } 
}
 
function onFormSubmit(event){ 
    event.preventDefault(); 
    const {email, message}=event.currentTarget.elements 
    console.dir({email: email.value, message:message.value}) 
    event.currentTarget.reset();
} 
 
function storageFromData(event){ 
    const formValue = {email:"", message:""}; 
 
    if(localStorage.getItem(localKey)){ 
        Object.assign(formValue, JSON.parse(localStorage.getItem(localKey))) 
    } 
    formValue[event.target.name] = event.target.value; 
    localStorage.setItem(localKey, JSON.stringify(formValue)) 
}


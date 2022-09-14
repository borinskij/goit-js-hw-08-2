

import Throttle from "lodash.throttle" 
 
    const form = document.querySelector(".feedback-form"); 
    const email = form.querySelector("[name=email]"); 
    const message = form.querySelector("[name=message]"); 
 
const localKey = "feedback-form-state" 
 
form.addEventListener("input", Throttle(storageFromData, 500)); 
form.addEventListener("submit", onFormSubmit); 
 
function onFormSubmit(event){ 
    event.preventDefault(); 
    const {email, message}=event.currentTarget.elements 
    console.dir({email: email.value, message:message.value}) 
     
    localStorage.removeItem(localKey); 
    email.value = ""; 
    message.value = ""; 
 
} 
 
function storageFromData(event){ 
    const formValue = {email:"", message:""}; 
 
    if(localStorage.getItem(localKey)){ 
        Object.assign(formValue, JSON.parse(localStorage.getItem(localKey))) 
    } 
 
    formValue[event.target.name] = event.target.value; 
 
 
 
    localStorage.setItem(localKey, JSON.stringify(formValue)) 
}


// const refs = {
//     form: document.querySelector('.feedback-form'),
//     email: document.querySelector('[name="email"]'),
//     message: document.querySelector('[name="message"]'),
// }
// const{form, email,message} = refs

// const localKey = "feedback-form-state";

// form.addEventListener('input', onSrtorageFormData);

// for

// function onSrtorageFormData(event) {
//     // console.dir(event.target)
//     const formValue = { email: '', message: '' };
//     if (localStorage.getItem(localKey)) {
//     Object.assign(formValue, JSON.parse(localStorage.getItem(localKey))
// )}

//     formValue[event.target.name] = event.target.value;
//     console.log(formValue)


//     localStorage.setItem(localKey, JSON.stringify(formValue));
// }
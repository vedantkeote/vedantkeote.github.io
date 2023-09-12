const wrapper=document.querySelector(".wrapper");
const loginLink=document.querySelector(".login-link");
const registerLink=document.querySelector(".register-link");
const btnPopup=document.querySelector(".btnLogin-popup");
const iconClose=document.querySelector(".icon-close");
const Alert=document.querySelector(".Alertbox");

registerLink.addEventListener("click",()=>{
    wrapper.classList.add("active");
});
loginLink.addEventListener("click",()=>{
    wrapper.classList.remove("active");
});
btnPopup.addEventListener("click",()=>{
    wrapper.classList.add("active-popup");
});
iconClose.addEventListener("click",()=>{
    wrapper.classList.remove("active-popup");
});
Alert.addEventListener("error",()=>{
    Alert.classList.remove("active-error");
});
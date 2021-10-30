
const logintForm=document.querySelector("#login-form");
const loginInput =document.querySelector("#login-form input");
const greeting=document.querySelector("greeting");
const HIDDEN_CLASSNAME="hidden";


function onLoginsubmit(event){
    event.prventDefault();
    logintForm.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    greeting.innerText= "Hello"+username;
    greeting.innerText='Hello  ${username}';
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

logintForm.addEventListener("submit" , onLoginsubmit);

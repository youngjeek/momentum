const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
//Modal
const modalText = document.querySelector(".modalContent div:last-child");
const modal = document.getElementById("modalMsg");
const span = document.getElementsByClassName("close")[0];

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);
//submit username
function onLogInSubmit(event){
    event.preventDefault();//새로고침방지
    const idName = loginInput.value;
    const alertMsg = document.querySelector("#alertMsg"); //get dialog
    if(idName === null){
        getMsg("Please write your name");
        alertMsg.showModal();//show dialog
        setTimeout(closeMsg,1000); //일정시간 후 dialog종료 함수 실행
    }else if(idName.length < 4) {
        getMsg("Your name is too short. Please 2 more characters :)")
        alertMsg.showModal();
        setTimeout(closeMsg,1000);
    }else{
        //when the user click log-in button with input value, open the modal
        localStorage.setItem(USERNAME_KEY,idName); //로컬메모리에 username:입력값 형식으로 저장
        modalText.innerText = `${idName}!!`; //idName값을 모달 환영메시지에 반영
        openModal();
        setTimeout(onModalXClick,2000);
        painGreetings(idName);
        loginForm.classList.add(HIDDEN_CLASSNAME);//hide form
    }
} 
//print username
function painGreetings(savedUsername){
    greeting.innerText ="Hello "+ savedUsername;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
// set msg on dialog
function getMsg(msg){
    const dialog = document.querySelector("#alertMsg span");
    dialog.innerText = msg;
}
// close dialog
function closeMsg(){
    const dialog = document.getElementById("alertMsg");
    dialog.close();
}
//open modal
function openModal(){
    modal.style.display = "block";
}
// close modal
function onModalXClick(){
    modal.style.display = "none";
}
// when the user clicks anywhere outside of the modal, close while showing modal
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}
// when the user clicks on <span> x, close the modal
span.addEventListener("click",onModalXClick);

// when no username
if(savedUsername === null){
//show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLogInSubmit); 
}else{
//show the greetings
    painGreetings(savedUsername); 
}
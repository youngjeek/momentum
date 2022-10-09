const colors = ["#ef577750","#575fcf50","#4bcffa50","#34e7e450","#0be88150","#f53b5750","#3c40c650","#0fbcf950","#00d8d650","#05c46b50","#ffc04850","#ffdd5950","#ff5e5750","#d2dae250","#48546050","#ffa80150","#ffd32a50","#ff3f3450"];
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY ="todos";
let toDos = [];

function saveToDo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
//체크박스 토글
function checkToDo(event){
    li = event.target.parentElement;
 //   toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.classList.toggle('selected');
}
//리스트 삭제
function deleteToDo(event){
    li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove(); //필터는 기존 배열에 추/제 아님 기존배열 지우기
    saveToDo(); //필터링된 새배열 스토리지에 저장
}
//리스트 추가
function paintToDo(newTodo){
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type","checkbox");
    checkBox.addEventListener("click",checkToDo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText =`  ${newTodo.text}`;
    const button = document.createElement("button");
    button.setAttribute("class","fa-solid fa-delete-left");
    button.addEventListener("click",deleteToDo);
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.append(li);
    console.log(li);
}
//이벤트에 발생 시 실행
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value= "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDo();
    changeBgcolor();
}
toDoForm.addEventListener("submit", handleToDoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);  //function paintToDo(newTodo: any): void
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function goodFilter(){return item !== 3;
}
//change background color when submit To-do
const todoBg = document.querySelector(".todoData");
  //get random Color
function randomColor(){
    const numberColor = colors[Math.floor(Math.random()*colors.length)];
    return numberColor;
}
function changeBgcolor() {
    // for gradation get two colors
    const leftColor = randomColor();
    const rightColor = randomColor();
    todoBg.style.background = `linear-gradient(to left,${leftColor},${rightColor})`;
}
// const setForm = document.getElementById("dDay-month");
// const getForm = document.querySelector("#dDay-day");
const dDaySubmit = document.getElementById("dDay-day");
const getMonth = document.querySelector("#dDay-month input");
const getDay = document.querySelector("#dDay-day Input");
const printResult = document.querySelector(".dDay-result");
const printDdayClock = document.querySelector(".dDay-clock");
function getToday(){
    const date = new Date();
    const dday = createDday(date);
}
function createDday(today){
    const theDay = new Date();

    theDay.setMonth(getMonth.value);
    theDay.setDate(getDay.value);
//입력한 D-day출력
    printResult.innerText = `${theDay.getMonth()}월 ${theDay.getDate()}일까지`;
    const adjustMonth = getMonth.value-1;
    theDay.setMonth(adjustMonth);
    let days = theDay - today;
    console.log(days);
    if(days < 0){
        theDay.setFullYear(theDay.getFullYear()+1);
        console.log(theDay);
    }
    days = theDay - today;
    const countday = String(Math.floor(days/(1000*60*60*24)));
    printDdayClock.innerText = `D - ${countday}일`;
}
//이벤트에 발생 시 실행
function handleToDoSubmit(event){
    event.preventDefault();
    getToday();
}
dDaySubmit.addEventListener("submit", handleToDoSubmit);
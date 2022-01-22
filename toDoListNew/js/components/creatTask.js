import {postData} from "../services/postData.js";

function creatTask(){
    const btn = document.querySelector(".btn__js")
    let i1 = document.querySelector('.title__task').value;
    let i2 = document.querySelector('.text__task').value;
    const obj = {
        "taskTitle" : i1,
        "taskText" : i2,
        "IsFinished": "false",
        "date": "2021-08-30",
        "color": "#218e0b"
    }
    postData('http://localhost:3000/task', JSON.stringify(obj));
 
}
 
export{creatTask};

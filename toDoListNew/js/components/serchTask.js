import { deleteData } from "../services/deleteData.js";
import { getData } from "../services/getData.js";
import {deleteTask} from './deleteTask.js';
import {putTask} from './putTask.js';



let serchImput = document.querySelector('.form-control');
function serchTask(){
    getData('http://localhost:3000/task').then(data => f1(data)).then(data => {
      deleteTask();
      putTask();
    });

}
let filt = [];

function f1(data){
filt = data.filter(item => item.taskTitle.indexOf(serchImput.value) >= 0);
if (filt.length != 0) {
 document.querySelector('.out-false').classList.add('hidden');
 document.querySelector('.out-true').classList.add('hidden');
  filt.forEach(element => {
    serch(element);
  });
}    
}
function serch(item){
 
  if(item.IsFinished ===  "true"){
    document.querySelector('.container').innerHTML += `<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
    <div class="card-header">${item.taskTitle}</div>
  <button class="delete btn btn-warning" type="button" id="${item.id}">удалить</button>
    <div class="card-body">
      <p class="card-text">${item.taskText}</p>
    </div>
  </div>
  `
  }else{
    document.querySelector('.container').innerHTML += `<div class="card text-white bg-danger mb-3 " style="max-width: 18rem;">
    <div class="card-header">${item.taskTitle}
    </div>
    <button class="delete btn btn-warning" id="${item.id}" type="button">удалить</button>
    <button class="ended btn btn-success" id="${item.id}" type="button">выполненно</button>
    <div class="card-body">
      <p class="card-text">${item.taskText}</p>
    </div>
  </div>
  `
  }
}

function back(){
 window.location.reload();
}

export{serchTask};
export{back};
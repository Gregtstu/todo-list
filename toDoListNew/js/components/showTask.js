import {getData} from '../services/getData.js';
import {deleteTask} from './deleteTask.js';
import {putTask} from './putTask.js';


function showTask() {
  getData('http://localhost:3000/task').then(data => 
    data.forEach(item => {
      if(item.IsFinished == 'false'){
       noFinished(item);
      } else{
        finished(item);
      }
    })).then(data => deleteTask()).then(data => putTask());
 
}
function noFinished(item){
    
  document.querySelector('.out-false').innerHTML += `<div class="card text-white bg-danger mb-3 d-flex justify-content-evenly" style="max-width: 18rem;">
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


function finished(item){    
    document.querySelector('.out-true').innerHTML += `<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
    <div class="card-header">${item.taskTitle}</div>
  <button class="delete btn btn-warning" type="button" id="${item.id}">удалить</button>
    <div class="card-body">
      <p class="card-text">${item.taskText}</p>
    </div>
  </div>
  `
 }



export{showTask};

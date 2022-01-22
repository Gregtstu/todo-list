import  {postData}  from '../services/postData.js';
import  {deleteData}  from '../services/deleteData.js';
import { putData } from '../services/putData.js';

function putTask() {
    console.log('ended');
    let ended = document.querySelectorAll('.ended');
    ended.forEach(item =>
        item.addEventListener('click', () => {
            const obj = {
                "taskTitle": item.parentElement.querySelector('.card-header').textContent,
                "taskText": item.parentElement.querySelector('.card-text').textContent,
                "IsFinished": "true",
                "date": "2021-08-30",
                "color": "#218e0b"
            }
            console.log(item.id);
            putData(`http://localhost:3000/task/${item.id}`, JSON.stringify(obj));

        }));

  
}

export{putTask};
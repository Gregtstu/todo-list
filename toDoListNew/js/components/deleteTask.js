import {deleteData} from "../services/deleteData.js";
// `http://localhost:3000/task/${deleteIztem.id}


function deleteTask() {
    let del = document.querySelectorAll('.delete')
    del.forEach(curentBuuttton => {
        curentBuuttton.addEventListener('click', () => {
            deleteData(`http://localhost:3000/task/${curentBuuttton.id}`);
        })
    });
}

export{deleteTask};
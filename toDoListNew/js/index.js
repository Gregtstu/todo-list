import {showTask} from "./components/showTask.js";
import {serchTask} from "./components/serchTask.js";
import {back} from "./components/serchTask.js";
import {creatTask} from "./components/creatTask.js";



showTask();
const btn = document.querySelector(".btn__js").addEventListener('click', () => {
    creatTask();
});
document.querySelector('.serch__btn').addEventListener('click' ,  () => {
    serchTask();
});

document.querySelector('.back').addEventListener('click' , () => {
    console.log('back');
    back();
})


    




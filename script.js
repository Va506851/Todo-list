const inputbox = document.querySelector('.input');
const Add = document.querySelector('.btn');
const taskbox = document.querySelector('.taskbox');
let unorderd = document.createElement('ul');
unorderd.class = 'unorderd'
unorderd.classList.add("unorderd")
taskbox.appendChild(unorderd);

Add.addEventListener('click',addtask)

function addtask(){
    let inputtext = inputbox.value;
    // console.log(inputtext)
   if(inputtext === ""){
      alert( 'Please Enter Your Task')
   }
    // let we created  list in inside unorder;
    let task = document.createElement('li');
    task.textContent = inputtext;
    task.class = 'taskitem'
    task.classList.add('taskitem')
    unorderd.appendChild(task)
    // now we clear input box
    inputbox.value = " ";
    //  here we create taskcomplete button
    let taskComplete = document.createElement('button')
    // taskComplete.class = 'done'
    taskComplete.classList.add('done')
    taskComplete.textContent = 'Done'
    task.appendChild(taskComplete);

    taskComplete.addEventListener('click',()=>{
        task.style.textDecoration = 'line-through'
    })
    // here we create Delete button
    let Delete = document.createElement('button');
    // Delete.class = 'delete'
    Delete.classList.add('delete')
    Delete.textContent = 'Delete'
    task.appendChild(Delete);
    
    Delete.addEventListener('click',()=>{
        task.remove();
    })

    
    
     
}
let newTask = document.querySelector(".text");
let totalTask = document.querySelector(".total");
let agregarTask = document.querySelector(".agregar");
let doneTotal = document.querySelector(".realizado")
let tabla = document.querySelector("table tbody");
let totalPendientes = document.querySelector(".pendientes")


let hechos= 0;
let taskList = [];
let taskHistory = [];


function addTask() {
    let add = newTask.value.trim();
    if (add === "") return;

    let id = taskHistory.length;
    console.log(id);
    let fila = tabla.insertRow();
    fila.id = `task-${id}`;

    let column1 = fila.insertCell(0);
    let column2 = fila.insertCell(1);
    let column3 = fila.insertCell(2);
    let column4 = fila.insertCell(3);

    /* Cambios en el HTML */
    column1.innerText = id;
    column2.innerText = add;
    column3.innerHTML = `<button class="done" id="done-${id}" onclick="clearTask(${id})">DONE</button>`;
    column4.innerHTML = `<button class="delete" id="delete-${id}" onclick="deleteTask(${id})">DELETE</button>`;

    totalTask.nextElementSibling.innerText = taskHistory.length + 1;
    totalPendientes.nextElementSibling.innerText = taskList.length + 1;
    taskList.push(add);
    taskHistory.push([add,'waiting']);


    newTask.value = "";
}

function contador() {
    totalPendientes.nextElementSibling.innerText = taskList.length;
}

function deleteTask(id) {
    let fila = document.getElementById(`task-${id}`);
    taskHistory[id][1] = 'Eliminado';
    taskList.splice(taskList.length-1, 1); 
    contador(); 
    if (fila) {
        fila.remove();
    }
}

function clearTask(id) {
    let fila = document.getElementById(`task-${id}`);
    taskHistory[id][1] = 'Realizado';
    taskList.splice(taskList.length-1, 1); 
    hechos++; 
    contador();
    if (fila) {
        fila.style.backgroundColor='green';
    }
    doneTotal.nextElementSibling.innerText = hechos;
}

function realizadosTotal() {
    console.log(taskHistory)
}

realizadosTotal();
agregarTask.addEventListener("click", addTask);
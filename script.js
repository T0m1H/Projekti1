document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Tällä estetään sivun uudelleenlataus.
    addTask();
  });
  
  function addTask() {
    var taskInput = document.getElementById('new-task');
    var taskText = taskInput.value.trim();
   
    if (taskText === '') return;
  
    // Luodaan lista
    var listItem = document.createElement('li');
  
    // Checkbox tuhottoman väännön jälkeen
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
      listItem.classList.toggle('completed');
    };
    listItem.appendChild(checkbox);
  
    // Lisätään tehtävä
    var taskSpan = document.createElement('span');
    taskSpan.innerText = taskText;
    listItem.appendChild(taskSpan);
  
    // Poistonappi
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Poista';
    deleteButton.onclick = function() {
      this.parentElement.remove(); 
    };
    listItem.appendChild(deleteButton);
  
    // Lisää uuden tehtävän listaan
    var taskList = document.getElementById('task-list');
    taskList.appendChild(listItem);
  
} 
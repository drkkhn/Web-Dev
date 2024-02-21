function newElement() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        var li = document.createElement("li");
        li.textContent = inputValue;
        
        // Create check button
        var checkBtn = document.createElement("button");
        checkBtn.className = "checkBtn";
        checkBtn.innerHTML = '<i class="fas fa-check"></i>';
        checkBtn.onclick = function() {
            li.classList.toggle("checked");
            saveTasks();
        };
        li.appendChild(checkBtn);
        
        // Create delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.className = "deleteBtn";
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteBtn.onclick = function() {
            li.remove();
            saveTasks();
        };
        li.appendChild(deleteBtn);
        
        document.getElementById("myUL").appendChild(li);

        // Save the task to localStorage
        saveTasks();
    }
    document.getElementById("myInput").value = "";
}

// Load tasks from localStorage on page load
document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});

// Function to save tasks to localStorage
function saveTasks() {
    var tasks = [];
    var lis = document.querySelectorAll("#myUL li");
    lis.forEach(function(li) {
        tasks.push(li.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
        tasks.forEach(function(task) {
            var li = document.createElement("li");
            li.textContent = task;
            document.getElementById("myUL").appendChild(li);
        });
    }
}

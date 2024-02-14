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
        };
        li.appendChild(checkBtn);
        
        // Create delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.className = "deleteBtn";
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteBtn.onclick = function() {
            li.remove();
        };
        li.appendChild(deleteBtn);
        
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
}

const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'manohar' && password === '1234') {
        document.getElementById('login-error').innerHTML = ''; // Clear any previous error messages
        document.querySelector('.login-container').style.display = 'none';

        document.getElementById('todo-container').style.display = 'block';
        showTask(); // Call the function to display tasks after successful login
    } else {
        document.getElementById('login-error').innerHTML = 'Incorrect username or password.';
    }
}



function addTask() {
	if(inputBox.value === ''){
		alert("You must write something!");
	}
	else{
		let li = document.createElement("li");
		li.innerHTML=inputBox.value;
		listContainer.appendChild(li);
		let span=document.createElement("span");
		span.innerHTML="\u00d7";
		li.appendChild(span);
	}
	imputBox.value="";
	saveData();
} 
listContainer.addEventListener("click",function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData()
	}

	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		saveData()
	}
}, false);

function saveData(){
	localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
	listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
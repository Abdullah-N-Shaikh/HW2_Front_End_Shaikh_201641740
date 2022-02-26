

function addTask(){
    // Get the text from the input filed 
var inputTask = document.getElementById("UserInput").value;
    // Create h2 element 
const updateH2 = document.createElement('h2');
    // Append the h2 element to the third div 
const updateDiv3 = document.querySelector('.Div_three')
    // Add the text to the h2 element
updateH2.innerHTML = inputTask;
updateDiv3.append(updateH2);
    // Set the input feild to empty
    document.getElementById('UserInput').value = '';
}
// Get the reference to the span element
const timeDisplay = document.getElementById("time-display");

// Function to update time display
function updateTime() {
    const currentTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
  timeDisplay.textContent = currentTime;
}

// Call updateTime function initially to display the current time
updateTime();

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);

function saveChanges() {
    const nameValue = document.getElementById('project-name').value;
    const typeValue = document.getElementById('project-type').value;
    const dateValue = document.getElementById('project-date').value;
  
    
  
    // Close the modal if needed
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.hide();
  }
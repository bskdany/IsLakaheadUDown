// update.js

function updateVariableValue() {
    fetch('/getVariableValue')
      .then(response => response.json())
      .then(data => {
        const variableValueElement = document.getElementById('isWebsiteDown');
        variableValueElement.textContent = `Updated value: ${data.isWebsiteDown}`;
      })
      .catch(error => {
        console.error('Error fetching variable value:', error);
      });
  }
  
  setInterval(updateVariableValue, 1000);
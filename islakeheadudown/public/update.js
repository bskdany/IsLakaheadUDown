// update.js

function updateVariableValue() {
    fetch('/checkIfWebsiteDown')
      .then(response => response.json())
      .then(data => {
        const variableValueElement = document.getElementById('isWebsiteDown');
        if(data.isWebsiteDown){
            variableValueElement.textContent = "YES"
        }
        else if(!data.isWebsiteDown){
            variableValueElement.textContent = "NO"
        }
      })
      .catch(error => {
        console.error('Error fetching variable value:', error);
      });
  }
  
  updateVariableValue()
  setInterval(updateVariableValue, 10000);
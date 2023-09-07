// update.js

function updateVariableValue() {
    fetch('/checkIfWebsiteDown')
      .then(response => response.json())
      .then(data => {
        const variableValueElement = document.getElementById('isWebsiteDown');
        const customMessage = document.getElementById('customMessage');
        const visitorCount = document.getElementById('visitorCount');

        if(data.isWebsiteDown){
            variableValueElement.textContent = "YES"
        }
        else if(!data.isWebsiteDown){
            variableValueElement.textContent = "NO"
        }
        customMessage.textContent = data.message;
        visitorCount.textContent = data.visitorCount;

      })
      .catch(error => {
        console.error('Error fetching variable value:', error);
      });
  }
  
  updateVariableValue()
  setInterval(updateVariableValue, 60000);
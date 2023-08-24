async function getStatus() {
    try {
        const response = await fetch('/');
        const data = await response.text();
        console.log('Received data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

setInterval(getStatus, 1000); // Update every minute
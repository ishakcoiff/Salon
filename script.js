  document.addEventListener('DOMContentLoaded', (event) => {
    try {
        const now = new Date();
        const date = now.toISOString().split('T')[0];
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const time = `${hours}:${minutes}`;

        document.getElementById('date').value = date;
        document.getElementById('time').value = time;
    } catch (error) {
        console.error('Error initializing date and time:', error);
    }
});

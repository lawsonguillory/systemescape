document.getElementById('dispute-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData();
    const fileInput = document.getElementById('document');
    formData.append('document', fileInput.files[0]);

    try {
        const response = await fetch('/api/submit-dispute', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        document.getElementById('response').innerText = result.message;
    } catch (error) {
        document.getElementById('response').innerText = 'An error occurred: ' + error.message;
    }
});

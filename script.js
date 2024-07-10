document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const issueType = document.getElementById('issueType').value;
    const issueDescription = document.getElementById('issueDescription').value;

    if (issueType && issueDescription) {
        alert('Report Submitted Successfully');
        // Here you can add your code to handle the form data, such as sending it to a server
    } else {
        alert('Please fill out all fields');
    }
});

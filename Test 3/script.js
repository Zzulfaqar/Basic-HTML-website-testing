// JavaScript to toggle the visibility of the message
function toggleMessage() {
    var message = document.getElementById('message');
    message.style.display = message.style.display === 'none' ? 'block' : 'none';
}

// Your existing script for the modal (if any)
function showPopup() {
    var myModal = new bootstrap.Modal(document.getElementById('popupModal'));
    myModal.show();
}

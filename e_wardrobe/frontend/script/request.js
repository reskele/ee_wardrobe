document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('donationRequestForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form from refreshing the page
  
      // Get form values
      const requesterName = document.getElementById('requesterName').value.trim();
      const requesterEmail = document.getElementById('requesterEmail').value.trim();
      const requestedItem = document.getElementById('requestedItem').value.trim();
      const reason = document.getElementById('reason').value.trim();
  
      // Validate form inputs
      if (!requesterName || !requesterEmail || !requestedItem || !reason) {
        alert('Please fill out all fields.');
        return;
      }
  
      // Simulate form submission (you can replace this with an API call)
      console.log('Request Submitted:', {
        requesterName,
        requesterEmail,
        requestedItem,
        reason,
      });
  
      // Show confirmation message
      form.classList.add('hidden');
      confirmationMessage.classList.remove('hidden');
    });
  });
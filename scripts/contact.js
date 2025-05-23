document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent page reload
  
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
  
    // Replace this URL with your actual API Gateway endpoint later
    const apiUrl = 'https://your-api-id.execute-api.region.amazonaws.com/prod/send';
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!response.ok) throw new Error('Error sending message.');
  
      alert('Message sent successfully!');
      e.target.reset();
    } catch (err) {
      console.error(err);
      alert('There was an error. Please try again later.');
    }
  });
  
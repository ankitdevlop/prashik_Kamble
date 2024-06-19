var typed = new Typed(".input", {
    strings: ["DevOps Engineer", "Cloud Engineer", "Cloud Solution Architect"],
    typedSpeed: 70,
    backSpeed: 55,
    loop: true
})

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show loader
    document.getElementById('loader').classList.remove('hidden');

    const formData = {
      firstName: document.getElementById('first_name').value,
      lastName: document.getElementById('last_name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone_number').value,
      message: document.getElementById('message').value,
    };

    fetch('http://13.127.188.182:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Hide loader
      document.getElementById('loader').classList.add('hidden');
      alert('Message sent successfully!');
      // Clear form
      document.getElementById('contact-form').reset();
    })
    .catch((error) => {
      console.error('Error:', error);
      // Hide loader
      document.getElementById('loader').classList.add('hidden');
      alert('There was an error sending your message.');
    });
  });

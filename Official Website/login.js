document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
      alert('Login Successful');
      // Redirect or handle successful login logic here
    } else {
      alert('Please enter both username and password');
    }
  });
  
  // Handle Social Login - Dummy Functionality
  document.querySelector('.facebook-btn').addEventListener('click', function() {
    fetch('https://graph.facebook.com/v12.0/me?access_token=YOUR_FACEBOOK_TOKEN')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Handle Facebook login logic here
      })
    .catch(error => {
        console.error(error);
        alert('Failed to log in with Facebook');
    })
    alert('Logged in with Facebook');
    // You can replace this with actual Facebook login functionality
  });
  
  document.querySelector('.google-btn').addEventListener('click', function() {
    fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=YOUR_GOOGLE_TOKEN')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Handle Google login logic here
      })
    .catch(error => {
        console.error(error);
        alert('Failed to log in with Google');
    })
    alert('Logged in with Google');
    // You can replace this with actual Google login functionality
  });
  
<!DOCTYPE html>
<html>
<head>
  <title>DevOPS Testing Project</title>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
<body>

  <h1>Welcome to DevOPS Testing Project</h1>

  <a href="https://www.DevOPSTesting.in" target="_blank">Click Here To See DevOPS Testing Schedules</a>

  <h2>Call Us: +91-9999999</h2>

  <h3>Our Office Location: K, Nagar, Pune</h3>

  <h4>Current Date and Time:</h4>
  <p id="datetime"></p>

  <script>
    const now = new Date();
    document.getElementById("datetime").innerText = now.toLocaleString();
  </script>

</body>
</html>

<?php
print_r($_POST); // This line is useful for debugging; it prints the submitted data.

// Database configuration
$servername = "127.0.0.1:3306"; // Change if your MySQL is hosted elsewhere
$username = "u303152537_ic75Q"; // Your MySQL username
$password = "@Noyau_6_dev"; // Your MySQL password
$dbname = "u303152537_qu1wT"; // Your database name in phpMyAdmin

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data and sanitize input
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $college = isset($_POST['college']) ? $_POST['college'] : '';
    $course = isset($_POST['course']) ? $_POST['course'] : '';
    $branch = isset($_POST['branch']) ? $_POST['branch'] : '';
    $year = isset($_POST['year']) ? $_POST['year'] : '';
   

  

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO users_profile (email, name, username, college, course, branch, year) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss",$email, $name, $username, $college, $course, $branch, $year);

    // Execute the query
    if ($stmt->execute()) {
        echo "New record created successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>

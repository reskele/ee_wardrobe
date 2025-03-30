<?php
// Include the database connection file
require 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get the form data and sanitize it
    $username = $conn->real_escape_string($_POST['username']);
    $password = $conn->real_escape_string($_POST['password']);
    $email = $conn->real_escape_string($_POST['email']);
    
    
    // Hash the password for security
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // SQL query to insert data into the login table
    $sql = "INSERT INTO authentication (username, password,email) VALUES ('$username', '$hashed_password','$email')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
} else {
    echo "Invalid request method.";
}
?>
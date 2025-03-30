<?php
// Include the database connection file
require 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get the form data and sanitize it
    $username = $conn->real_escape_string($_POST['username']);
    $age = $conn->real_escape_string($_POST['age']);
    $address = $conn->real_escape_string($_POST['address']);
    $email = $conn->real_escape_string($_POST['email']);
    $contact = $conn->real_escape_string($_POST['contact']);
    
    // Corrected SQL query to insert data into the recipient table
    $sql = "INSERT INTO recipient (username, age, address, email, contact) 
            VALUES ('$username', '$age', '$address', '$email', '$contact')";

    if ($conn->query($sql) === TRUE) {
        echo "Application successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
} else {
    echo "Invalid request method.";
}
?>

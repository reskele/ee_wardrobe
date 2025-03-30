<?php
// Include the database connection file
require 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data and sanitize it
    $email = $conn->real_escape_string($_POST['email']);
    $password = $conn->real_escape_string($_POST['password']);

    // SQL query to retrieve the user from the database
    $sql = "SELECT * FROM register WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Fetch user data
        $user = $result->fetch_assoc();

        // Verify the password
        if (password_verify($password, $user['password'])) {
            echo "Login successful! Welcome, " . $user['username'] . ".";
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "User not found. Please register first.";
    }

    // Close the database connection
    $conn->close();
} else {
    echo "Invalid request method.";
}
?>
<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "eventease_db";

// Connect to database
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$event_name = $_POST['event_name'];
$tickets = $_POST['tickets'];
$message = $_POST['message'];

// Insert into table
$sql = "INSERT INTO registrations (name, email, event_name, tickets, message)
        VALUES ('$name', '$email', '$event_name', $tickets, '$message')";

if ($conn->query($sql) === TRUE) {
    // Redirect to thank you page
    header("Location: thankyou.html");
    exit();
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>

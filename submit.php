<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    die("Invalid request method");
}

$conn = new mysqli("localhost", "root", "", "contact_form");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$contact = $_POST['contact'];
$message = $_POST['message'];

$stmt = $conn->prepare("INSERT INTO messages (name, contact, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $contact, $message);

if ($stmt->execute()) {
    header("Location: index.html?success=1#!/contact");
    exit();
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = htmlspecialchars(trim($_POST['email']));

    // Generate a random 6-digit OTP
    $otp = rand(100000, 999999);
    $_SESSION['otp'] = $otp; // Store OTP in session

    // Email details
    $to = $email;
    $subject = "Your OTP Code";
    $body = "Your OTP code is: $otp";
    $headers = "From: info.noyau@gmail.com"; // Replace with your email address

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "OTP sent successfully to $email.";
    } else {
        echo "Failed to send OTP.";
    }
} else {
    echo "Invalid request.";
}
?>

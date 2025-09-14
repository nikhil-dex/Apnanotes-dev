<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $enteredOtp = htmlspecialchars(trim($_POST['otp']));
    $email = htmlspecialchars(trim($_POST['email']));

    // Check if the entered OTP matches the stored OTP
    if (isset($_SESSION['otp']) && $enteredOtp == $_SESSION['otp']) {
        // Clear the OTP from the session
        unset($_SESSION['otp']);

        // Redirect to the next page (e.g., second.html)
        header("Location: second.html");
        exit(); // Ensure the script stops after redirection
    } else {
        echo "Invalid OTP. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>

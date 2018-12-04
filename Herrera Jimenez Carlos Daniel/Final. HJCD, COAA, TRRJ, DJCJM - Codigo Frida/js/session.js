// Check if the user has already logged in
// If so, redirect to the course.html page
function checkCurrentSession(callback) {
    $.post('php/verify_session.php', {}, callback, 'json');
}

// Close the current session
function closeSession(callback) {
    $.post('php/logout.php', {}, callback, 'json');
}
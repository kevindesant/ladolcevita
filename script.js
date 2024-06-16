document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.getElementById('password').value;
    var validPasswords = ['Amalfi', 'AMALFI', 'amalfi'];

    if (validPasswords.includes(password)) {
        window.location.href = 'versione piccola.pdf';
    } else {
        document.getElementById('password').value = '';
    }
});

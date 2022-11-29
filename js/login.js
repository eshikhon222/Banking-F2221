document.getElementById('submit-buttton').addEventListener('click', function () {
    //get user email
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    //get password
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;

    // console.log(userEmailText);
    // console.log(userPassword);

    //check validation
    if (userEmail == 'admin@admin.com' && userPassword == 123456) {
        window.location.href = 'banking.html'
    }
})
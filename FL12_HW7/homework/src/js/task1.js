let email = prompt('Enter your Email');
if (email === '' || email === null) {
    alert('Canceled');
} else if (email.length < 5) {
    alert(`I don't know any emails having name length less than 5 symbols`);
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    let password = prompt('Enter password');
    if (password === '' || password === null) {
        alert('Canceled');
    } else if (email === 'user@gmail.com' && password === 'UserPass' ||
        email === 'admin@gmail.com' && password === 'AdminPass') {
        if (confirm('Do you want to change your password?')) {
            let oldPassword = prompt('Enter your old password');
            if (oldPassword === '' || oldPassword === null) {
                alert('Canceled');
            } else if (email === 'user@gmail.com' && oldPassword === 'UserPass' ||
                email === 'admin@gmail.com' && oldPassword === 'AdminPass') {
                let newPassword = prompt('Enter new password');
                if (newPassword === '' || newPassword === null) {
                    alert('Canceled');
                } else if (newPassword.length < 6) {
                    alert(`It's too short password. Sorry.`)
                } else {
                    let newPassword2 = prompt('Enter password again')
                    if (newPassword2 === newPassword) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.')
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert(`I don't know you`);
}




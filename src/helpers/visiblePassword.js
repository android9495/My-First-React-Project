export const VisiblePasswordUser = () => {
    let password = document.getElementById('passUser');
    if (password.type === "password") {
        password.type = "text";
        document.querySelector('.show-hidden-box').classList.add('show');
    } else {
        password.type = "password";
        document.querySelector('.show-hidden-box').classList.remove('show');
    }
}
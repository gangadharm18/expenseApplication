const api='/expense';
function handleFormSignup(event) {
    event.preventDefault();
    const userName = event.target.userName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const userDetails = {
        userName,
        email,
        password
    }
    axios.post(api,userDetails).then(
        window.location.href="/login.html"
    )
    
}

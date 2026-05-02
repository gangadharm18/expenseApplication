const api = '/expense';

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
    axios.post(api, userDetails).then((res) => {
        
        alert(res.data.message);
       
        window.location.href = "/login.html"
           
    }

    )

}
//Login
function handleFormSignin(event) {
    event.preventDefault();
    
    const email = event.target.email.value;
    const password = event.target.password.value;

   const userDetails={
    email,
    password
   }

    axios.post(`${api}/login`,userDetails).then((res) => {
        const user=res.data

        if(user.message){
            alert(res.data.message)
            return
        }
       
        
    }

    ).catch(error=>{
       console.error(error)
    })

}

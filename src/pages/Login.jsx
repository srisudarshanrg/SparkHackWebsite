function Login() {
    const backendLink = "http://localhost:4444"
    const handleLoginSubmit = (event) => {
        event.preventDefault()

        username = event.target.username.value
        password = event.target.password.value

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        }

        fetch(`${backendLink}login`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <form method="post" onSubmit={handleLoginSubmit} style={{"marginTop": "20%"}}>
                <label htmlFor="username"></label>
                <input type="text" placeholder="Username" name="username" id="username" />
                
                <label htmlFor="password"></label>
                <input type="text" placeholder="Password" name="password" id="password" />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
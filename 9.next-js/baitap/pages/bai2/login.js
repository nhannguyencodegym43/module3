import "./style.css"
export default function Login () {
    return (
        <>
            <div className="login-page">
                <div className="login-container">
                    <h1>Login Page</h1>
                    <form>
                        <label>Username: </label>
                        <input type="text"/> <br/>
                        <label>Password: </label>
                        <input type="password"/> <br/>
                        <button>Log in</button>
                    </form>
                </div>
            </div>
        </>
    )
}
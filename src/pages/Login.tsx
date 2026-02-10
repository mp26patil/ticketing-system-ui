import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import { login } from "../service/authService";
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await login(username, password);
            // auth.login(response.token);
            localStorage.setItem('token', response.token);
            alert("Login Successful");
            navigate('/dashboard');
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div>
            <h2>Login</h2>  
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;

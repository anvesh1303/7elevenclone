import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { setLogin } from "../redux/dealSlice";
import { RootState } from "../redux/store";
import './Login.css'

const Login:React.FC = () =>{

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loginResponse, setLoginResponse] = useState<string>("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const location = useLocation();


    const loginSelector = useSelector<RootState, boolean>((state)=>state.deals.login);

    useEffect(()=>{
        if(location.pathname==="/"){
            dispatch(setLogin(false));
            console.log("useeffect ran and value of login is ", loginSelector);
        }
    }, [location.pathname])

    const loginrequest = async () =>{
        const request:AxiosResponse = await axios.post("http://localhost:5000/login", {username, password});
        const response: string = await request.data.login;
        setLoginResponse(response);
        dispatch(setLogin("success"===response));
        if(response === "success"){
            navigate("/deals");
        }
        else{
            setLoginResponse("fail");
        }
    }

    const signUp = async () =>{
        const request = await axios.post("http://localhost:5000/signup", {username, password});
        const response: string = await request.data.message;
        if(response==="created"){
            console.log(`User: ${response}`);
        }
        else{
            console.log(response);
        }
    }

    return(
        <div className="login-signup">
            <div className="login-container">
                <h1 className="login-header">Sign in to your <span className="seven">7</span><span className="eleven">ELEVEN</span> account</h1>
                <div className="loginsection">
                    <input type="text" placeholder="Enter your Email" className="email-ip" onChange={(e)=>setUsername(e.target.value)}></input>
                    
                    <input type="password" placeholder="Enter your Password" className="password-ip" onChange={(e)=>setPassword(e.target.value)}></input>

                    {loginResponse==="fail" && <div className="incorrect-creds">Your Username or Password is incorrect</div>}
                </div>
                <button className="login-btn" onClick={loginrequest}>Sign In</button>
                <button className="signup-btn" onClick={signUp}>Sign Up</button>
                <p className="login-disclaimer">By signing into the application or proceeding as a guest, you agree to our Privacy and Terms of Use.*</p>
            </div>
        </div>
    )
}

export default Login
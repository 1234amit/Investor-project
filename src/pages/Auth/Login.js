import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useAuth } from "../../context/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8888/api/v1/auth/login", {
                email,
                password,
            });
            if (res && res.data.success) {
                // toast.success(res.data && res.data.message);
                setTimeout(() => {
                    toast.success(res.data && res.data.message);
                }, 0);

                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                    userId: res.data.userId,
                });
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate(location.state || "/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <section className='bgGrad'>
            <Layout title="Login - Ecommer App">
                <div className="form-container text-center mt-5 pt-5">
                    <form onSubmit={handleSubmit}>
                        <h4 className="title">LOGIN FORM</h4>
                        <div className="mb-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control mx-auto"
                                id="exampleInputEmail1"
                                placeholder="Enter Your Email "
                                required
                                style={{ width: "30%" }}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control mx-auto"
                                id="exampleInputPassword1"
                                placeholder="Enter Your Password"
                                required
                                style={{ width: "30%" }}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block " style={{ width: "30%" }}>
                            LOGIN
                        </button>

                        <hr style={{ borderTop: "2px solid #B4B7BF", margin: "20px 0", width: "30%" }} className="mx-auto" />

                        <div className="mt-3">
                            <button
                                type="button"
                                className="btn"
                                onClick={() => {
                                    navigate("/forgot-password");
                                }}
                                style={{ width: "30%", backgroundColor: "#E4E8F1" }}
                            >
                                Forgot Password ?
                            </button>
                        </div>

                    </form>

                    <div className="mt-3">
                        <p>Don't have an account? Register here:<NavLink to="/register" style={{ textDecoration: "none" }}> Register Here</NavLink></p>
                    </div>

                </div>
            </Layout>
        </section>
    )
}

export default Login
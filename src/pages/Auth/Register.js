import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const Register = () => {
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [passportNumber, setPassportNumber] = useState("");
    const navigate = useNavigate();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8888/api/v1/auth/register", {
                userId,
                name,
                email,
                password,
                phone,
                address,
                answer,
                country,
                state,
                zipcode,
                passportNumber
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                // setTimeout(() => {
                //   toast.success(res.data && res.data.message);
                // }, 0);
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    const customStyle = {
        left: '-10px',
        position: 'relative',
        width: '50%',
    };

    return (
        <section className='bgGrad'>
            <Layout title="Register - Ecommer App">
                <div className="form-container text-center mt-5 d-flex flex-column justify-content-center align-items-center">
                    <h4 className="title">REGISTER FORM</h4>
                    <form onSubmit={handleSubmit} style={customStyle}>
                        <div className='d-flex justify-content-evenly mt-4' >
                            <div className="mb-3">
                                <input
                                    type="number"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    className="form-control mx-auto"
                                    id="exampleInputEmail1"
                                    placeholder="Enter Your userId"
                                    required
                                    autoFocus
                                    style={{ width: "115%" }}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control mx-auto"
                                    id="exampleInputEmail1"
                                    placeholder="Enter Your Name"
                                    required
                                    autoFocus
                                    style={{ width: "115%" }}
                                />
                            </div>
                        </div>
                        <div className='d-flex justify-content-evenly'>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control mx-auto"
                                    id="exampleInputEmail1"
                                    placeholder="Enter Your Email "
                                    required
                                    style={{ width: "115%" }}
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
                                    style={{ width: "115%" }}
                                />
                            </div>

                        </div>
                        <div className='d-flex justify-content-evenly'>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="form-control mx-auto"
                                    id="exampleInputEmail1"
                                    placeholder="Enter Your Phone"
                                    required
                                    style={{ width: "115%" }}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="form-control mx-auto"
                                    id="exampleInputEmail1"
                                    placeholder="Enter Your Address"
                                    required
                                    style={{ width: "115%" }}
                                />
                            </div>

                        </div>
                        <div className='d-flex justify-content-evenly'>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className="form-control mx-auto"
                                    id="exampleInputEmail1"
                                    placeholder="Enter Your Country"
                                    required
                                    style={{ width: "115%" }}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className="form-control mx-auto"
                                    id="exampleInputEmail1"
                                    placeholder="Enter Your State"
                                    required
                                    style={{ width: "115%" }}
                                />
                            </div>

                        </div>
                        <div className='d-flex justify-content-evenly'>
                            <div className="mb-3">
                                <input
                                    type="number"
                                    value={zipcode}
                                    onChange={(e) => setZipcode(e.target.value)}
                                    className="form-control mx-auto"
                                    id="exampleInputEmail1"
                                    placeholder="Enter Your zipcode"
                                    required
                                    style={{ width: "115%" }}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="number"
                                    value={passportNumber}
                                    onChange={(e) => setPassportNumber(e.target.value)}
                                    className="form-control mx-auto"
                                    id="exampleInputEmail1"
                                    placeholder="Enter passport Number"
                                    required
                                    style={{ width: "115%" }}
                                />
                            </div>

                        </div>

                        <div className="mb-3">
                            <input
                                type="text"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                className="form-control mx-auto"
                                id="exampleInputEmail1"
                                placeholder="What is your favorite sports ?"
                                required
                                style={{ width: "50%" }}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block btn-lg" style={{ width: "50%" }}>
                            REGISTER
                        </button>
                    </form>

                    <div className="mt-3">
                        <p>Already Have an account? Login here:<NavLink to="/login" style={{ textDecoration: "none" }}> Login Here</NavLink></p>
                    </div>
                </div>
            </Layout>
        </section>
    )
}

export default Register
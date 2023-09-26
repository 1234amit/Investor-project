import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import { toast } from "react-hot-toast";


const Header = () => {
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const handleDashboardClick = () => {
        // navigate(`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`);
        if (auth?.user?.role === 1) {
            // Admin role, navigate to the admin dashboard
            navigate("/dashboard/admin");
        } else if (auth?.user?.role === 0) {
            // User role, navigate to the user dashboard with the userId parameter
            navigate(`/dashboard/user/${auth?.user?.userId}`);
        }
    };

    const handleLogout = () => {
        console.log("logout button prassed")
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        // toast.success("Logout Successfully");
        setTimeout(() => {
            toast.success("Logout Successfully");
            navigate("/login");
        }, 0);
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Investor</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link ">
                                Home
                            </NavLink>
                        </li>

                        {
                            !auth.user ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link ">
                                            Login
                                        </NavLink>
                                    </li>
                                </>
                            ) : (

                                <NavDropdown title={auth?.user?.name} id="navbarScrollingDropdown">
                                    <NavDropdown.Item onClick={handleDashboardClick}>
                                        Dashboard
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleLogout} to="/login">
                                        LogOut
                                    </NavDropdown.Item>
                                </NavDropdown>
                            )
                        }


                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
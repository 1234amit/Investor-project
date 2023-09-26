import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from './../../components/Layout/AdminMenu';
import axios from 'axios';
import toast from 'react-hot-toast';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


const ViewUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false); // Add a loading state

    // get user


    const getAllUsers = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get("http://localhost:8888/api/v1/viewUsers/view-users");
            setUsers(data);
        } catch (error) {
            console.error("API Error:", error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    return (

        <section className='bgGrad'>
            <Layout title={"Dashboard - All Users"}>
                <div className="container-fluid mt-3 p-3">
                    <div className="row">
                        <div className="col-md-3">
                            <AdminMenu />
                        </div>
                        <div className="col-md-9 ">
                            <h1 className='text-center mb-3'>All Users</h1>
                            <div className="">
                                {loading ? (
                                    <p>Loading...</p>
                                ) : (
                                    <Table striped bordered>
                                        <thead className='text-center'>
                                            <tr>
                                                <th>User ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Address</th>
                                                <th>Country</th>
                                                <th>State</th>
                                                <th>Zipcode</th>
                                                <th>Passport Number</th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-center'>
                                            {users?.map((user) => (
                                                <tr key={user._id}>
                                                    <td>{user.userId}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phone}</td>
                                                    <td>{user.address}</td>
                                                    <td>{user.country}</td>
                                                    <td>{user.state}</td>
                                                    <td>{user.zipcode}</td>
                                                    <td>{user.passportNumber}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </section>
    );
};

export default ViewUsers;
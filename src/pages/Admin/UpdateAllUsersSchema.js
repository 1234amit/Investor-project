import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const UpdateAllUsersSchema = () => {
    const { id } = useParams(); // Get userId from the URL parameter
    console.log(id);
    const [userData, setUserData] = useState({
        depositDate: "",
        securityDeposit: "",
        totalAmount: "",
        balance: "",
        interestRate: "",
        profitBalance: "",
        paymentDate: "",
        paymentStatus: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        // Clear the userData state when userId changes

        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:8888/api/v1/viewSingleUser/view-single-user/${id}`);
                console.log("API Response:", response.data);

                if (response.data && response.data.user) {
                    const userDataFromApi = response.data.user;
                    setUserData(userDataFromApi);
                } else {
                    console.error("API response does not contain the expected data structure");
                    toast.error("Error fetching user data");
                }
            } catch (error) {
                console.error(error);
                toast.error("Error fetching user data");
            }
        };

        fetchUserData(); // Fetch user data when the component mounts

    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:8888/api/v1/update_users_schema/updateUsersSchema/${id}`, userData);
            if (res && res.data.success) {
                toast.success("User schema updated successfully");
                navigate("/dashboard/admin");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    }


    const handleUpdateField = (field, value) => {
        setUserData({ ...userData, [field]: value });
    }

    return (
        // <section className='bgGrad">
        <>
            <section className='bgGrad'>
                <Layout>
                    <h1 className='text-center'>Update User Schema</h1>
                    <div div className="container-fluid m-3 p-3" >
                        <div className="row">
                            <div className="col-md-3">
                                <AdminMenu />
                            </div>
                            <div className="col-md-9">
                                <div className="form-container text-center mt-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <input
                                                type="text" // Change to text type
                                                name="userId"
                                                value={userData.userId || ""} // Provide a default value or empty string
                                                disabled // Disable editing of userId
                                                className="form-control mx-auto"
                                                placeholder="User ID"
                                                style={{ width: "90%" }}
                                            />
                                        </div>
                                        {/* <div className="mb-3">
                                            <input
                                                type="date"
                                                name="depositDate"
                                                value={userData.depositDate || ""}
                                                onChange={handleInputChange}
                                                className="form-control mx-auto"
                                                placeholder="Deposit Date"
                                                required
                                                style={{ width: "90%" }}
                                            />
                                        </div> */}

                                        <div className="mb-3">
                                            <input
                                                type="number"
                                                value={userData.securityDeposit || ""}
                                                onChange={(e) => handleUpdateField('securityDeposit', e.target.value)}
                                                className="form-control mx-auto"
                                                id="exampleInputEmail1"
                                                placeholder="Enter Your Security Deposit "
                                                required
                                                style={{ width: "90%" }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                value={userData.totalAmount || ""}
                                                onChange={(e) => handleUpdateField('totalAmount', e.target.value)}
                                                className="form-control mx-auto"
                                                id="exampleInputPassword1"
                                                placeholder="Enter Your Deposite Total Amount"
                                                required
                                                style={{ width: "90%" }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                type="number"
                                                value={userData.balance || ""}
                                                onChange={(e) => handleUpdateField('balance', e.target.value)}
                                                className="form-control mx-auto"
                                                id="exampleInputEmail1"
                                                placeholder="Enter Your Balance"
                                                required
                                                style={{ width: "90%" }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                type="number"
                                                value={userData.interestRate || ""}
                                                onChange={(e) => handleUpdateField('interestRate', e.target.value)}
                                                className="form-control mx-auto"
                                                id="exampleInputEmail1"
                                                placeholder="Enter Your Interest Rate"
                                                required
                                                style={{ width: "90%" }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                type="number"
                                                value={userData.profitBalance || ""}
                                                onChange={(e) => handleUpdateField('profitBalance', e.target.value)}
                                                className="form-control mx-auto"
                                                id="exampleInputEmail1"
                                                placeholder="Enter Your Profit Balance"
                                                required
                                                style={{ width: "90%" }}
                                            />
                                        </div>
                                        {/* <div className="mb-3">
                                            <input
                                                type="date"
                                                value={userData.paymentDate}
                                                onChange={handleInputChange}
                                                className="form-control mx-auto"
                                                id="exampleInputEmail1"
                                                placeholder="Enter Your Payment Date"
                                                required
                                                style={{ width: "90%" }}
                                            />
                                        </div> */}
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                value={userData.paymentStatus || ""}
                                                onChange={(e) => handleUpdateField('paymentStatus', e.target.value)}
                                                className="form-control mx-auto"
                                                id="exampleInputEmail1"
                                                placeholder="Enter Your Payment Status"
                                                required
                                                style={{ width: "90%" }}
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-block btn-lg mb-5" style={{ width: "90%" }}>
                                            Update User Schema
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div >
                </Layout >
            </section>

        </>

        // </section >
    );
}

export default UpdateAllUsersSchema;

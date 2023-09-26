import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AdminMenu from '../../components/Layout/AdminMenu';

const CreateUserSchema = () => {
    const [userId, setUserId] = useState("");
    const [depositDate, setDepositDate] = useState("");
    const [securityDeposit, setSecurityDeposit] = useState("");
    const [totalAmount, setTotalAmount] = useState("");
    const [balance, setBalance] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [profitBalance, setProfitBalance] = useState("");
    const [paymentDate, setPaymentDate] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8888/api/v1/createUserSchema/create-user-schema", {
                userId,
                depositDate,
                securityDeposit,
                totalAmount,
                balance,
                interestRate,
                profitBalance,
                paymentDate,
                paymentStatus
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                // setTimeout(() => {
                //   toast.success(res.data && res.data.message);
                // }, 0);
                navigate("/dashboard/admin");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    return (
        <section className='bgGrad'>
            <Layout>
                <div className="container-fluid mt-3 p-3">
                    <div className="row">
                        <div className="col-md-4" style={{
                            borderRadius: '10px',
                            height: '260px',
                        }}>
                            <AdminMenu />
                        </div>
                        <div className="col-md-8">
                            <h1 className='text-center'>Create Users Schema</h1>
                            <div className="form-container text-center mt-5">
                                <form onSubmit={handleSubmit}>
                                    <div className='row justify-content-center'>
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="number"
                                                value={userId}
                                                onChange={(e) => setUserId(e.target.value)}
                                                className="form-control mx-auto"
                                                id="exampleInputEmail1"
                                                placeholder="Enter User ID"
                                                required
                                                autoFocus
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="date"
                                                value={depositDate}
                                                onChange={(e) => setDepositDate(e.target.value)}
                                                className="form-control mx-auto"
                                                id="exampleInputEmail1"
                                                placeholder="Enter Your Deposite Date"
                                                required
                                                autoFocus
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                    </div>
                                    <div className='row justify-content-center'>
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="number"
                                                value={securityDeposit}
                                                onChange={(e) => setSecurityDeposit(e.target.value)}
                                                className="form-control mx-auto"
                                                id="exampleInputEmail1"
                                                placeholder="Enter Your Security Deposit "
                                                required
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="text"
                                                value={totalAmount}
                                                onChange={(e) => setTotalAmount(e.target.value)}
                                                className="form-control mx-auto"
                                                id="exampleInputPassword1"
                                                placeholder="Enter Your Deposite Total Amount"
                                                required
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                    </div>
                                    <div className='row justify-content-center'>
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="number"
                                                value={balance}
                                                onChange={(e) => setBalance(e.target.value)}
                                                className="form-control mx-auto"
                                                id="exampleInputEmail1"
                                                placeholder="Enter Your Balance"
                                                required
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="number"
                                                value={interestRate}
                                                onChange={(e) => setInterestRate(e.target.value)}
                                                className="form-control mx-auto"
                                                id="exampleInputEmail1"
                                                placeholder="Enter Your Interest Rate"
                                                required
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                    </div>
                                    <div className='row justify-content-center'>
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="number"
                                                value={profitBalance}
                                                onChange={(e) => setProfitBalance(e.target.value)}
                                                className="form-control mx-auto"
                                                id="exampleInputEmail1"
                                                placeholder="Enter Your Profit Balance"
                                                required
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="date"
                                                value={paymentDate}
                                                onChange={(e) => setPaymentDate(e.target.value)}
                                                className="form-control mx-auto"
                                                id="exampleInputEmail1"
                                                placeholder="Enter Your Payment Date"
                                                required
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                    </div>
                                    <div className='row justify-content-center'>
                                        <div className="col-md-8 mb-3">
                                            <input
                                                type="text"
                                                value={paymentStatus}
                                                onChange={(e) => setPaymentStatus(e.target.value)}
                                                className="form-control mx-auto"
                                                id="exampleInputEmail1"
                                                placeholder="Enter Your Payment Status"
                                                required
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                    </div>
                                    <div className='row justify-content-center'>
                                        <div className="col-md-8 mb-3">
                                            <button type="submit" className="btn btn-primary btn-block btn-lg mb-5" style={{ width: "100%" }}>
                                                Submit User Schema
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>



            </Layout>
        </section>
    )
}

export default CreateUserSchema
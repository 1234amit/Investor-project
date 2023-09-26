import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from './../../components/Layout/AdminMenu';
import axios from 'axios';
import toast from 'react-hot-toast';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

const ViewAllUsersSchema = () => {
    const [schemas, setSchemas] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllUsersSchema = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get("http://localhost:8888/api/v1/all_users_schema/allUsersSchema");
            console.log(data);
            setSchemas(data);
        } catch (error) {
            console.error("API Error:", error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllUsersSchema();
    }, []);

    return (

        <section className='bgGrad'>
            <Layout>
                <div className="container-fluid mt-3 p-3">
                    <div className="row">
                        <div className="col-md-3" style={{
                            borderRadius: '10px',
                            height: '260px',
                        }}>
                            <AdminMenu />
                        </div>
                        <div className="col-md-9">
                            <h1 className='text-center mb-5'>All Users Schema</h1>
                            <div className="">
                                {loading ? (
                                    <p>Loading...</p>
                                ) : (
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th className='text-center'>User ID</th>
                                                <th className='text-center'>Deposit Date</th>
                                                <th className='text-center'>Security Deposit</th>
                                                <th className='text-center'>Total Amount</th>
                                                <th className='text-center'>Balance</th>
                                                <th className='text-center'>Interest Rate</th>
                                                <th className='text-center'>Profit Balance</th>
                                                <th className='text-center'>Payment Date</th>
                                                <th className='text-center'>Payment Status</th>
                                                <th className='text-center'>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {schemas?.map((schema) => (
                                                <tr key={schema.depositDate}>
                                                    <td className='text-center'>{schema.userId}</td>
                                                    <td className='text-center'>{schema.depositDate}</td>
                                                    <td className='text-center'>{schema.securityDeposit}</td>
                                                    <td className='text-center'>{schema.totalAmount}</td>
                                                    <td className='text-center'>{schema.balance}</td>
                                                    <td className='text-center'>{schema.interestRate}</td>
                                                    <td className='text-center'>{schema.profitBalance}</td>
                                                    <td className='text-center'>{schema.paymentDate}</td>
                                                    <td className='text-center'>{schema.paymentStatus}</td>

                                                    <td>
                                                        <Link to={`/dashboard/admin/updateUsersSchema/${schema.id}`}>
                                                            <Button variant="primary">Update</Button>
                                                        </Link>
                                                    </td>
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
    )
}

export default ViewAllUsersSchema
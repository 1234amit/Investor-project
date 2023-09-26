import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import toast from 'react-hot-toast';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../user/dashboardStyle.css'


const Dashboard = () => {
    const { userId } = useParams();
    console.log("userId:", userId);
    const [schemas, setSchemas] = useState([]);
    const [loading, setLoading] = useState(false); // Add a loading state
    const [forBar, setForBar] = useState({
        labels: [],
        datasets: [
            {
                label: "Interest Rate",
                data: [],
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 1,
            },
        ],
    });

    const [forPie, setForPie] = useState({
        labels: [],
        datasets: [
            {
                data: [],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#8A2BE2",
                    "#00FF00",
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#8A2BE2",
                    "#00FF00",
                ],
            },
        ],
    });

    const [forLine, setForLine] = useState({
        labels: [],
        datasets: [
            {
                label: "Deposit Date vs Profit Balance",
                data: [],
                fill: false,
                borderColor: "#FF5733",
            },
        ],
    });





    const getUsersSchema = async (userId) => {
        try {
            setLoading(true);
            // const userId = 1;
            const { data } = await axios.get(
                `http://localhost:8888/api/v1/view_users_schema/viewUsersSchema/${userId}`
            );
            console.log(data);
            setSchemas(data);

            // this code is for bar chat
            const labels = data.map((schema) => schema.interestRate);
            const values = data.map((schema) => schema.profitBalance);
            setForBar((prevState) => ({
                ...prevState,
                labels,
                datasets: [
                    {
                        ...prevState.datasets[0],
                        data: values,
                    },
                ],
            }));
            // end of the bar chat

            // for pie chart
            const pieLabels = data.map((schema) => parseInt(schema.totalAmount));
            const pieData = data.map((schema) => (schema.profitBalance * 100) / schema.totalAmount);
            setForPie((prevState) => ({
                ...prevState,
                labels: pieLabels,
                datasets: [
                    {
                        ...prevState.datasets[0],
                        data: pieData,
                    },
                ],
            }));
            // end of pie chart


            // this code is for line Chart
            const lineLabels = data.map((schema) => schema.depositDate);
            const lineData = data.map((schema) => schema.profitBalance);
            setForLine((prevState) => ({
                ...prevState,
                labels: lineLabels,
                datasets: [
                    {
                        ...prevState.datasets[0],
                        data: lineData,
                    },
                ],
            }));
            // end of Line CHart


        } catch (error) {
            console.error("API Error:", error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUsersSchema(userId);
    }, [userId]);




    return (
        <Layout>
            <section className='bgGrad pt-5'>
                <Container className=''>
                    <Row className=''>
                        <Col sm={8}>
                            {schemas?.map((schema) => (
                                <div className='mb-5'>
                                    <Row className='justify-content-between'>
                                        <Col sm={4}>
                                            Deposite Date: {schema.depositDate}
                                        </Col>
                                        <Col sm={4}>
                                            Payment Date: {schema.paymentDate}
                                        </Col>
                                        <Col sm={2}>
                                            Payment Status: {schema.paymentStatus}
                                        </Col>
                                    </Row>
                                    <div className='justify-content-center py-6'>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th className='text-center'>User ID</th>
                                                    <th className='text-center'>Security Deposit</th>
                                                    <th className='text-center'>Total Amount</th>
                                                    <th className='text-center'>Interset Rate</th>
                                                    <th className='text-center'>Profit Balance</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='text-center'>{schema.userId}</td>
                                                    <td className='text-center'>${schema.securityDeposit}</td>
                                                    <td className='text-center'>${schema.totalAmount}</td>
                                                    <td className='text-center'>{schema.interestRate}%</td>
                                                    <td className='text-center'>${schema.profitBalance}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            ))}
                        </Col>
                        <Col sm={4}>
                            <div className='mb-5'>
                                <div style={{ width: '100%', }} className='justify-content-center mb-5'>
                                    <h5 className='text-center'>Profit Balance with the Rate of Interest</h5>
                                    <BarChart chartData={forBar} />
                                </div>
                                <div style={{ width: '100%', }} className='justify-content-center mb-5'>
                                    <h5 className='text-center'>Profit Balance with the Deposit Date</h5>
                                    <LineChart chartData={forLine} />
                                </div>
                                <div style={{ width: '80%', }} className='justify-content-center mb-5'>
                                    <PieChart chartData={forPie} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default Dashboard
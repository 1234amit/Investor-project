// import React, { useEffect, useState } from 'react'
// import Layout from '../../components/Layout/Layout'
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import Table from 'react-bootstrap/Table';
// import { useParams } from 'react-router-dom';

// const Profile = () => {
//     const { userId } = useParams();
//     console.log("userId:", userId);
//     const [schemas, setSchemas] = useState([]);
//     const [loading, setLoading] = useState(false); // Add a loading state

//     const getUsersSchema = async (userId) => {
//         try {
//             setLoading(true);
//             // const userId = 1;
//             const { data } = await axios.get(
//                 `http://localhost:8888/api/v1/view_users_schema/viewUsersSchema/${userId}`
//             );
//             console.log(data);
//             setSchemas(data);
//         } catch (error) {
//             console.error("API Error:", error);
//             toast.error("Something went wrong");
//         } finally {
//             setLoading(false);
//         }
//     }

//     useEffect(() => {
//         getUsersSchema(userId);
//     }, [userId]);


//     return (
//         <Layout>
//             <h1 className='text-center'>My Schema</h1>
//             <div className='container'>
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : (
//                     <Table striped>
//                         <thead>
//                             <tr>
//                                 <th>User ID</th>
//                                 <th>depositDate</th>
//                                 <th>securityDeposit</th>
//                                 <th>totalAmount</th>
//                                 <th>interestRate</th>
//                                 <th>profitBalance</th>
//                                 <th>paymentDate</th>
//                                 <th>paymentStatus</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {schemas?.map((schema) => (
//                                 <tr key={schema._id}>
//                                     <td>{schema.userId}</td>
//                                     <td>{schema.depositDate}</td>
//                                     <td>{schema.securityDeposit}</td>
//                                     <td>{schema.totalAmount}</td>
//                                     <td>{schema.interestRate}</td>
//                                     <td>{schema.profitBalance}</td>
//                                     <td>{schema.paymentDate}</td>
//                                     <td>{schema.paymentStatus}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </Table>
//                 )}
//             </div>
//         </Layout>
//     )
// }

// export default Profile
import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../context/auth';

const AdminDashboard = () => {
    const [auth] = useAuth();
    return (
        <section className='bgGrad'>
            <Layout>
                <div className='container-fluid mt-3 p-3'>
                    <div className='row'>
                        <div className="col-md-3" style={{
                            borderRadius: '10px',
                            height: '260px',
                        }}>
                            <AdminMenu />
                        </div>
                        <div className='col-md-9 d-flex justify-content-center align-items-center'>
                            <div className="card w-50 p-3" style={{
                                fontFamily: 'Roboto',
                            }}>
                                <h3 className='text-center my-4'> Admin Name : {auth?.user?.name}</h3>
                                <h3 className='text-center my-4'> Admin Email : {auth?.user?.email}</h3>
                                <h3 className='text-center my-4'> Admin Contact : {auth?.user?.phone}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </section>
    )
}

export default AdminDashboard
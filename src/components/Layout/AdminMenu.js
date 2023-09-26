import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
    const cyanBackgroundColor = {
        backgroundColor: '#202020',
        borderRadius: '10px',
    };
    return (
        <>
            <div className="text-center py-3" style={cyanBackgroundColor} >
                <div className="list-group m-3 rounded-3" >
                    <h4 className="text-white">Admin Panel</h4>
                    <NavLink
                        to="/dashboard/admin/create-user-schema"
                        className="list-group-item list-group-item-action"
                    >
                        Create User Schema
                    </NavLink>

                    <NavLink
                        to="/dashboard/admin/view-users"
                        className="list-group-item list-group-item-action"
                    >
                        All Users
                    </NavLink>

                    <NavLink to="/dashboard/admin/viewUsersSchema" className="list-group-item list-group-item-action">
                        View Users Schema
                    </NavLink>
                    {/* <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink> */}
                </div>
            </div>
        </>
    );
};

export default AdminMenu;
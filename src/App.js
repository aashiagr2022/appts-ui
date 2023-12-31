import React from "react";
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import Navbar from "./components/Navbar";
import UpdateUser from "./components/UpdateUser";
import ListAppt from "./components/ListAppt";
import UpdateAppt from "./components/UpdateAppt";
import AddAppt from "./components/AddAppt";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import UserDashboard from "./components/UserDashboard";
import UpdateUserDetails from "./components/UpdateUserDetails";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Homepage" element={<Homepage />} />
                <Route path="/userList" element={<UserList />} />
                <Route path="/addUser" element={<AddUser />} />
                <Route path="/editUser" element={<UpdateUser />} />
                <Route path="/apptList" element={<ListAppt />} />
                <Route path="/addAppt" element={<AddAppt />} />
                <Route path="/updateAppt/:appointmentId" element={<UpdateAppt />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/dashboard/:userId" element={<Dashboard />} />
                <Route exact path="/admin/dashboard" element={<Homepage />} />
                <Route exact path="/updateUserDetails/:userId" element={<UpdateUserDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

const Dashboard = (props) => {
    const { userId } = useParams();
    console.log("userId:", userId);

    return <UserDashboard userId={userId}/>;
};

export default App;

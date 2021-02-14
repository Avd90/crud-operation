import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        webiste: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get("http://localhost:3003/users/" + id);
        setUser(res.data);
    };
    return (
        <div className="container py-4">
            <div className="w-50 mx-auto shadow p-5">
                <Link className="btn btn-primary" to="/"> Back to Home </Link>
                <h1 className="text-center mb-4">User Id: {id}</h1>
                <hr />
                <ul className="list-group w-60" >
                    <li className="list-group-item">name:{user.name}</li>
                    <li className="list-group-item">user name:{user.username}</li>
                    <li className="list-group-item">email:{user.email}</li>
                    <li className="list-group-item">phone:{user.phone}</li>
                    <li className="list-group-item">website:{user.website}</li>
                </ul>
            </div>
        </div>
    );
};

export default User;

import React, {useState} from 'react'
import axios from 'axios';
import {useHistory} from "react-router-dom";

const AddUser = () => {

    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
 
    const {name, username, email, phone, website} = user;

    const OnInputChange = e => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        history.push("/")
    }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h1 className="text-center mb-4">Add New User</h1>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter Your Name"
                          name="name"
                          value={name}
                          onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter Your User Name"
                          name="username"
                          value={username}
                          onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="Enter Your E-Mail Address"
                          name="email"
                          value={email}
                          onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter Your Phone Number"
                          name="phone"
                          value={phone}
                          onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter Your Website Name"
                          name="website"
                          value={website}
                          onChange={e => OnInputChange(e)}
                        /> 
                    </div>
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div> 
    );
};

export default AddUser;


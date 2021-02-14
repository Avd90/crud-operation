import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useHistory, useParams} from "react-router-dom";

const EditUser = () => {

    let history = useHistory();
    
    const { id } = useParams();

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
        await axios.put("http://localhost:3003/users/" +id, user);
        history.push("/")
    }

    useEffect(() => {
        loadUser();
    },[])

    const loadUser = async () => {
        const result = await axios.get("http://localhost:3003/users/"+id);   
        setUser(result.data);
    }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h1 className="text-center mb-4">Edit User Details</h1>
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
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
        </div> 
    );
};

export default EditUser;
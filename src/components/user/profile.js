import { useParams, useLocation } from "react-router-dom";
import React from 'react';


const Profile = () => {
    // Use the useParams hook to get the username from the URL
    // username has to be applied as a named parameter in the route
    let { username } = useParams();
    // useLocation hook is used to grab the state from the input to object
    // You can grab each field in the object by using the same name as the variable name
    let { pathname } = useLocation(); 
    let { state } = useLocation();


    return (
        <div>
            <h1>{username} Profile</h1>
            <p> Registered on:{state.registrationdate} </p>
            <p> Visiting: {pathname}</p>
        </div>
    )
}

export default Profile;
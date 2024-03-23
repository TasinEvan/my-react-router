import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Contact = () => {

    const contacts = useLoaderData()
    return (
        <div>
            <h4>Contact Us </h4>
            <p>You are only one call away from us 

            </p>
            <h5>No of Users:{contacts.length}</h5>
            {
                contacts.map(user =><User key={user.id} user={user}></User>  )
            }
        </div>
    );    
};

export default Contact;
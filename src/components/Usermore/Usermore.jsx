import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const Usermore = () => {
    const user = useLoaderData()
    const {userid} = useParams()
    const {phone, website} = user
    const navigate = useNavigate()

    const handleBack = () =>{
        navigate(-1)
            }
            console.log(userid)
    return (
        <div>
            <h5>User Details</h5>
            <p>here we show our user</p>
            <p>phone NO. :{phone}</p>
            <p>website: {website}</p>
            <button onClick={handleBack}>Go back</button>
        </div>
    );
};

export default Usermore;
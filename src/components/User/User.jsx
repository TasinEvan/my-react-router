
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';
const User = ({user}) => {
    const navigate = useNavigate()
    const handleShowDetails = () =>{
        navigate(`/contact/${id}`)

    }


    const {name,email,id} = user
    return (
        <div>
            <h1>Name:{name}</h1>
            <p>Mail: {email} </p>
            <Link to={`/contact/${id}`}>Show details</Link>
            <button onClick={handleShowDetails}>Click to show details</button>
            
        </div>
    );
};
User.propTypes ={
    user:PropTypes.object
}
export default User;
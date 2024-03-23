import { Link, useRouteError } from "react-router-dom";


const Errorpage = () => {

const error = useRouteError()

    return (
        <div>
            <h1>Oops !!!</h1>
            <p>{error.statusText || error.error.message} ;</p>
            {
                error.status === 404 && 
                <div>
                    <h1>{error.status}  page not found</h1>
                    <p>Please go back</p>
                    <Link to={`/`}>Home </Link>

                     </div>
                     
            }
        </div>
    );
};

export default Errorpage;
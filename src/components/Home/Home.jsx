import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Header/Navbar";
import './user.css'


const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
            
           <Navbar></Navbar>
          {
            navigation.state === "loading"?
            <h1 className="hudai"> Loading...</h1>:
<Outlet></Outlet>
          }
           
        </div>
    );
};

export default Home;
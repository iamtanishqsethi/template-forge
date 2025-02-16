import Header from "./Header";
import {Outlet} from "react-router-dom";

const Body=()=>{
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}
export default Body;
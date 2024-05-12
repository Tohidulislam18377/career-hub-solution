import { Link } from "react-router-dom";
import './Header.css'



const Header = () => {
    return (
        <div className="header-container h-auto w-auto ">
            <div className="flex justify-around mt-5 items-center">
                <div className="-ml-12">
                    <p>CareerHub</p>
                </div>
                <div className="ml-9">
                    <Link className="mr-5" to={'/'}>Home</Link>
                    <Link className="mr-5" to={'/statistics'}>Statistics</Link>
                    <Link className="mr-5" to='/appliedJobs'>Applied Jobs</Link>
                    <Link className="mr-5" to='/blog'>Blog</Link>
                </div>
                <div className="ml-12">
                    <button className="start-applying">Star Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
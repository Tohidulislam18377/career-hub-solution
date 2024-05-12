import { Link } from "react-router-dom";
import './JobItem.css'

const JobItem = ({ job,handelBtn }) => {
    const {id,logo,job_title,company_name,location,remote_or_onsite,salary} = job;
    // console.log(job);
    return (
        <div>
            <div className="items-container w-[300px] h-[300px] p-8">
                <img className="rounded mb-5 " src={logo} alt="" />
                <p>{job_title}</p>
                <p>{company_name}</p>
                <p>{remote_or_onsite}</p>
                <div className="flex gap-3 pb-5">
                <p>{location}</p>
                <p>{salary}</p>
                </div>
               <Link onClick={()=>handelBtn(job)} to={`/job/${id}`} className="view-link p-3">View Details</Link>
            </div>
        </div>
    );
};

export default JobItem;
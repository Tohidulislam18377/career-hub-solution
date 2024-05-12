import { Link } from 'react-router-dom';
import './AppliedJobDetails.css'

const AppliedJobDetails = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, salary } = job;
    console.log(job);
    return (
        <div className="applied-job-details ml-8 mt-5 flex justify-between mr-8 items-center w-[80%] mb-8">
            <div className="flex gap-x-4 pl-5 pt-3 pb-3  ">
                <img className='rounded' src={logo} alt="" />
                <div>
                    <p>{job_title}</p>
                    <p>{company_name}</p>
                    <p>{remote_or_onsite}</p>
                    <div className="flex">
                        <p>{location}</p>
                        <p>{salary}</p>
                    </div>
                </div>
            </div>
            <Link to={`/job/${id}`} className='view-details-btn mr-5 p-2 text-white'>View Details</Link>
        </div>
    );
};

export default AppliedJobDetails;
import { useLoaderData, useParams } from "react-router-dom";
import './JobDetails.css'
import { addToDb } from "../../utilities/fakedb";


const JobDetails = () => {
    const savedCart = useLoaderData();
    const { jobId } = useParams();
    const savedFind = savedCart.find(saved => saved.id == jobId);
    // console.log(savedFind);
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = savedFind;

    const handelApply = (getFind) => {
        console.log(getFind.id);
        addToDb(getFind.id);
    }
    return (
        <div className="flex gap-x-4 mt-[150px] ml-5 mr-5 mb-5">
            <div className="w-[700px]">
                <p className="mb-3"><span className="text-2xl font-medium">Job Description:</span> {job_description}</p>
                <p className="mb-3"><span className="text-2xl font-medium">Job Responsibility:</span> {job_responsibility}</p>
                <p className="mb-3"><span className="text-2xl font-medium">Educational Requirement:</span> {educational_requirements}</p>
                <p className="mb-3"><span className="text-2xl font-medium">Experience:</span> {experiences}</p>
            </div>
            <div className="job-details-container w-[424px] h-[400px] pt-5 mt-5">
                <p className="text-center pt-5 text-2xl font-medium pb-5">Job Details</p>
                <p className="ml-8 pb-3"><span className="mr-5"><i className="fa-solid fa-comment-dollar"></i></span>Salary: {salary}</p>
                <p className="ml-8 pb-3"><span className="mr-5"><i className="fa-solid fa-bag-shopping"></i></span>Job Title: {job_title}</p>
                <p className="text-2xl font-medium text-center pb-3">Contact Information</p>
                <p className="ml-8 pb-3"><span className="mr-5"><i className="fa-solid fa-phone"></i></span>Phone:{contact_information.phone}</p>
                <p className="ml-8 pb-3"><span className="mr-5"><i className="fa-solid fa-envelope"></i></span>Email: {contact_information.email}</p>
                <p className="ml-8 pb-3"><span className="mr-5"><i className="fa-solid fa-location-dot"></i></span>Location: {contact_information.address}</p>
                <button onClick={() => handelApply(savedFind)} className="apply-btn">Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetails;
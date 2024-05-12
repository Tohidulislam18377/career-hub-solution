import { useLoaderData } from "react-router-dom";
import AppliedJobDetails from "../AppliedJobDetails/AppliedJobDetails";


const AppliedJob = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            {
                data.map(job=><AppliedJobDetails
                key={job.id}
                job = {job}
                ></AppliedJobDetails>)
            }
        </div>
    );
};

export default AppliedJob;
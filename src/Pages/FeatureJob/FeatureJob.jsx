
import { addToDb } from '../../utilities/fakedb';
import JobItem from '../JobItem/JobItem';
import './FeatureJob.css'
import { useEffect, useState } from 'react';

const FeatureJob = () => {
  const [jobs,setJobs] = useState([]);
//   console.log(jobs);
  useEffect(()=>{
    fetch('jobs.json')
    .then(res =>res.json())
    .then(data =>setJobs(data))
  },[jobs]);

  const handelBtn = (product)=>{
    addToDb(product.id);
  }

    return (
        <div>
          <div className='text-center mb-5'>
            <h3 className='text-4xl font-bold'>Featured Jobs</h3>
            <p className='text-2xl'>Explore thousands of job opportunities with all the information you need. Its your future</p>
          </div>
          <div className='grid md:grid-cols-2 gap-y-6 ml-32 mb-5'>
            {
                jobs.map(job=><JobItem
                key={job.id}
                job ={job}
                handelBtn = {handelBtn}
                ></JobItem>)
            }
          </div>
        </div>
    );
};

export default FeatureJob;
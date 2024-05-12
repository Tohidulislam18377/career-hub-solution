import Banner from "../Banner/Banner";
import FeatureJob from "../FeatureJob/FeatureJob";
import JobCategory from "../JobCategory/JobCategory";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <JobCategory></JobCategory>
           <FeatureJob></FeatureJob>
        </div>
    );
};

export default Home;
import { createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import JobCategory from "../Pages/JobCategory/JobCategory";
import FeatureJob from "../Pages/FeatureJob/FeatureJob";
import JobDetails from "../Pages/JobDetails/JobDetails";
import cartProductsLoader from "../Loader/CartProductLoader";
import AppliedJob from "../Pages/AppliedJob/AppliedJob";
import applyLoader from "../Loader/ApplyJobLoader";
import Blog from "../Pages/Blog/Blog";





const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'statistics',
                element:<Statistics></Statistics>,
                
                
            },
            {
                path:'jobCategory',
                element:<JobCategory></JobCategory>
            },
            {
                path:'featurejob',
                element:<FeatureJob></FeatureJob>,
            },
            {
                path:'appliedJobs',
                element:<AppliedJob></AppliedJob>,
                loader: applyLoader
            },
            {
                path:'job/:jobId',
                element:<JobDetails></JobDetails>,
                loader:cartProductsLoader
            },
            {
              path:'blog',
              element: <Blog></Blog>  
            }
            
        ]
    }
]);

export default router
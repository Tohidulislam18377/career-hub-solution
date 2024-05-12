import { getShoppingCart } from "../utilities/fakedb";

const applyLoader = async ()=>{
    const jobsLoaderData = await fetch('jobs.json');
    const jobs = await jobsLoaderData.json();

    const getLocalData = getShoppingCart();
    const savedCart = [];
    for(const id in getLocalData){
        const toParse = parseInt(id)
        const findData = jobs.find(job=>job.id === toParse);
        if (findData) {
            savedCart.push(findData) 
        }
    }
    return savedCart
};

export default applyLoader;
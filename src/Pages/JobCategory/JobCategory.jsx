import img1 from '../../assets/icons/accounts.png'
import img2 from '../../assets/icons/creative.png'
import img3 from '../../assets/icons/marketing.png'
import img4 from '../../assets/icons/chip.png'
import './JobCategory.css'

const JobCategory = () => {
    return (
        <div>
            <div className="text-center mb-5">
                <h3 className="text-4xl font-bold">Job Category List</h3>
                <p className="text-2xl font-normal">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {/* Job Category List */}
            <div className='grid md:grid-cols-4 gap-y-5 ml-12 mb-5'>
                <div className='job-category-list1 w-[200px] h-[200px] text-center pt-12'>
                    <img className='pl-20 pb-3' src={img1} alt="" />
                    <p>Account & Finance</p>
                    <p>300 Jobs Available</p>
                </div>
                <div className='job-category-list1 w-[200px] h-[200px] text-center pt-12'>
                    <img className='pl-20 pb-3' src={img2} alt="" />
                    <p>Creative Design</p>
                    <p>100+ Jobs Available</p>
                </div>
                <div className='job-category-list1 w-[200px] h-[200px] text-center pt-12'>
                    <img className='pl-20 pb-3' src={img3} alt="" />
                    <p>Marketing & Sales</p>
                    <p>150 Jobs Available</p>
                </div>
                <div className='job-category-list1 w-[200px] h-[200px] text-center pt-12'>
                    <img className='pl-20 pb-3' src={img4} alt="" />
                    <p>Engineering Job</p>
                    <p>224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;
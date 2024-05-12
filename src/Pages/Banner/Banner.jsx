import './Banner.css'
import img1 from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className='banner-container mb-5'>
            <div className="flex items-center gap-x-15 ml-6">
                <div>
                    <h3 className='text-7xl font-semibold pb-3'>One Step <br /> Closer To Your Dream Job</h3>
                    <p className='pb-3'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className='btn-container p-3 '>Started</button>
                </div>
                <div>
                    <img className="h-[700px] w-[816px] pt-5" src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;